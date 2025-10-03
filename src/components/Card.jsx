import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase.cjs";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from 'react-toastify';
import movieThumbnail from '../assets/default.jpg';

function Card({ name, image }) {
  const [user, setUser] = useState(null);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        checkIfLiked(currentUser.uid);
      } else {
        setLiked(false);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [name]);

  const checkIfLiked = async (uid) => {
    setLoading(true);
    try {
      const likeDocRef = doc(db, "users", uid, "likes", name);
      const docSnap = await getDoc(likeDocRef);
      setLiked(docSnap.exists());
    } catch (err) {
      console.error("Error checking like:", err);
      toast.error("Error loading like status");
    } finally {
      setLoading(false);
    }
  };

  const handleLikeToggle = async () => {
    if (!user) {
      toast.error("You must be logged in to like/unlike!");
      return;
    }

    const likeDocRef = doc(db, "users", user.uid, "likes", name);

    try {
      if (liked) {
        await deleteDoc(likeDocRef);
        setLiked(false);
      } else {
        await setDoc(likeDocRef, { liked: true });
        setLiked(true);
      }
    } catch (err) {
      console.error("Error updating like status:", err);
      toast.error("Failed to update like");
    }
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Movies Zone',
        text: `Watch my favorite movie! : ${name}`,
        url: window.location.href,
      });
    } else {
      toast.error("Sharing not supported in this browser.");
    }
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <img
        alt="Movie Poster"
        src={image}
        className='card-image'
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = movieThumbnail;
        }}
      />
      <div className="like-buttons" onClick={handleLikeToggle}>
        <button className="like-button" disabled={loading}>
          {loading
            ? "Loading..."
            : liked
            ? "💔 Unlike"
            : "❤️ Like"}
        </button>
      </div>
      <div className="share-buttons" onClick={handleNativeShare}>
        <button className="share-button">🔗 Share</button>
      </div>
    </div>
  );
}

export default Card;