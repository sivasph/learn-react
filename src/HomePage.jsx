import React, { useState } from 'react';
import NavBar from './NavBar';
import MoviesSection from './MoviesSection';
import Footer from './Footer';
import Search from './Search';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <NavBar />
      <div>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <MoviesSection searchTerm={searchTerm} />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;