import React from 'react';
import './../styles/addActor.css';
import { ReactComponent as CloseSvg } from './../assets/svg/close.svg';

function AddActor() {
  return (
    <div className="add-actor-container">
      <form>
        {/* <div className="close-button">
          <CloseSvg className="close-svg" />
        </div> */}
        <div className="modal-title">Add new actor</div>

        <div className="input-container">
          <div className="input-box">
            <label for="name-input">Name</label>
            <input type="text" id="name-input" />
          </div>
        </div>

        <div className="input-container">
          <div className="input-box">
            <label for="occupation-input">Occupation besides acting</label>
            <input type="text" id="occupation-input" />
          </div>
        </div>

        <div className="input-container">
          <label for="hobbies-input">Hobbies</label>
          <input type="text" id="hobbies-input" />
        </div>

        <div className="input-container description">
          <label for="description-input">Short description</label>
          <textarea id="description-input" />
        </div>

        <div className="controls-container">
          <button className="add-button">Add new actor</button>
          <button className="exit-button">I changed my mind</button>
        </div>
      </form>
    </div>
  );
}

export default AddActor;
