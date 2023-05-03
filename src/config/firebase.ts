// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATXAH5S-7cfcYVq5IGA3uC5NP2YXwRtUE",
  authDomain: "p-media-ae2d4.firebaseapp.com",
  projectId: "p-media-ae2d4",
  storageBucket: "p-media-ae2d4.appspot.com",
  messagingSenderId: "51686662541",
  appId: "1:51686662541:web:2692d07fc053fdd39b1dc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);