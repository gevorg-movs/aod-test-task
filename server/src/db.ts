import { Sequelize } from "sequelize-typescript";
import User from "./modules/users/users.model";
import Movie from "./modules/movies/movies.model";
import ActorMovie from "./modules/actors/actormovie.model";
import Actor from "./modules/actors/actors.model";
import FavoriteMovie from "./modules/favorite-movies/favoriteMovies.model";

console.log(process.env.DB_USERNAME);
const sequelize = new Sequelize(
  process.env.DB_NAME || "node",
  process.env.DB_USERNAME || "gevorg",
  process.env.DB_PASSWORD || "password",
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    models: [User, Actor, Movie, ActorMovie, FavoriteMovie],
  }
);

export default sequelize;