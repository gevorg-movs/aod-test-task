import React, {useEffect, useState} from "react";
import {IMovie} from "../../models/Movie";
import axios from "axios";
import {GET_FAVORITE_MOVIES_URL} from "../../api/routes";

const FavoriteMovies = () => {
   const [movies, setMovies] = useState<IMovie[]>([]);

   useEffect(() => {
      axios.get(GET_FAVORITE_MOVIES_URL).then(({data: {favoriteMovies}}) => {
         setMovies(favoriteMovies);
      });
   }, []);

   return (
      <div>
         <h2>Movies</h2>

         {movies.length ? (
            <div>
               <div className="row">
                  {movies.map((movie) => (
                     <div className="col-lg-4" key={movie.id}>
                        <div className="border">
                           <img
                              src={`${process.env.REACT_APP_CDN_URL}/${movie?.posterUrl}`}
                              className="card-img-top w-50"
                              alt={movie.title}
                           />
                           <div className="card-body">
                              <h2 className="card-title">{movie.title}</h2>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         ) : (
            <h5 className="mt-5">There are no movies yet</h5>
         )}
      </div>
   );
};

export default FavoriteMovies;