// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS9uZ8rFMZhxwKmiW2zWwk_S6gIook6Es",
  authDomain: "blog-20983.firebaseapp.com",
  projectId: "blog-20983",
  storageBucket: "blog-20983.appspot.com",
  messagingSenderId: "546700816383",
  appId: "1:546700816383:web:c3944179281cb8995a81ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
