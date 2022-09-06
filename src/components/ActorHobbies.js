import React from 'react';
import './../styles/actorHobbies.css';
import { Hobbie } from './index';

function ActorHobbies({ hobbies }) {
  const hobbiesArray = () => {
    return hobbies.map((hobbie) => {
      return <Hobbie hobbieName={hobbie} />;
    });
  };

  return <div className="actor-hobbies-container">{hobbiesArray()}</div>;
}

export default ActorHobbies;
