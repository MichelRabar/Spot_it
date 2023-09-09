import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA5y78eVnr-XEj7knEPvQJqKaqFO6lDNrc",
    authDomain: "pispotit.firebaseapp.com",
    projectId: "pispotit",
    storageBucket: "pispotit.appspot.com",
    messagingSenderId: "180395679377",
    appId: "1:180395679377:web:e045a70b4c40d80589a930",
    measurementId: "G-M0865V8LZT"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export {
    firebase,
    db,
};