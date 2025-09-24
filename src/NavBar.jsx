import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="header">
      <h1 className="h1">Welcome to Movies Zone</h1>
    <nav>
        <ul>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;