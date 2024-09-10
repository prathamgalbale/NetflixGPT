// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBddM_Vov01b0DNZXEly8LM1K5sE10PzLU",
  authDomain: "netflixgpt-1cc51.firebaseapp.com",
  projectId: "netflixgpt-1cc51",
  storageBucket: "netflixgpt-1cc51.appspot.com",
  messagingSenderId: "205297396923",
  appId: "1:205297396923:web:3e5fc57066faa74d568d9e",
  measurementId: "G-KXDGD0DE11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();