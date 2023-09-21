// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPx-gRUtvlaD-QT_5gBOU5T_1d0sNA9Eg",
  authDomain: "smart-restaurant-service-5c93b.firebaseapp.com",
  projectId: "smart-restaurant-service-5c93b",
  storageBucket: "smart-restaurant-service-5c93b.appspot.com",
  messagingSenderId: "686550577782",
  appId: "1:686550577782:web:52ca8be137b991a2806557",
  measurementId: "G-JG0HX6CBTM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
