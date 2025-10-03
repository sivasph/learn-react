import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter data based on searchTerm
  const filteredData = data.filter(name =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '300px' }}>
      <input
        type="text"
        placeholder="Search names..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '8px' }}
      />

      <ul>
        {filteredData.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
        {filteredData.length === 0 && <li>No results found</li>}
      </ul>
    </div>
  );
};

export default SearchComponent;