import React from 'react';
import './../styles/deleteActorButton.css';
import { ReactComponent as CloseSvg } from './../assets/svg/close.svg';

function DeleteActorButton() {
  return (
    <div className="delete-actor-button-container">
      <CloseSvg className="close-svg" />
    </div>
  );
}

export default DeleteActorButton;
