import React, { FC } from "react";
import { IMovie } from "../../models/Movie";
import { Link } from "react-router-dom";
import { Routes } from "../../router";

interface MovieItemProps {
  movie: IMovie;
  isFavorite: boolean;
  deleteMovie: (movieId: number) => void;
  addToFavorites: (movieId: number) => void;
  deleteFromFavorites: (movieId: number) => void;
}

const MovieItem: FC<MovieItemProps> = ({
  movie,
  deleteMovie,
  addToFavorites,
  deleteFromFavorites,
  isFavorite,
}) => {
  return (
    <div>
      {/*{JSON.stringify(movie, null, 2)}*/}
      <div className="card">
        {isFavorite ? (
          <button
            onClick={() => deleteFromFavorites(movie.id)}
            className="btn btn-danger"
          >
            Delete from favorites
          </button>
        ) : (
          <button
            onClick={() => addToFavorites(movie.id)}
            className="btn btn-success"
          >
            Add to favorites
          </button>
        )}

        <img
          src={`${process.env.REACT_APP_CDN_URL}/${movie?.posterUrl}`}
          className="card-img-top w-50"
          alt={movie.title}
        />
        <div className="card-body">
          <h2 className="card-title">{movie.title}</h2>

          <p className="card-text">{movie.description}</p>
          <Link
            to={`${Routes.MOVIES}/show/${movie.id}`}
            className="btn btn-primary"
          >
            Show movie
          </Link>
          <button
            className="btn btn-danger ms-2"
            onClick={() => deleteMovie(movie.id)}
          >
            Delete movie
          </button>
          <Link
            to={`${Routes.MOVIES}/edit/${movie.id}`}
            className="btn btn-warning ms-2"
          >
            Edit movie
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;