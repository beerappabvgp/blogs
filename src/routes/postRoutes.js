import express from "express";
import { createPost } from "../controllers/posts.js";
import { userMiddleware } from "../middlewares/userMiddleware.js";

const router = express.Router();


// http://localhost:5000/posts/create
router.post("/create", userMiddleware, createPost);


export default router;