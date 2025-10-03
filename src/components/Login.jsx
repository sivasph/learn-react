import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.cjs";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(""); // Reset any existing error

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error("Login failed!");
    }
  };

  return (
    <>
      <NavBar />
      <div className="main">
        <div className="login">
          <h1 className="h1">Login to your account</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td className="p"><label htmlFor="email">Email:</label></td>
                  <td>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="search-input"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td className="p"><label htmlFor="password">Password:</label></td>
                  <td>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="search-input"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </td>
                </tr>

                {/* Login error */}
                {loginError && (
                  <tr>
                    <td colSpan="2">
                      <p style={{ color: "red", marginTop: "5px", fontSize: "0.9rem" }}>
                        {loginError}
                      </p>
                    </td>
                  </tr>
                )}

                <tr>
                  <td colSpan="2" style={{ textAlign: "center", paddingTop: "1rem" }}>
                    <button type="submit" className="submit-button">
                      Login
                    </button>
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" style={{ textAlign: "left", paddingTop: "1rem" }}>
                    <p className="p">
                      Don’t have an account?{" "}
                      <a href="/signup" style={{ color: "#87cefa", textDecoration: "underline" }}>
                        Signup
                      </a>
                    </p>
                  </td>
                </tr>

                {/* Optional Forgot Password Link */}
                {/* 
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center" }}>
                      <a href="/" style={{ color: "#87cefa", textDecoration: "underline" }}>
                        Forgot Password?
                      </a>
                    </td>
                  </tr>
                  */}
              </tbody>
            </table>
          </form>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;