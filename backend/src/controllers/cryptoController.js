import Crypto from "../models/Crypto.js";

export const getAllCrypto = async (req, res) => {
    try {
        const cryptos = await Crypto.find().sort({ createdAt: -1 });
        return res.status(200).json({ count: cryptos.length, cryptos });
    } catch (err) {
        console.error("[getAllCrypto]", err.message);
        return res.status(500).json({ message: "Failed to fetch cryptocurrencies." });
    }
};

export const getGainers = async (req, res) => {
    try {
        const cryptos = await Crypto.find({ change24h: { $gt: 0 } })
            .sort({ change24h: -1 })
            .limit(20);
        return res.status(200).json({ count: cryptos.length, cryptos });
    } catch (err) {
        console.error("[getGainers]", err.message);
        return res.status(500).json({ message: "Failed to fetch gainers." });
    }
};

export const getNewListings = async (req, res) => {
    try {
        const cryptos = await Crypto.find().sort({ createdAt: -1 }).limit(20);
        return res.status(200).json({ count: cryptos.length, cryptos });
    } catch (err) {
        console.error("[getNewListings]", err.message);
        return res.status(500).json({ message: "Failed to fetch new listings." });
    }
};

export const addCrypto = async (req, res) => {
    const { name, symbol, price, image, change24h } = req.body;

    if (!name || !symbol || price === undefined) {
        return res.status(400).json({ message: "Name, symbol, and price are required." });
    }
    if (typeof price !== "number" || price < 0) {
        return res.status(400).json({ message: "Price must be a non-negative number." });
    }

    try {
        const crypto = await Crypto.create({
            name,
            symbol,
            price,
            image: image || "",
            change24h: change24h ?? 0,
        });
        return res.status(201).json({
            message: "Cryptocurrency added successfully.",
            crypto,
        });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ message: "A crypto with that symbol already exists." });
        }
        if (err.name === "ValidationError") {
            const messages = Object.values(err.errors).map((e) => e.message);
            return res.status(400).json({ message: messages.join(", ") });
        }
        console.error("[addCrypto]", err.message);
        return res.status(500).json({ message: "Failed to add cryptocurrency." });
    }
};
