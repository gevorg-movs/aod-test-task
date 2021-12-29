import React, { useEffect, useState } from "react";
import { IActor } from "../../models/Actor";
import axios from "axios";
import { ADD_MOVIE_URL, GET_ACTORS_URL } from "../../api/routes";
import MovieForm from "../../components/movies/MovieForm";
import { ValidationErrors } from "../../../types";
import { useHistory } from "react-router-dom";
import useAlerts from "../../hooks/useAlerts";

const AddMovie = () => {
  const [actors, setActors] = useState<IActor[]>([]);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const history = useHistory();
  const { showMessage } = useAlerts();

  useEffect(() => {
    axios.get(GET_ACTORS_URL).then(({ data: { actors } }) => {
      setActors(actors);
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
      .post(ADD_MOVIE_URL, formData)
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
      <MovieForm submitForm={submitHandler} actors={actors} errors={errors} />
    </div>
  );
};

export default AddMovie;