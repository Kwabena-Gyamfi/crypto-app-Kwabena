import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../src/models/User.js";
import Crypto from "../src/models/Crypto.js";

dotenv.config();

const initializeDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✓ Connected to MongoDB");

    // Create collections and ensure indexes
    await User.collection.createIndex({ email: 1 }, { unique: true });
    console.log("✓ User collection ready with indexes");

    await Crypto.collection.createIndex({ symbol: 1 }, { unique: true });
    await Crypto.collection.createIndex({ change24h: -1 });
    await Crypto.collection.createIndex({ createdAt: -1 });
    console.log("✓ Crypto collection ready with indexes");

    // Optional: Seed sample crypto data if collection is empty
    const cryptoCount = await Crypto.countDocuments();
    if (cryptoCount === 0) {
      const sampleCryptos = [
        {
          name: "Bitcoin",
          symbol: "BTC",
          price: 45000,
          image: "https://coins.llama.fi/icons/rsps/bitcoin.png",
          change24h: 2.5,
        },
        {
          name: "Ethereum",
          symbol: "ETH",
          price: 2500,
          image: "https://coins.llama.fi/icons/rsps/ethereum.png",
          change24h: 1.8,
        },
        {
          name: "Cardano",
          symbol: "ADA",
          price: 0.98,
          image: "https://coins.llama.fi/icons/rsps/cardano.png",
          change24h: 0.5,
        },
      ];

      await Crypto.insertMany(sampleCryptos);
      console.log("✓ Sample crypto data inserted");
    }

    console.log("\n✅ Database initialization completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Database initialization failed:", error.message);
    process.exit(1);
  }
};

initializeDatabase();
