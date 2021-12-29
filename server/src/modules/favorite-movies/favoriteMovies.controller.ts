import { Request, Response } from "express";
import FavoriteMoviesService from "./favoriteMovies.service";

export const getFavoriteMovies = async (req: Request, res: Response) => {
  try {
    const favoriteMovies = await FavoriteMoviesService.getFavoriteMovies(
      req.body.currentUser.id
    );

    return res.json({
      favoriteMovies,
    });
  } catch (e: any) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

export const addFavoriteMovie = async (req: Request, res: Response) => {
  try {
    console.log(req.body, req.params);

    const favoriteMovie = await FavoriteMoviesService.add({
      userId: req.body.currentUser.id,
      movieId: req.body.movieId,
    });

    return res.json({
      favoriteMovie,
      message: "The movie has been added in your favorite movies list",
    });
  } catch (e: any) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

export const deleteFavoriteMovie = async (req: Request, res: Response) => {
  try {
    await FavoriteMoviesService.delete({
      userId: req.body.currentUser.id,
      movieId: Number(req.params.movieId),
    });

    return res.json({
      message: "The movie has been deleted successfully",
    });
  } catch (e: any) {
    return res.status(500).json({
      message: e.message,
    });
  }
};