

function Search() {
  return (
    <div className="main">
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
    </div>
  );
}

export default Search;