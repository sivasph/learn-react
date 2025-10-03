import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.cjs";
import { toast } from "react-toastify";

function Logout() {
  const navigate = useNavigate();
  const hasLoggedOut = useRef(false);

  useEffect(() => {
    const doLogout = async () => {
      if (hasLoggedOut.current) return;
      hasLoggedOut.current = true;

      try {
        await signOut(auth);
        toast.success("Logged out successfully!");
        navigate("/");
      } catch (error) {
        toast.error("Logout failed: " + error.message);
      }
    };

    doLogout();
  }, [navigate]);

  return null; // Or <p>Logging out...</p>
}

export default Logout;