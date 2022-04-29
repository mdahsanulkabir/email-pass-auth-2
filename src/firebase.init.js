// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFuLwJYswH0eE3kmyQ-H5e6WIwG4knt5g",
  authDomain: "email-password-auth-2-c8d5b.firebaseapp.com",
  projectId: "email-password-auth-2-c8d5b",
  storageBucket: "email-password-auth-2-c8d5b.appspot.com",
  messagingSenderId: "459606784815",
  appId: "1:459606784815:web:f34923edab6ef8f8c37fda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;