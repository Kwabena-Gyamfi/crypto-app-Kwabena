import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        symbol: {
            type: String,
            required: [true, "Symbol is required"],
            trim: true,
            uppercase: true,
            unique: true,
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
            min: [0, "Price cannot be negative"],
        },
        image: {
            type: String,
            default: "",
        },
        change24h: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

// Index for faster sort queries
cryptoSchema.index({ change24h: -1 });
cryptoSchema.index({ createdAt: -1 });

const Crypto = mongoose.model("Crypto", cryptoSchema);
export default Crypto;
