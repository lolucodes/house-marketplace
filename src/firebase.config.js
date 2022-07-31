// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBVXtUvTh9LzGXxATZOEV9pTbJAr9sL31E",
  authDomain: "house-marketplace-app-4e647.firebaseapp.com",
  projectId: "house-marketplace-app-4e647",
  storageBucket: "house-marketplace-app-4e647.appspot.com",
  messagingSenderId: "683330578873",
  appId: "1:683330578873:web:97a99dbeb15574131a6e68"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()