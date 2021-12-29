import { IActor } from "./Actor";

export interface IMovie {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
  year?: Date;
  description: string;
  actors: IActor[];
  isFavorite: boolean;
}