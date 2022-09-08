import React from 'react';
import './../styles/actorName.css';
import { ReactComponent as LikeSvg } from './../assets/svg/like.svg';

function ActorName({ name, job, likes }) {
  return (
    <div className="actor-name-container">
      <p id="actor-name">{name}</p>
      <div className="actor-job-container">
        <p id="actor-job">{job}</p>
        <div className="actor-likes-container">
          <p id="actor-likes">{likes}</p>
          <LikeSvg className="like-svg" />
        </div>
      </div>
    </div>
  );
}

export default ActorName;
