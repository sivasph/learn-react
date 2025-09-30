import { Link } from "react-router-dom";

function NavBar() {
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
          <Link to="/login" className="login-link">Login/Sign-up</Link>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;