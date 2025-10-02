import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase.cjs"; // use .js or .mjs for ESModules
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from 'react-toastify';
import movieThumbnail from './assets/default.jpg';

function Card({ name, image }) {
  const [user, setUser] = useState(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const likeDocRef = doc(db, "users", currentUser.uid, "likes", name);
        const docSnap = await getDoc(likeDocRef);
        setLiked(docSnap.exists());
      }
    });

    return () => unsubscribe();
  }, [name]);

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
        //toast.info("Movie unliked");
      } else {
        await setDoc(likeDocRef, { liked: true });
        setLiked(true);
        //toast.success("Movie liked!");
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
        text: `Check out ${name}!`,
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <img
        alt="Movie Poster"
        src={image}
        className="card-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = movieThumbnail;
        }}
      />
      <div className="like-buttons" onClick={handleLikeToggle}>
        <button className="like-button">
          {liked ? "💔 Unlike" : "❤️ Like"}
        </button>
      </div>
      <div className="share-buttons" onClick={handleNativeShare}>
        <button className="share-button">🔗 Share</button>
      </div>
    </div>
  );
}

export default Card;