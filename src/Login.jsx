import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.cjs";
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
            <label className="p">
              Email:{" "}
              <input
                type="email"
                name="email"
                className="search-input"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br /><br />
            <label className="p">
              Password:{" "}
              <input
                type="password"
                name="password"
                className="search-input"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br /><br />

            {/* Firebase Login Error */}
            {loginError && (
              <p style={{ color: "red", marginTop: "5px", fontSize: "0.9rem" }}>
                {loginError}
              </p>
            )}

            <div className="button-container">
              <button type="submit" className="submit-button">
                Login
              </button>
            </div>

            <div>
              <p className="p">
                Don’t have an account?{" "}
                <a href="/signup" style={{ color: "vilote", textDecoration: "underline" }}>
                  Signup
                </a>
              </p>
            </div>
            <div>
               <a href="/" style={{ color: "vilote", textDecoration: "underline" }}>
                  Forgot Password?
                </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;