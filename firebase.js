// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKa8fj89kBo9o2DIlQ2Bst8q9LihXGqXU",
  authDomain: "fir-auth-ba861.firebaseapp.com",
  projectId: "fir-auth-ba861",
  storageBucket: "fir-auth-ba861.appspot.com",
  messagingSenderId: "927574109561",
  appId: "1:927574109561:web:311a3e25209a83005e93a8",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app;
}

const auth = firebase.auth();
const db = app.database

export { auth ,db };
