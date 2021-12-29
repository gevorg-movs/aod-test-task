import { IMovie } from "./Movie";

export interface IActor {
  id: number;
  firstName: string;
  lastName: string;
  movies: IMovie[];
}