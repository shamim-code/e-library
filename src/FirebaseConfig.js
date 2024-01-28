// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEyjXf2D0NwVDeg3e-gXbHAqno7yWk-SU",
  authDomain: "elibrary-auth-88b89.firebaseapp.com",
  projectId: "elibrary-auth-88b89",
  storageBucket: "elibrary-auth-88b89.appspot.com",
  messagingSenderId: "848629521094",
  appId: "1:848629521094:web:59dae0d5ddbcedb18f95c7",
  measurementId: "G-Q24N1484F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig