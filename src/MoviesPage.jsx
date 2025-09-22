import React, { useState } from 'react';
import Card from './Card';
import movieThumbnail from './assets/default.jpg';

import moviesData from './data/movies.json'
import Footer from "./Footer";
import Search from "./Search";
import NavBar from "./NavBar";

function resolveImage(imageKey) {
  if (imageKey === 'movieThumbnail') return movieThumbnail;
  return imageKey;
}

function MoviesPage() {
  // Correct useState: get both value and setter
  const [searchTerm, setSearchTerm] = useState('');

  // Filter movies based on searchTerm
  const filteredMovies = moviesData.filter(movie =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="movies-container">
        <h1 className="h1">Movies List</h1>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <Card
              key={index}
              name={movie.name}
              description={movie.description}
              image={resolveImage(movie.image)}
            />
          ))
        ) : (
          <p className="p" style={{ color: 'red' }}>No movies found.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default MoviesPage;