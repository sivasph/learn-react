import { useState } from 'react';
import movieThumbnail from './assets/default.jpg';


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
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
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