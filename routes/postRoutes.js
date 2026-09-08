import express from "express";
import { getPosts, createPost, deletePost } from "../controllers/postController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getPosts);

router.post("/", upload.single("image"), createPost);

router.delete("/:id", deletePost);

export default router;