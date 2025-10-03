import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.cjs";
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
      //toast.error("Passwords do not match")
      setPasswordError("Passwords do not match");
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
            <table>
              <tbody>
                <tr>
                  <td className="p"><label htmlFor="email">Email:</label></td>
                  <td>
                    <input
                      type="email"
                      id="email"
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
                      className="search-input"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td className="p"><label htmlFor="confirmPassword">Confirm Password:</label></td>
                  <td>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="search-input"
                      required
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                  </td>
                </tr>

                {/* Validation errors */}
                {passwordError && (
                  <tr>
                    <td colSpan="2">
                      <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>
                        {passwordError}
                      </p>
                    </td>
                  </tr>
                )}
                {signupError && (
                  <tr>
                    <td colSpan="2">
                      <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>
                        {signupError}
                      </p>
                    </td>
                  </tr>
                )}

                <tr>
                  <td colSpan="2" style={{ textAlign: "center", paddingTop: "1rem" }}>
                    <button type="submit" className="submit-button" disabled={!!passwordError}>
                      Signup
                    </button>
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" style={{ textAlign: "left", paddingTop: "1rem" }}>
                    <p className="p">
                      Already have an account?{" "}
                      <a href="/login" style={{ color: "#87cefa", textDecoration: "underline" }}>
                        Login
                      </a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;