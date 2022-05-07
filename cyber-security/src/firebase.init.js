// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcMVNcIqLZbwQkofHhlAaIaXwX-HTxIoM",
  authDomain: "cyber-security-provider.firebaseapp.com",
  projectId: "cyber-security-provider",
  storageBucket: "cyber-security-provider.appspot.com",
  messagingSenderId: "791007637658",
  appId: "1:791007637658:web:40152ce98e2cd0f5606f23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;