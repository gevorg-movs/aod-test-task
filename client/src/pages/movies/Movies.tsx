import React, {useEffect, useState} from "react";
import {IMovie} from "../../models/Movie";
import MovieItem from "../../components/movies/MovieItem";
import axios from "axios";
import {
  ADD_FAVORITE_MOVIE_URL,
  DELETE_FAVORITE_MOVIE_URL,
  DELETE_MOVIE_URL,
  GET_ACTORS_URL,
  GET_FAVORITE_MOVIES_URL,
  GET_MOVIES_URL,
} from "../../api/routes";
import MovieFilter from "../../components/movies/MovieFilter";
import {MovieFilterInterface} from "../../../types/movies";
import {IActor} from "../../models/Actor";
import ReactPaginate from "react-paginate";
import useAlerts from "../../hooks/useAlerts";
import {IFavoriteMovie} from "../../models/FavoriteMovie";

const Movies = () => {
  const {showMessage} = useAlerts();

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);
  const [actors, setActors] = useState<IActor[]>([]);
  const [filter, setFilter] = useState<MovieFilterInterface>({
    sort_by: "",
    sort_type: "",
    title: "",
    rating_from: null,
    rating_to: null,
    year_from: undefined,
    year_to: undefined,
    actors: [] as IActor[],
    offset: 0,
    limit: 3,
  });

  const fetchMovies = () => {
    if (filter.title.length && filter.title.length < 3) {
      return;
    }

    axios
       .get(GET_MOVIES_URL, {
         params: {...filter, actors: filter.actors.map((actor) => actor.id)},
       })
       .then(({data: {movies}}) => {
         setMovies(movies.rows);
         setPageCount(Math.ceil(movies.count / filter.limit));
       });
  };

  useEffect(() => {
    fetchMovies();
  }, [filter]);

  const handlePageClick = (event: any) => {
    setPage(event.selected);
    setFilter({...filter, offset: event.selected * filter.limit});
  };

  useEffect(() => {
    axios.get(GET_ACTORS_URL).then(({data: {actors}}) => {
      setActors(actors);
    });
    getFavoriteMovies()
  }, []);

  const getFavoriteMovies = () => {
    axios.get(GET_FAVORITE_MOVIES_URL).then(({data: {favoriteMovies}}) => {
      setFavoriteMovies(favoriteMovies);
    });
  };

  const deleteMovie = (movieId: number) => {
    axios.delete(`${DELETE_MOVIE_URL}/${movieId}`).then(({data}) => {
      showMessage(data.message);
      fetchMovies();
    });
  };

  const addToFavorites = (movieId: number) => {
    axios.post(ADD_FAVORITE_MOVIE_URL, {movieId}).then(({data}) => {
      showMessage(data.message);
      getFavoriteMovies();
    });
  };

  const deleteFromFavorites = (movieId: number) => {
    axios.delete(`${DELETE_FAVORITE_MOVIE_URL}/${movieId}`).then(({data}) => {
      showMessage(data.message);
      getFavoriteMovies();
    });
  };

  return (
     <div>
       <h2>Movies</h2>

       <MovieFilter actors={actors} filter={filter} setFilter={setFilter}/>

       {movies.length ? (
          <div>
            <div className="row">
              {movies.map((movie) => (
                 <div className="col-lg-4" key={movie.id}>
                   <MovieItem
                      deleteFromFavorites={deleteFromFavorites}
                      deleteMovie={deleteMovie}
                      addToFavorites={addToFavorites}
                      isFavorite={!!favoriteMovies.find(favMovie => favMovie.id == movie.id)}
                      movie={movie}
                   />
                 </div>
              ))}
            </div>
            <div className="d-flex justify-content-center mt-4">
              <ReactPaginate
                 className="pagination"
                 pageLinkClassName="page-link mx-2"
                 previousClassName="page-item"
                 previousLinkClassName="page-link"
                 nextClassName="page-item"
                 nextLinkClassName="page-link"
                 activeClassName="page-item active"
                 activeLinkClassName="active"
                 disabledClassName="disabled"
                 disabledLinkClassName="disabled"
                 breakLabel="..."
                 nextLabel="next >"
                 onPageChange={handlePageClick}
                 pageCount={pageCount}
                 previousLabel="< previous"
              />
            </div>
          </div>
       ) : (
          <h5 className="mt-5">There are no movies yet</h5>
       )}
     </div>
  );
};

export default Movies;