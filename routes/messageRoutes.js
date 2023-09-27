import express from "express";
import { allMessages, sendMessage } from "../controllers/messageControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:chatId", protect, allMessages);
router.post("/", protect, sendMessage);

export default router;
