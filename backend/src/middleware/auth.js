import jwt from "jsonwebtoken";
import User from "../models/User.js";

/**
 * Protect middleware: verifies JWT from HTTP-only cookie or Authorization header.
 * Attaches req.user = { id, name, email } on success.
 */

export const protect = async (req, res, next) => {
    let token;

    // Try HTTP-only cookie
    if (req.cookies?.token) {
        token = req.cookies.token;
    }
    // Fallback to Bearer token
    else if (req.headers.authorization?.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res.status(401).json({ message: "Not authenticated. Please log in." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({ message: "User no longer exists." });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token." });
    }
};
