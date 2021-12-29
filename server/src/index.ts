import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import sequelize from "./db";
import authRoutes from "./modules/auth/auth.routes";
import moviesRoutes from "./modules/movies/movies.routes";
import actorsRoutes from "./modules/actors/actors.routes";
import favoriteMoviesRoutes from "./modules/favorite-movies/favoriteMovies.routes";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/storage", express.static(path.join(__dirname, "/storage")));

app.use("/api/auth", authRoutes);
app.use("/api/movies", moviesRoutes);
app.use("/api/favorite-movies", favoriteMoviesRoutes);
app.use("/api/actors", actorsRoutes);

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Application started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
