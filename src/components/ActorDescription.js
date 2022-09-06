import React, { useState } from 'react';
import './../styles/actorDescription.css';
import { ReactComponent as ArrowSvg } from './../assets/svg/arrow.svg';

function ActorDescription({ description }) {
  const [readMore, setReadMore] = useState(false);

  const parsedDescription = () => {
    return readMore ? description : description.substring(0, 50) + ' ...';
  };

  return (
    <div className="actor-description-container">
      <p>{parsedDescription()}</p>
      <div
        className="actor-description-read-more"
        onClick={() => setReadMore(!readMore)}
      >
        <p>Read {readMore ? 'less' : 'more'}</p>

        <ArrowSvg className={`arrow-svg ${readMore ? 'rotated-arrow' : ''}`} />
      </div>
    </div>
  );
}

export default ActorDescription;
