import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.cjs";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { toast } from 'react-toastify';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    } else {
      setPasswordError("");
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signup successful! Please login.")
      navigate("/login");
    } catch (error) {
      // Firebase returns error.message, but you can customize
      toast.error(error.message || "Signup failed");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      toast.error("Passwords do not match")
      //setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  return (
    <>
      <NavBar />
      <div className="main">
        <div className="login">
          <h1 className="h1">Create your account</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label className="p">
              Email:{" "}
              <input
                type="email"
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
                className="search-input"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br /><br />
            <label className="p">
              Confirm Password:{" "}
              <input
                type="password"
                className="search-input"
                required
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </label>

            {/* Password mismatch error */}
            {passwordError && (
              <p style={{ color: "red", marginTop: "5px", fontSize: "0.9rem" }}>
                {passwordError}
              </p>
            )}

            {/* Firebase error (e.g., email in use, weak password) */}
            {signupError && (
              <p style={{ color: "red", marginTop: "5px", fontSize: "0.9rem" }}>
                {signupError}
              </p>
            )}

            <br /><br />
            <div className="button-container">
              <button type="submit" className="submit-button" disabled={!!passwordError}>
                Signup
              </button>
            </div>
            <div>
              <p className="p">
                Already have an account?{" "}
                <a href="/login" style={{ color: "vilote", textDecoration: "underline" }}>
                  Login
                </a>
              </p>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;