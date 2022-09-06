import React from 'react';
import actorPng from './../assets/actors/actor_1.png';
import './../styles/actorImage.css';

function ActorImage(props) {
  return (
    <div className="actor-image">
      <img src={actorPng} />
    </div>
  );
}

export default ActorImage;
