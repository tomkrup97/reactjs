import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJTrla4WqWXUQxEKOfyA3IVn_1YvoAv3g",
  authDomain: "react-app-bf76c.firebaseapp.com",
  projectId: "react-app-bf76c",
  storageBucket: "react-app-bf76c.appspot.com",
  messagingSenderId: "44384022828",
  appId: "1:44384022828:web:059e3a1eda5962329cfc89",
  measurementId: "G-FS0GHY5CMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
