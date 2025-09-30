import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage'
import About from './About';
import Contact from './Contact'
import Login from './Login';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies-page" element={<MoviesPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<h2>404: Page Not Found</h2>} />
      <Route path="/login" element={<Login />} />
    </Routes>

  );
}

export default App