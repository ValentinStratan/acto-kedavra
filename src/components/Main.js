import React from 'react';
import { ReactComponent as EmojiSadFrown } from './../assets/svg/emoji_sad_frown.svg';
import './../styles/main.css';

function Main() {
  const addActorHandler = () => {
    console.log('Add actor');
  };

  return (
    <div className="main">
      <div className="not-found-container">
        <EmojiSadFrown className="emoji-svg" />
        <div className="text-container">
          There are no actors here.
          <br />
          Consider adding one.
        </div>
        <button className="add-actor-btn" onClick={addActorHandler}>
          Add new actor
        </button>
      </div>
    </div>
  );
}

export default Main;
