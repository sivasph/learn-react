// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPgDDxERjShOjuFkjyKxr9Gi_UthKjbiU",
  authDomain: "movies-zone-react.firebaseapp.com",
  projectId: "movies-zone-react",
  storageBucket: "movies-zone-react.firebasestorage.app",
  messagingSenderId: "441535294075",
  appId: "1:441535294075:web:b4ebb306279a51ef4550de",
  measurementId: "G-LN218J1K4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
