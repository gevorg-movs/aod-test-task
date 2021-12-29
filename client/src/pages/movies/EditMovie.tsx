import React, { useEffect, useState } from "react";
import { IActor } from "../../models/Actor";
import axios from "axios";
import {
  GET_ACTORS_URL,
  SHOW_MOVIE_URL,
  UPDATE_MOVIE_URL,
} from "../../api/routes";
import { ValidationErrors } from "../../../types";
import { useHistory, useParams } from "react-router-dom";
import { IMovie } from "../../models/Movie";
import MovieForm from "../../components/movies/MovieForm";
import useAlerts from "../../hooks/useAlerts";

interface EditMovieParams {
  movieId: string;
}

const EditMovie = () => {
  const [actors, setActors] = useState<IActor[]>([]);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [movie, setMovie] = useState<IMovie>({} as IMovie);
  const history = useHistory();
  const params = useParams<EditMovieParams>();
  const { showMessage } = useAlerts();

  useEffect(() => {
    axios.get(GET_ACTORS_URL).then(({ data: { actors } }) => {
      setActors(actors);
    });

    axios
      .get(`${SHOW_MOVIE_URL}/${params.movieId}`)
      .then(({ data: { movie } }) => {
        setMovie(movie);
      });
  }, []);

  const submitHandler = async (form: any) => {
    let formData = new FormData();

    for (const prop in form) {
      formData.append(prop, form[prop]);
    }

    formData.delete("actors");
    form.actors.forEach((actor: IActor) => {
      formData.append("actors[]", String(actor.id));
    });

    axios
      .post(UPDATE_MOVIE_URL, formData)
      .then(({ data }) => {
        showMessage(data.message);

        history.push(`/movies/show/${data.movie.id}`);
      })
      .catch(({ response }) => {
        setErrors(response.data.errors);
      });
  };

  return (
    <div>
      <MovieForm
        submitForm={submitHandler}
        movie={movie}
        actors={actors}
        key={movie.id}
        errors={errors}
      />
    </div>
  );
};

export default EditMovie;
