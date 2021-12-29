import React, { useEffect, useState } from "react";
import { IMovie } from "../../models/Movie";
import axios from "axios";
import { SHOW_MOVIE_URL } from "../../api/routes";
import { useParams } from "react-router-dom";

const ShowMovie = () => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie);
  const params = useParams<any>();

  useEffect(() => {
    axios
      .get(`${SHOW_MOVIE_URL}/${params.movieId}`)
      .then(({ data: { movie } }) => {
        setMovie(movie);
      });
  }, []);

  return (
    <div>
      <h2>Movie: {movie.id}</h2>

      <p>Title: {movie.title}</p>
      <p> Description: {movie.description}</p>
      <p> Rating: {movie.rating}</p>
      <p> Year: {movie.year}</p>

       <h5>Actors: {movie && movie?.actors?.map(actor => actor.firstName).join(', ')}</h5>

       <div className="row">
        <div className="col-lg-4">
          <img
            src={`${process.env.REACT_APP_CDN_URL}/${movie.posterUrl}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ShowMovie;