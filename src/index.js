import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBy0GcKMeyKyEKJGheQ7Py6kqc_k33oe04",
  authDomain: "reactjs-tollan-gabriel.firebaseapp.com",
  projectId: "reactjs-tollan-gabriel",
  storageBucket: "reactjs-tollan-gabriel.appspot.com",
  messagingSenderId: "388083794065",
  appId: "1:388083794065:web:948b111e82c5876bfa3f30",
  measurementId: "G-Q41WWQ6EFB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
