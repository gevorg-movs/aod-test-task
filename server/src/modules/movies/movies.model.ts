import {
  BelongsToMany,
  Column,
  DataType,
  Length,
  Model,
  Table,
} from "sequelize-typescript";
import Actor from "../actors/actors.model";
import ActorMovie from "../actors/actormovie.model";
import User from "../users/users.model";
import FavoriteMovie from "../favorite-movies/favoriteMovies.model";

@Table({
  tableName: "movies",
})
class Movie extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  posterUrl: string;

  @Length({ min: 0, max: 10 })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rating: number;

  @Column(DataType.DATE)
  year: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => Actor, () => ActorMovie)
  actors: Actor[];

  @BelongsToMany(() => User, () => FavoriteMovie)
  users: User[];
}

export default Movie