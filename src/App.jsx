import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage'
import About from './About';
import Contact from './Contact'
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
import LikedMovies from './LikedMovies'
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