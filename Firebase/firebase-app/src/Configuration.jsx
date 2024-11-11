// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg1NhjayTnYSR1sL4Btrc3jA0nuJRLbaQ",
  authDomain: "react-test-a46ab.firebaseapp.com",
  projectId: "react-test-a46ab",
  storageBucket: "react-test-a46ab.firebasestorage.app",
  messagingSenderId: "256070382475",
  appId: "1:256070382475:web:b89a6a94733ab22889b58e",
  databaseURL: "https://react-test-a46ab-default-rtdb.asia-southeast1.firebasedatabase.app/"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;