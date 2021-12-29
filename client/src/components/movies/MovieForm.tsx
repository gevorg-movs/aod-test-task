import React, { ChangeEvent, FC, useState } from "react";
import Select from "react-select";
import { IActor } from "../../models/Actor";
import { ValidationErrors } from "../../../types";
import { IMovie } from "../../models/Movie";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface AddMovieFormProps {
  actors: IActor[];
  submitForm: (form: MovieForm) => {};
  errors: ValidationErrors;
  movie?: IMovie;
}

export interface MovieForm {
  title: string;
  description: string;
  poster: File | null;
  rating: number;
  year?: Date;
  actors: any[];
}

const MovieForm: FC<AddMovieFormProps> = ({
  movie,
  actors,
  submitForm,
  errors,
}) => {
  const [form, setForm] = useState<MovieForm>({
    title: "",
    description: "",
    poster: null,
    rating: 0,
    year: new Date(),
    actors: [] as any[],
    ...movie,
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleActorsChange = (selectedOptions: any) => {
    setForm({
      ...form,
      actors: [...selectedOptions],
    });
  };

  const changePoster = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setForm({
        ...form,
        poster: event.target.files[0],
        year: new Date(movie?.year || Date.now()),
      });
    }
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    submitForm(form);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={form.title}
            onChange={changeHandler}
          />

          {errors?.title?.msg && (
            <div className="invalid-feedback d-block">{errors?.title?.msg}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Poster
          </label>
          <input
            type="file"
            name="poster"
            className="form-control"
            onChange={changePoster}
          />

          {errors?.poster?.msg && (
            <div className="invalid-feedback d-block">
              {errors?.poster?.msg}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Rating
          </label>
          <input
            type="text"
            name="rating"
            className="form-control"
            value={form.rating}
            onChange={changeHandler}
          />

          {errors?.rating?.msg && (
            <div className="invalid-feedback d-block">
              {errors?.rating?.msg}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Year
          </label>
          {/*<input*/}
          {/*   type="date"*/}

          {/*   name="year"*/}
          {/*   className="form-control"*/}
          {/*   value={`${new Date(form.year || Date.now())}`}*/}
          {/*   onChange={changeHandler}*/}
          {/*/>*/}

          <DatePicker
            selected={new Date(form.year || Date.now())}
            onChange={(date) => {
              setForm({
                ...form,
                // @ts-ignore
                year: date,
              });
            }}
          />

          {errors?.year?.msg && (
            <div className="invalid-feedback d-block">{errors?.year?.msg}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={form.description}
            onChange={changeHandler}
          />

          {errors?.description?.msg && (
            <div className="invalid-feedback d-block">
              {errors?.description?.msg}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Actors
          </label>
          <Select
            name="actors"
            isMulti
            getOptionLabel={(option) => option.firstName}
            getOptionValue={(option) => option.id.toString()}
            onChange={handleActorsChange}
            defaultValue={movie?.actors}
            options={actors}
          />

          {errors?.actors?.msg && (
            <div className="invalid-feedback d-block">
              {errors?.actors?.msg}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MovieForm;