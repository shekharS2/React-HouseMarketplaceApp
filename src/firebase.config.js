// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpP_vqj0IfnDN0s3lk-NdqbGaR6_uw8mI",
  authDomain: "house-marketplace-app-9c0f1.firebaseapp.com",
  projectId: "house-marketplace-app-9c0f1",
  storageBucket: "house-marketplace-app-9c0f1.appspot.com",
  messagingSenderId: "901347187461",
  appId: "1:901347187461:web:2e6a5bdce9ad3b9a7df56c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(); 