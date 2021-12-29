import {
  CreateMovieDto,
  GetAllMoviesDto,
  UpdateMovieDto,
} from "./movies.types";
import Movie from "./movies.model";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";
import { MulterFile } from "../../types";
import Actor from "../actors/actors.model";
import { Op } from "sequelize";

export default class MoviesService {
  static async getAll(getAllMoviesDto: GetAllMoviesDto) {
    const { moviesFilter, moviesOrder, actorsFilter } =
      this.filterByParams(getAllMoviesDto);

    return await Movie.findAndCountAll({
      distinct: true,
      limit: getAllMoviesDto?.limit,
      offset: getAllMoviesDto?.offset,
      where: moviesFilter,
      include: [
        {
          model: Actor,
          where: actorsFilter,
          attributes: [],
        },
      ],
      order: [moviesOrder],
    });
  }

  static async show(movieId: string) {
    const movie = await Movie.findByPk(movieId, {
      include: [
        {
          model: Actor,
        },
      ],
    });

    if (!movie) {
      throw new Error("Movie with the following id not found");
    }

    return movie;
  }

  static async create(createMovieDto: CreateMovieDto) {
    const movie = new Movie(createMovieDto);

    movie.posterUrl = await this.savePoster(createMovieDto.poster);

    await movie.save();

    await movie.$add("actors", createMovieDto.actors);

    return movie;
  }

  static async update(updateMovieDto: UpdateMovieDto) {
    const movie = await this.show(updateMovieDto.id.toString());

    if (updateMovieDto.poster) {
      movie.posterUrl = await this.savePoster(updateMovieDto.poster);
    }

    if (movie.year) {
      movie.year = new Date(updateMovieDto.year);
    }

    await movie.save();

    await movie.$set("actors", updateMovieDto.actors);

    return movie;
  }

  static async delete(movieId: string) {
    const movie = await this.show(movieId);

    await movie.destroy();
  }

  static async savePoster(poster: MulterFile): Promise<string> {
    const posterUrl = path.join(
      "storage",
      "movies",
      "posters",
      `${nanoid()}.png`
    );
    const posterPath = path.join(__dirname, "../../", posterUrl);

    fs.writeFileSync(posterPath, poster.buffer);

    return posterUrl;
  }

  static filterByParams(getAllMoviesDto: GetAllMoviesDto) {
    let moviesFilter: any = {};
    let moviesOrder: any = ["id", "asc"];
    let actorsFilter: any = {};

    if (getAllMoviesDto.rating_to) {
      moviesFilter = {
        ...moviesFilter,
        rating: { ...moviesFilter.rating, [Op.lte]: getAllMoviesDto.rating_to },
      };
    }

    if (getAllMoviesDto.rating_from) {
      moviesFilter = {
        ...moviesFilter,
        rating: {
          ...moviesFilter.rating,
          [Op.gte]: getAllMoviesDto.rating_from,
        },
      };
    }

    if (getAllMoviesDto?.actors?.length) {
      actorsFilter = { ...actorsFilter, id: getAllMoviesDto.actors };
    }

    if (getAllMoviesDto.sort_by) {
      moviesOrder[0] = getAllMoviesDto.sort_by;
    }

    if (getAllMoviesDto.sort_type) {
      moviesOrder[1] = getAllMoviesDto.sort_type;
    }

    if (getAllMoviesDto.year_from) {
      moviesFilter = {
        ...moviesFilter,
        year: {
          ...moviesFilter.year,
          [Op.gte]: getAllMoviesDto.year_from,
        },
      };
    }

    if (getAllMoviesDto.year_to) {
      moviesFilter = {
        ...moviesFilter,
        year: {
          ...moviesFilter.year,
          [Op.lte]: getAllMoviesDto.year_to,
        },
      };
    }

    return {
      moviesFilter,
      moviesOrder,
      actorsFilter,
    };
  }
}