// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyn4NZ8Rtgx9yUKukYSpm8yyE-_SJ4YdE",
  authDomain: "fir-practice2r.firebaseapp.com",
  projectId: "fir-practice2r",
  storageBucket: "fir-practice2r.appspot.com",
  messagingSenderId: "848694937191",
  appId: "1:848694937191:web:3472c47a30b100622836c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()