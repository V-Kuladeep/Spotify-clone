import firebase from "firebase"
//Authentication
import "firebase/auth";
//firestore database
import "firebase/firestore";
//realtime database
import "firebase/database"
//storage
import "firebase/storage"
//function
import "firebase/functions"
//hosting
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIriSg_kV-6onufc0zLSC6xbebKF0xM8E",
  authDomain: "spotify-clone-4292b.firebaseapp.com",
  projectId: "spotify-clone-4292b",
  storageBucket: "spotify-clone-4292b.appspot.com",
  messagingSenderId: "921042572126",
  appId: "1:921042572126:web:32334920ca3686b60475cf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase
