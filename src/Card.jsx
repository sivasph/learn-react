import React from 'react';

function Card({ name, description, image }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img alt="Movie Poster" src={image} />
      <p>{description}</p>
    </div>
  );
}

export default Card;