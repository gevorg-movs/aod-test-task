import React, {useEffect, useState} from "react";
import axios from "axios";
import {GET_ACTORS_URL} from "../../api/routes";
import {IActor} from "../../models/Actor";
import useAlerts from "../../hooks/useAlerts";
import ActorItem from "../../components/actors/ActorItem";

const Actors = () => {
  const {showMessage} = useAlerts();

  const [actors, setActors] = useState<IActor[]>([]);

  useEffect(() => {
    axios.get(GET_ACTORS_URL).then(({data: {actors}}) => {
      setActors(actors);
    });
  }, []);

  return (
     <div>
       <h2>Actors</h2>

       {actors.length ? (
          <div>
            <div className="row">
              {actors.map((actor) => (
                 <div className="col-lg-4" key={actor.id}>
                   <ActorItem actor={actor}/>
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

export default Actors;