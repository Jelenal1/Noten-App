// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL-B9YrwuK-t_L7gdW-snbC0G886Hgiz0",
    authDomain: "noten-app-m306.firebaseapp.com",
    projectId: "noten-app-m306",
    storageBucket: "noten-app-m306.appspot.com",
    messagingSenderId: "948077747377",
    appId: "1:948077747377:web:4b1c3900a418b2b3d29690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
