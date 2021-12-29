import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import Movie from "../movies/movies.model";
import ActorMovie from "./actormovie.model";

@Table({
  tableName: "actors",
})
class Actor extends Model {
  @Column(DataType.STRING)
  firstName: string;

  @Column(DataType.STRING)
  lastName: string;

  @BelongsToMany(() => Movie, () => ActorMovie)
  movies: Movie[];
}

export default Actor;