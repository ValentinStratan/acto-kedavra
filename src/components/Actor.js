import React from 'react';
import '../styles/actor.css';
import {
  ActorImage,
  ActorName,
  ActorHobbies,
  ActorDescription,
  DeleteActorButton,
  EditActorButton,
} from './index';

/* 
    1. picture X
    2. Name component X
    3. Job component X
    4. Hobbies X
    5. Description
    6. Button
    */

function Actor(props) {
  return (
    <div className="actor-container">
      <DeleteActorButton />
      <ActorImage />
      <ActorName
        name={'Angelina Jolie'}
        job={'Actress & Producer'}
        likes={56}
      />
      <ActorHobbies hobbies={['Music', 'Wrestling', 'Martial Arts']} />
      <ActorDescription
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      />
      <EditActorButton />
    </div>
  );
}

export default Actor;
