// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbv-99d5WtcwSOjY-i_H6aBrSmiXxJpjc",
    authDomain: "react-aplication-feli.firebaseapp.com",
    projectId: "react-aplication-feli",
    storageBucket: "react-aplication-feli.appspot.com",
    messagingSenderId: "754476039160",
    appId: "1:754476039160:web:035b8533f9869fdcd7f40d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)