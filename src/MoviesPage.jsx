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
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch movies when genre changes
  useEffect(() => {
    console.log("🔁 useEffect triggered with genre:", selectedGenre);

    if (selectedGenre) {
      const fetchMovies = async () => {
        console.log("📡 Fetching:", `https://api.sampleapis.com/movies/${selectedGenre}`);
        setLoading(true);
        setError('');
        try {
          const response = await fetch(`https://api.sampleapis.com/movies/${selectedGenre}`);
          const data = await response.json();
          console.log("✅ Fetched movies:", data);
          setMovies(data);
        } catch (err) {
          console.error("❌ Fetch failed:", err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }
  }, [selectedGenre]);

  return (
    <div>
      <MoviesDropDown
        selectedGenre={selectedGenre} // ✅ MUST be passed
        onSelectGenre={setSelectedGenre} // ✅ This updates parent state
      />

      <MoviesSection
        movies={movies}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </div>
  );
}

export default MoviesPage;