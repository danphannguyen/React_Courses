// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyjdm_IrKqA_6wdfsydwQEUL0JUj0xbUc",
    authDomain: "react-course-8d8e4.firebaseapp.com",
    projectId: "react-course-8d8e4",
    storageBucket: "react-course-8d8e4.appspot.com",
    messagingSenderId: "517208696128",
    appId: "1:517208696128:web:f26e273d9b167186c8c6a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);