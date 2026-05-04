import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "../src/app.js";

dotenv.config();

// Use a separate test DB to avoid polluting production data
const TEST_DB = process.env.MONGO_URI.replace(/\/[^/?]+(\?)/, "/coinbase_IA_test$1");

beforeAll(async () => {
    await mongoose.connect(TEST_DB);
    // Clean slate for each test run
    await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.disconnect();
});

// AUTH TESTS
describe("POST /api/register", () => {
    it("creates a new user and returns 201", async () => {
        const res = await request(app).post("/api/register").send({
            name: "Test User",
            email: "test@example.com",
            password: "password123",
        });
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("token");
        expect(res.body.user.email).toBe("test@example.com");
    });

    it("returns 409 for duplicate email", async () => {
        const res = await request(app).post("/api/register").send({
            name: "Test User",
            email: "test@example.com",
            password: "password123",
        });
        expect(res.status).toBe(409);
    });

    it("returns 400 when fields are missing", async () => {
        const res = await request(app).post("/api/register").send({ email: "a@b.com" });
        expect(res.status).toBe(400);
    });

    it("returns 400 for short password", async () => {
        const res = await request(app).post("/api/register").send({
            name: "Short",
            email: "short@test.com",
            password: "abc",
        });
        expect(res.status).toBe(400);
    });
});

describe("POST /api/login", () => {
    it("returns 200 and token for valid credentials", async () => {
        const res = await request(app).post("/api/login").send({
            email: "test@example.com",
            password: "password123",
        });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("token");
    });

    it("returns 401 for wrong password", async () => {
        const res = await request(app).post("/api/login").send({
            email: "test@example.com",
            password: "wrongpassword",
        });
        expect(res.status).toBe(401);
    });

    it("returns 401 for non-existent email", async () => {
        const res = await request(app).post("/api/login").send({
            email: "nobody@example.com",
            password: "password123",
        });
        expect(res.status).toBe(401);
    });
});

// PROFILE TESTS
describe("GET /api/profile", () => {
    let token;

    beforeAll(async () => {
        const res = await request(app).post("/api/login").send({
            email: "test@example.com",
            password: "password123",
        });
        token = res.body.token;
    });

    it("returns 200 with user data when authenticated", async () => {
        const res = await request(app)
            .get("/api/profile")
            .set("Authorization", `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(res.body.user.email).toBe("test@example.com");
    });

    it("returns 401 without a token", async () => {
        const res = await request(app).get("/api/profile");
        expect(res.status).toBe(401);
    });

    it("returns 401 with an invalid token", async () => {
        const res = await request(app)
            .get("/api/profile")
            .set("Authorization", "Bearer badtoken");
        expect(res.status).toBe(401);
    });
});

// CRYPTO TESTS
describe("Crypto endpoints", () => {
    let token;

    beforeAll(async () => {
        const res = await request(app).post("/api/login").send({
            email: "test@example.com",
            password: "password123",
        });
        token = res.body.token;

        // Seed BTC so the duplicate test below is always deterministic
        await request(app)
            .post("/api/crypto")
            .set("Authorization", `Bearer ${token}`)
            .send({ name: "Bitcoin", symbol: "BTC", price: 60000, change24h: 2.5 });
    });

    it("POST /api/crypto — creates a crypto when authenticated", async () => {
        const res = await request(app)
            .post("/api/crypto")
            .set("Authorization", `Bearer ${token}`)
            .send({ name: "Litecoin", symbol: "LTC", price: 80, change24h: 1.2 });
        expect(res.status).toBe(201);
        expect(res.body.crypto.symbol).toBe("LTC");
    });

    it("POST /api/crypto — rejects duplicate symbol", async () => {
        // Insert a unique symbol first
        await request(app)
            .post("/api/crypto")
            .set("Authorization", `Bearer ${token}`)
            .send({ name: "DupCoin", symbol: "DUPT", price: 1 });

        // Immediately try to insert the same symbol again
        const res = await request(app)
            .post("/api/crypto")
            .set("Authorization", `Bearer ${token}`)
            .send({ name: "DupCoin2", symbol: "DUPT", price: 2 });
        expect(res.status).toBe(409);
    });

    it("POST /api/crypto — returns 401 without auth", async () => {
        const res = await request(app)
            .post("/api/crypto")
            .send({ name: "Ether", symbol: "ETH", price: 3000 });
        expect(res.status).toBe(401);
    });

    it("GET /api/crypto — returns array of cryptos", async () => {
        const res = await request(app).get("/api/crypto");
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.cryptos)).toBe(true);
    });

    it("GET /api/crypto/gainers — returns sorted gainers", async () => {
        // Add another with higher gain first
        await request(app)
            .post("/api/crypto")
            .set("Authorization", `Bearer ${token}`)
            .send({ name: "Ethereum", symbol: "ETH", price: 3000, change24h: 5.0 });

        const res = await request(app).get("/api/crypto/gainers");
        expect(res.status).toBe(200);
        const changes = res.body.cryptos.map((c) => c.change24h);
        expect(changes).toEqual([...changes].sort((a, b) => b - a));
    });

    it("GET /api/crypto/new — returns newest first", async () => {
        const res = await request(app).get("/api/crypto/new");
        expect(res.status).toBe(200);
        const dates = res.body.cryptos.map((c) => new Date(c.createdAt).getTime());
        expect(dates).toEqual([...dates].sort((a, b) => b - a));
    });

    it("POST /api/crypto — returns 400 for missing required fields", async () => {
        const res = await request(app)
            .post("/api/crypto")
            .set("Authorization", `Bearer ${token}`)
            .send({ name: "NoSymbol" }); // missing symbol and price
        expect(res.status).toBe(400);
    });
});
