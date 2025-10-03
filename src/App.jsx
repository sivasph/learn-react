import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage'
import About from './components/About';
import Contact from './components/Contact'
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import LikedMovies from './components/LikedMovies'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
      {/* 👇 Toast container should be at the top level, outside <Routes> */}
      <ToastContainer />

      {/* 👇 Your routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies-page" element={<MoviesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h2>404: Page Not Found</h2>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/liked" element={<LikedMovies />} />
      </Routes>
    </>
  );
}

export default App