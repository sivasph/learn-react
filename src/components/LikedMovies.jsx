import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase.cjs";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import NavBar from './NavBar';
import Footer from './Footer';


function LikedMovies() {
  const [likedMovies, setLikedMovies] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchLikedMovies(currentUser.uid);
      } else {
        setUser(null);
        setLikedMovies([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchLikedMovies = async (uid) => {
  try {
    const likesCollection = collection(db, "users", uid, "likes");
    const querySnapshot = await getDocs(likesCollection);

    const liked = querySnapshot.docs
      .filter((doc) => doc.data().liked === true) // filter only liked movies
      .map((doc) => doc.id); // use movieName (doc ID)

    setLikedMovies(liked);
  } catch (err) {
    console.error("Error fetching liked movies:", err);
    toast.error("Failed to load liked movies");
  }
};

  if (!user) {
    return <p>Please log in to view your liked movies.</p>;
  }

  return (
    <>
    <NavBar />
    <div className="main">
      <h1 className="h1">Liked Movies</h1>
      {likedMovies.length === 0 ? (
        <p className="p">You haven't liked any movies yet.</p>
      ) : (
        <ul className="p">
          {likedMovies.map((movieName) => (
            <li key={movieName}>{movieName}</li>
          ))}
        </ul>
      )}
    </div>
    <Footer />
    </>
  );
}

export default LikedMovies;