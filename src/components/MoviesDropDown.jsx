import React, { useState } from 'react';

function MoviesDropDown({ onSelectGenre, selectedGenre }) {
  const [isOpen, setIsOpen] = useState(false);

  const genres = [
    { name: 'Animation', path: 'animation' }, // ✅ Default selection
    { name: 'Classic', path: 'classic' },
    { name: 'Comedy', path: 'comedy' },
    { name: 'Drama', path: 'drama' },
    { name: 'Horror', path: 'horror' },
    { name: 'Family', path: 'family' },
    { name: 'Mystery', path: 'mystery' },
    { name: 'Sci-Fi & Fantasy', path: 'scifi-fantasy' },
    { name: 'Western', path: 'western' },
  ];

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleGenreSelect = (genrePath) => {
    console.log("Selected genre:", genrePath);
    if (onSelectGenre) {
      onSelectGenre(genrePath);
    }
    setIsOpen(false);
  };

  // Get the name for display
  const selectedGenreName = genres.find(g => g.path === selectedGenre)?.name || 'Select Genre';

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <label className="p" style={{ marginRight: '10px' }}>
          Choose Genre:
        </label>
        <button className="dropbtn" onClick={toggleDropdown}>
          {selectedGenreName} ▼
        </button>
        {isOpen && (
          <div className="dropdown-content">
            {genres.map((genre, index) => (
              <button
                key={index}
                onClick={() => handleGenreSelect(genre.path)}
                style={{
                  display: 'block',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: '8px',
                  textAlign: 'left'
                }}
              >
                {genre.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MoviesDropDown;
