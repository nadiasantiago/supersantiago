// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeXbMKx3tHIJp8g_7-lPZS_LXELSdBvNE",
  authDomain: "supersantiago-cb881.firebaseapp.com",
  projectId: "supersantiago-cb881",
  storageBucket: "supersantiago-cb881.appspot.com",
  messagingSenderId: "745044302315",
  appId: "1:745044302315:web:559f1bc02423ec12f9a1ae",
  measurementId: "G-DPJ3B62PXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)