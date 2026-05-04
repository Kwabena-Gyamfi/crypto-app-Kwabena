import { Router } from "express";
import {
    getAllCrypto,
    getGainers,
    getNewListings,
    addCrypto,
} from "../controllers/cryptoController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

// ORDER MATTERS: specific sub-paths before /:id style params
router.get("/gainers", getGainers);
router.get("/new", getNewListings);
router.get("/", getAllCrypto);
router.post("/", protect, addCrypto);

export default router;
