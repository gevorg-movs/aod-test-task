import { Request, Response } from "express";
import MoviesService from "./movies.service";
import { GetAllMoviesDto } from "./movies.types";

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await MoviesService.getAll(
      req.query as unknown as GetAllMoviesDto
    );

    return res.json({
      movies,
    });
  } catch (e) {
    console.log(e);
  }
};

export const createMovie = async (req: Request, res: Response) => {
  try {
    const movie = await MoviesService.create({
      ...req.body,
      poster: req.file,
      user_id: req.body.currentUser.id,
    });

    return res.json({
      movie,
      message: "The movie has been added successfully",
    });
  } catch (e: any) {
    return res.status(422).json({
      message: e.message,
    });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const movie = await MoviesService.update({
      ...req.body,
      poster: req.file,
    });

    return res.json({
      movie,
      message: "The movie has been updated successfully",
    });
  } catch (e: any) {
    return res.status(422).json({
      message: e.message,
    });
  }
};

export const showMovie = async (req: Request, res: Response) => {
  try {
    const movie = await MoviesService.show(req.params.movieId);

    return res.json({
      movie,
    });
  } catch (e: any) {
    return res.status(422).json({
      message: e.message,
    });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    await MoviesService.delete(req.params.movieId);

    return res.json({
      message: "The movie has been deleted successfully",
    });
  } catch (e: any) {
    return res.status(422).json({
      message: e.message,
    });
  }
};