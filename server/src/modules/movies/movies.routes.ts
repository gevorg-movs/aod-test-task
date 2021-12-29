import express from "express";
import authMiddleware from "../../middlewares/auth.middleware";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  showMovie,
  updateMovie,
} from "./movies.controller";
import { createMovieValidations } from "./movies.validations";

const router = express.Router();

router.get("/", authMiddleware, getAllMovies);
router.get("/show/:movieId", authMiddleware, showMovie);
router.delete("/delete/:movieId", authMiddleware, deleteMovie);
router.post("/create", ...createMovieValidations, authMiddleware, createMovie);
router.post("/update", ...createMovieValidations, authMiddleware, updateMovie);

export default router;