import Actor from "../actors/actors.model";

export interface GetAllMoviesDto {
  title: string;
  rating_from: number | null;
  rating_to: number | null;
  sort_by: string | null;
  sort_type: string | null;
  year_from?: Date | null;
  year_to?: Date | null;
  actors: Actor[];
  offset: number;
  limit: number;
}

export interface CreateMovieDto {
  name: string;
  email: string;
  password: string;
  poster: any;
  actors: number[];
}

export interface UpdateMovieDto {
  id: number;
  name: string;
  email: string;
  password: string;
  poster: any;
  year: Date;
  actors: number[];
}

export interface IMovie {
  title: string;
  posterUrl: string;
  rating: number;
  year?: Date;
  description: string;
  actors: Actor[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AllMoviesFilter {
  rating?: {
    [name: symbol]: any;
  };
}