// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBqtgpy3QP56y2SBySHqrbxk2Y9-UaZhA",
  authDomain: "greenhouse-future.firebaseapp.com",
  projectId: "greenhouse-future",
  storageBucket: "greenhouse-future.firebasestorage.app",
  messagingSenderId: "6895847817",
  appId: "1:6895847817:web:1057040f9086768a817958",
  measurementId: "G-KRQ3SS1CX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);