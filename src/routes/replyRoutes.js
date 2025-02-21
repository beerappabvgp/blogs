import express from "express";
import { userMiddleware } from "../middlewares/userMiddleware.js";
import { createReply } from "../controllers/reply.js";
const router = express.Router();

// http://localhost:5000/replies/create

router.post("/create", userMiddleware, createReply);

export default router;