import express from "express";
import { registerUser, authUser, allUsers } from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, allUsers);
router.post("/", registerUser);
router.post("/login", authUser);

export default router;
