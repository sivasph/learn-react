import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Login() {
  return (
    <>
      <NavBar />
      <div className="main">
        <div className="login">
          <h1 className="h1">Login to your account</h1>
          <br />
                    <form>
                        <label className="p">
                            Email: {' '}
                            <input type="email" name="email" className="search-input" required />
                        </label>
                        <br />
                        <br />
                        <label className="p">
                            Passwrod: {' '}
                            <input type="password" name="password" className="search-input" required />
                        </label>
                        <br />
                        <br />
                        
                        <div className="button-container">
                            <button type="submit" className="submit-button">Login</button>
                        </div>
                        <div>
                          <p className="p">
                            Don’t have an account? {' '} 
                            <Link className="nav-link">Signup </Link>
                          </p>
                        </div>
                    </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login;