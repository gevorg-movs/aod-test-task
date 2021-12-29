import Actor from "../actors/actors.model";

export interface GetAllFavoriteMoviesDto {
  userId: number;
  movieId: number;
}

export interface AddFavoriteMoviesDto {
  userId: number;
  movieId: number;
}


export interface DeleteFavoriteMoviesDto {
  userId: number;
  movieId: number;
}

