import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBPhfsD-WXmPu9FY8_ThIZPlGjhqito1tI",
    authDomain: "friendsmaker-6c99e.firebaseapp.com",
    projectId: "friendsmaker-6c99e",
    storageBucket: "friendsmaker-6c99e.appspot.com",
    messagingSenderId: "724948017271",
    appId: "1:724948017271:web:b360dc1db052162b18a672",
    measurementId: "G-13ZQCXVGLB"    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };