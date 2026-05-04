import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import cryptoRoutes from "./routes/cryptoRoutes.js";

export const app = express();

// cors
// Allow the Vite dev server (and production frontend) to send cookies
const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173")
    .split(",")
    .map((o) => o.trim());

app.use(
    cors({
        origin: (origin, callback) => {
            // Allow requests with no origin (like curl, postman)
            if (!origin) return callback(null, true);

            // If '*' is specified in env, allow ALL origins dynamically
            if (allowedOrigins.includes("*")) {
                return callback(null, true);
            }

            // Otherwise, check for exact match
            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error(`CORS: origin ${origin} not allowed`));
            }
        },
        credentials: true, // needed to send or receive HTTP-only cookies
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api/crypto", cryptoRoutes);

app.get("/", (req, res) => res.json({ status: "ok", message: "Crypto API is running." }));

app.use((req, res) => res.status(404).json({ message: "Route not found." }));

app.use((err, req, res, next) => {
    console.error("[global error]", err.message);
    res.status(err.status || 500).json({
        message:
            process.env.NODE_ENV === "production"
                ? "An unexpected error occurred."
                : err.message,
    });
});
