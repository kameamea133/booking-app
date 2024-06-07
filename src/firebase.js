// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_ppyuxYCUsyV0aMFnlLlrXHBpXtVleEs",
  authDomain: "booking-app-328a6.firebaseapp.com",
  projectId: "booking-app-328a6",
  storageBucket: "booking-app-328a6.appspot.com",
  messagingSenderId: "1021183858446",
  appId: "1:1021183858446:web:6a5c072b7795ad57d6e95f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)