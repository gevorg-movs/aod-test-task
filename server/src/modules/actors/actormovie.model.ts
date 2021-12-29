import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Movie from "../movies/movies.model";
import Actor from "./actors.model";

@Table({
  tableName: "actor_movie",
})
class ActorMovie extends Model {
  @ForeignKey(() => Actor)
  @Column(DataType.BIGINT)
  actorId: number;

  @ForeignKey(() => Movie)
  @Column(DataType.BIGINT)
  movieId: number;
}

export default ActorMovie;