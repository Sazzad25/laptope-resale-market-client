// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO7_ci5Sq_si1w0kXCMHB-E9qICl5Kvw4",
  authDomain: "laptops-resale-market.firebaseapp.com",
  projectId: "laptops-resale-market",
  storageBucket: "laptops-resale-market.appspot.com",
  messagingSenderId: "65253354773",
  appId: "1:65253354773:web:6d536e1e6e0ad2a679cd1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;