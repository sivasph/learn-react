import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import MoviesSection from './MoviesSection';
import Footer from './Footer';
import Search from './Search';
import MoviesDropDown from './MoviesDropDown';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('animation'); // ✅ Default genre
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
    <>
      <NavBar />
      <div className='home'>
        <div>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <MoviesDropDown
            selectedGenre={selectedGenre} // ✅ MUST be passed
            onSelectGenre={setSelectedGenre} // ✅ This updates parent state
          />
        </div>

        <MoviesSection searchTerm={searchTerm}
          movies={movies}
          loading={loading}
          error={error}
          onSearchChange={setSearchTerm} />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;