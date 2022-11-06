// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwH4sMQXZwc6YnCEqoLuD0Hlk71dh46Ew",
  authDomain: "scoapp-8527b.firebaseapp.com",
  databaseURL: "https://scoapp-8527b-default-rtdb.firebaseio.com",
  projectId: "scoapp-8527b",
  storageBucket: "scoapp-8527b.appspot.com",
  messagingSenderId: "964766561619",
  appId: "1:964766561619:web:3237e67c6efd3649d7dda6",
  measurementId: "G-B6EJ2L4YZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app