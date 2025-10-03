import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.cjs";
import { Link } from "react-router-dom";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); 
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <header className="header">
      <h1 className="h1">Welcome to Movies Zone</h1>
    <nav>
        <ul>
          <Link to="/" className="logo-container">
          <img src="src/assets/logo.png" alt="home" className="logo-img"/>
          </Link>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="login-link">Login</Link>
              <Link to="/signup" className="signup-link">Sign-up</Link>
            </>
          ) : (
            <>
            <Link to="/liked" className="liked-movie-link">My Favourites</Link>
            <Link to="/logout" className="logout-link">Logout</Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;