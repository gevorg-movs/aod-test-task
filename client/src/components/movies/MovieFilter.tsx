import React, { FC } from "react";
import { MovieFilterInterface } from "../../../types/movies";
import { IActor } from "../../models/Actor";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface MovieFilterProps {
  filter: MovieFilterInterface;
  setFilter: (newFilter: MovieFilterInterface) => void;
  actors: IActor[];
}

const MovieFilter: FC<MovieFilterProps> = ({ filter, setFilter, actors }) => {
  const changeHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  const handleActorsChange = (selectedOptions: any) => {
    setFilter({
      ...filter,
      actors: [...selectedOptions],
    });
  };

  return (
    <div>
      <input
        className="form-control mb-2"
        value={filter.title}
        onChange={changeHandler}
        placeholder="Title"
        name="title"
      />

      <input
        className="form-control mb-2"
        value={filter.rating_from || ""}
        onChange={changeHandler}
        name="rating_from"
        placeholder="Rating from"
        type="number"
      />

      <input
        className="form-control mb-2"
        value={filter.rating_to || ""}
        onChange={changeHandler}
        name="rating_to"
        placeholder="Rating to"
        type="number"
      />

      <DatePicker
        selected={filter.year_from ? new Date(filter.year_from) : null}
        placeholderText="Year from"
        className="form-control mb-2"
        onChange={(date: Date) => setFilter({ ...filter, year_from: date })}
      />

      <DatePicker
        selected={filter.year_to ? new Date(filter.year_to) : null}
        placeholderText="Year to"
        className="form-control mb-2"
        onChange={(date: Date) => setFilter({ ...filter, year_to: date })}
      />

      <div className="d-flex mb-4">
        <div>
          <label>Sort type</label>
          <select
            className="form-control mb-2"
            name="sort_type"
            onChange={changeHandler}
          >
            <option value="">Select</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>

        <div className="ms-4">
          <label>Sort by</label>
          <select
            className="form-control"
            name="sort_by"
            onChange={changeHandler}
          >
            <option value="">Select</option>
            <option value="title">Title</option>
            <option value="rating">Rating</option>
            <option value="year">Year</option>
          </select>
        </div>
      </div>

      <div className="mb-5">
        <label>Actors</label>
        <Select
          name="actors"
          isMulti
          getOptionLabel={(option) => option.firstName}
          getOptionValue={(option) => option.id.toString()}
          onChange={handleActorsChange}
          options={actors}
        />
      </div>
    </div>
  );
};

export default MovieFilter;