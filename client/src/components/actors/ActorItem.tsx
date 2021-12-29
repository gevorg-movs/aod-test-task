import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IActor } from "../../models/Actor";

interface actorItemProps {
  actor: IActor;
}

const ActorItem: FC<actorItemProps> = ({ actor }) => {
  return (
    <div>
      {/*{JSON.stringify(actor, null, 2)}*/}
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{actor.firstName}</h2>

          <Link to={`/actors/show/${actor.id}`} className="btn btn-primary">
            Show actor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActorItem;