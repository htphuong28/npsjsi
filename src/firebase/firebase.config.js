// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3_iFLQ3_ZCdAffVSp3Kf85EKJvN5wWRE",
  authDomain: "signatie-32c96.firebaseapp.com",
  projectId: "signatie-32c96",
  storageBucket: "signatie-32c96.appspot.com",
  messagingSenderId: "26954294311",
  appId: "1:26954294311:web:e17964f0dfccf84637da02",
  measurementId: "G-PFWKESJX4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)