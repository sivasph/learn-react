import React, { useState } from 'react';
import movieThumbnail from './assets/default.jpg'; // default image

function Card({ name, image }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount((prev) => prev + 1);
  };
  return (
    <div className="card">
      <h3>{name}</h3>
      <img alt="Movie Poster" src={image} className='card-image'
          onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = movieThumbnail; // Fallback to default image
        }}
      />
      <div className="card-buttons" onClick={handleLike}>
        <button className="like-button">❤️ Like {likeCount > 0 && `(${likeCount})`}</button>
        <button className="share-button">🔗 Share</button>
      </div>
    </div>
  );
}

export default Card;