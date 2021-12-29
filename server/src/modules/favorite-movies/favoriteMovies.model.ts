import {
  AllowNull,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Movie from "../movies/movies.model";
import User from "../users/users.model";

@Table({
  tableName: "favorite_movie",
})
class FavoriteMovie extends Model {
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  userId: number;

  @ForeignKey(() => Movie)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  movieId: number;
}

export default FavoriteMovie;