import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCC1usdE8xavXawbZSyE9LaXvomX86MB7M",
  authDomain: "ecommerce-laura-lopez.firebaseapp.com",
  projectId: "ecommerce-laura-lopez",
  storageBucket: "ecommerce-laura-lopez.appspot.com",
  messagingSenderId: "990989435222",
  appId: "1:990989435222:web:01d6fbe6b12a005ea4d6f7",
  measurementId: "G-TQXZ2S5JY1"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
