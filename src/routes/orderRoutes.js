import express from "express";
import { placeOrder } from "../controllers/orders.js";

const router = express.Router();


router.post("/place-order", placeOrder);

export default router;