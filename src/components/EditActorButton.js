import React from 'react';
import './../styles/editActorButton.css';
import { ReactComponent as EditSvg } from './../assets/svg/edit.svg';

function EditActorButton() {
  return (
    <div className="edit-actor-button-container">
      <p>Edit</p>
      <EditSvg />
    </div>
  );
}

export default EditActorButton;
