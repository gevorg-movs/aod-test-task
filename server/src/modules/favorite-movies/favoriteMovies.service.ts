import {
  AddFavoriteMoviesDto,
  DeleteFavoriteMoviesDto,
} from "./favoriteMovies.types";
import FavoriteMovie from "./favoriteMovies.model";
import Movie from "../movies/movies.model";
import User from "../users/users.model";

export default class FavoriteMoviesService {
  static async getFavoriteMovies(userId: string) {
    return await Movie.findAll({
      include: {
        model: User,
        where: {
          id: userId
        },
        attributes: []
      }
    });
  }

  static async add(addFavoriteMoviesDto: AddFavoriteMoviesDto) {
    const favoriteMovie = await FavoriteMovie.findOrCreate({
      where: {
        userId: addFavoriteMoviesDto.userId,
        movieId: addFavoriteMoviesDto.movieId,
      },
    });

    return favoriteMovie[0];
  }

  static async delete(deleteFavoriteMoviesDto: DeleteFavoriteMoviesDto) {
    return await FavoriteMovie.destroy({
      where: {
        userId: deleteFavoriteMoviesDto.userId,
        movieId: deleteFavoriteMoviesDto.movieId,
      },
    });
  }
}