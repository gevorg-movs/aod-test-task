import React, {useEffect, useState} from "react";
import axios from "axios";
import {SHOW_ACTOR_URL} from "../../api/routes";
import {Link, useParams} from "react-router-dom";
import {IActor} from "../../models/Actor";
import {Routes} from "../../router";

const ShowActor = () => {
   const [actor, setActor] = useState<IActor>({} as IActor);
   const params = useParams<any>();

   useEffect(() => {
      axios
         .get(`${SHOW_ACTOR_URL}/${params.actorId}`)
         .then(({data: {actor}}) => {
            setActor(actor);
         });
   }, []);

   return (
      <div>
         <h2>Actor</h2>

         <p>ID: {actor.id}</p>

         <p>
            Full name: {actor.firstName} {actor.lastName}
         </p>

         <h5>Movies: </h5>

         <div className="row">
            {actor.movies?.map((movie) => (
               <div className="col-lg-4">
                     <img
                        src={`${process.env.REACT_APP_CDN_URL}/${movie?.posterUrl}`}
                        className="card-img-top w-50"
                        alt={movie.title}
                     />
                  <h2 className="card-title">{movie.title}</h2>

                  <Link
                     to={`/movies/show/${movie.id}`}
                     className="btn btn-primary"
                  >
                     Show movie
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ShowActor;