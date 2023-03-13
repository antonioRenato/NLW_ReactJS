// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUlyzSmt5bBAkXvQ5sMpaV6DcHSmU0QZw",
  authDomain: "letmeask-95c2d.firebaseapp.com",
  databaseURL: "https://letmeask-95c2d-default-rtdb.firebaseio.com",
  projectId: "letmeask-95c2d",
  storageBucket: "letmeask-95c2d.appspot.com",
  messagingSenderId: "726755858245",
  appId: "1:726755858245:web:319a16873a17661908902c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Database and get a reference to the service
export const database = getDatabase(app);