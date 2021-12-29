import express from "express";
import authMiddleware from "../../middlewares/auth.middleware";
import { getAllActors, showActor } from "./actors.controller";

const router = express.Router();

router.get("/", authMiddleware, getAllActors);
router.get("/show/:actorId", authMiddleware, showActor);

export default router;