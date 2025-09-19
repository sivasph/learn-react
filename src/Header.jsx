import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1 className="h1">Welcome to Movies Zone</h1>
            <nav>
                <ul>
                    <Link to="#" className="link">Home</Link>
                    <Link to="#" className="link">About</Link>
                    <Link to="#" className="link">Services</Link>
                    <Link to="#" className="link">Contact</Link>
                </ul>
                <hr className="mt-4 border-gray-600"/>
            </nav>
        </header>
    );
}

export default Header;