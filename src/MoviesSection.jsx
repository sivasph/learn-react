import React from "react";
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import movieThumbnail from './assets/default.jpg';
import { Link } from 'react-router-dom';
import moviesData from './data/movies.json'

function resolveImage(imageKey) {
  if (imageKey === 'movieThumbnail') return movieThumbnail;
  return imageKey;
}

function MoviesSection() {
  return (
    <div className="movies-container">
      <h1 className="h1">
        <Link className="link" to="/movies-page"> Movies List
        <svg className="icon-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.55001 20.4001C8.34751 20.4001 8.14501 20.3176 7.99501 20.1526C7.71751 19.8451 7.74001 19.3726 8.04751 19.0951L15.2325 12.5551C15.39 12.4126 15.48 12.2101 15.48 12.0001C15.48 11.7901 15.39 11.5876 15.2325 11.4451L8.04751 4.9051C7.74001 4.6276 7.71751 4.1551 7.99501 3.8476C8.27251 3.5401 8.74501 3.5176 9.05251 3.7951L16.2375 10.3351C16.7025 10.7626 16.9725 11.3701 16.9725 12.0001C16.9725 12.6301 16.7025 13.2376 16.2375 13.6651L9.05251 20.2051C8.91001 20.3326 8.73001 20.4001 8.55001 20.4001Z" fill="#1D2FBA"></path></svg>
       </Link>
      </h1>

      {moviesData.map((movie, index) => (
        <Card
          key={index}
          name={movie.name}
          description={movie.description}
          image={resolveImage(movie.image)}
        />
      ))}
    </div>
  );
}

export default MoviesSection;