import React from "react";
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import movieThumbnail from './assets/default.jpg'; 

import moviesData from './data/movies.json'
import Footer from "./Footer";

function resolveImage(imageKey) {
  if (imageKey === 'movieThumbnail') return movieThumbnail;
  return imageKey;
}

function MoviesPage() {
  return (
    <>
    <div className="movies-container">
      <h1 className="h1">Movies List</h1>
      { moviesData.map((movie, index) => (
        <Card
          key={index}
          name={movie.name}
          description={movie.description}
          image={resolveImage(movie.image)}
        />
      ))}
    </div>
    <Footer />
    </>
  );
}

export default MoviesPage;