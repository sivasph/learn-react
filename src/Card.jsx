import React from 'react';
import movieThumbnail from './assets/default.jpg'; // default image

function Card({ name, image }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img alt="Movie Poster" src={image} className='card-image'
          onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = movieThumbnail; // Fallback to default image
        }}
      />
    </div>
  );
}

export default Card;