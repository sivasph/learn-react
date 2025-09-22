

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="main">
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    </div>
  );
}

export default Search;