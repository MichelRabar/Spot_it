import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };