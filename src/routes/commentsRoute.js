import express from "express";
import { createComment } from "../controllers/comments.js";
import { userMiddleware } from "../middlewares/userMiddleware.js";

const router = express.Router();


// http://localhost:5000/comments/create
router.post("/create", userMiddleware, createComment);

export default router;