import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage'


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies-page" element={<MoviesPage />} />
    </Routes>

  );
}

export default App