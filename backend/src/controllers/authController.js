import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, 
};

const signToken = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });


export const register = async (req, res) => {
    const { name, email, password } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email, and password are required." });
    }
    if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters." });
    }

    try {
        // Duplicate email check
        const existing = await User.findOne({ email: email.toLowerCase() });
        if (existing) {
            return res.status(409).json({ message: "An account with that email already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({ name, email, password: hashedPassword });

        const token = signToken(user._id);
        res.cookie("token", token, COOKIE_OPTIONS);

        return res.status(201).json({
            message: "Account created successfully.",
            user: { id: user._id, name: user.name, email: user.email },
            token,
        });
    } catch (err) {
        // Mongoose duplicate key error
        if (err.code === 11000) {
            return res.status(409).json({ message: "An account with that email already exists." });
        }
        console.error("[register]", err.message);
        return res.status(500).json({ message: "Server error. Please try again." });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const token = signToken(user._id);
        res.cookie("token", token, COOKIE_OPTIONS);

        return res.status(200).json({
            message: "Logged in successfully.",
            user: { id: user._id, name: user.name, email: user.email },
            token,
        });
    } catch (err) {
        console.error("[login]", err.message);
        return res.status(500).json({ message: "Server error. Please try again." });
    }
};

export const logout = (req, res) => {
    res.clearCookie("token", { ...COOKIE_OPTIONS, maxAge: 0 });
    return res.status(200).json({ message: "Logged out successfully." });
};

export const getProfile = async (req, res) => {
    // req.user is set by protect middleware
    return res.status(200).json({
        user: {
            id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            createdAt: req.user.createdAt,
        },
    });
};
