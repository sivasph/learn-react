import React from "react";
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import movieThumbnail from './assets/default.jpg';
import { Link } from 'react-router-dom';
//import moviesData from './data/movies.json'
import { useState } from "react";

function resolveImage(imageKey) {
  if (imageKey === 'movieThumbnail') return movieThumbnail;
  return imageKey;
}

function MoviesSection({ movies = [], loading, error, searchTerm, onSearchChange }) {
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes((searchTerm || '').toLowerCase())
  );

  return (
    <div className="movies-container">
      <h1 className="h1">
        Movies List
      </h1>

      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && filteredMovies.length > 0 ? (
        filteredMovies.map((movie, index) => (
          <Card
            key={index}
            name={movie.title}
            image={resolveImage(movie.posterURL)}
          />
        ))
      ) : (
        !loading && !error && <p className="p" style={{ color: 'red' }}>No movies found.</p>
      )}
    </div>
  );
}

export default MoviesSection;