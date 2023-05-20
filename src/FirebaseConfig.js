// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvo6vZ6ZMh3ypVIdnhRDSfmvUMRhbrkXQ",
  authDomain: "tumaguro-d5f7e.firebaseapp.com",
  projectId: "tumaguro-d5f7e",
  storageBucket: "tumaguro-d5f7e.appspot.com",
  messagingSenderId: "875902404381",
  appId: "1:875902404381:web:89e572a4d3fed46f3203f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);