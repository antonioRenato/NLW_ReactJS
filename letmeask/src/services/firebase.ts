import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.RECAT_APP_API_KEY,
  authDomain: process.env.RECAT_APP_AUTH_DOMAIN,
  databaseURL: process.env.RECAT_APP_DATABASE_URL,
  projectId: process.env.RECAT_APP_PROJECT_ID,
  storageBucket: process.env.RECAT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.RECAT_APP_MESSAGING_SENDER_ID,
  appId: process.env.RECAT_APP_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth()
export const database = getDatabase()