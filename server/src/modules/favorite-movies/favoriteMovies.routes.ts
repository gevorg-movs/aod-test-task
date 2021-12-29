import express from "express";
import authMiddleware from "../../middlewares/auth.middleware";
import {addFavoriteMovie, deleteFavoriteMovie, getFavoriteMovies} from "./favoriteMovies.controller";

const router = express.Router();

router.get("/", authMiddleware, getFavoriteMovies);
router.delete("/delete/:movieId", authMiddleware, deleteFavoriteMovie);
router.post("/add", authMiddleware, addFavoriteMovie);

export default router;