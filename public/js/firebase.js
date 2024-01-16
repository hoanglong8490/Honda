// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZu5nfyCIOgAaXPEnHHHqct538LRgQyHs",
  authDomain: "stellar-utility-406102.firebaseapp.com",
  databaseURL: "https://stellar-utility-406102-default-rtdb.firebaseio.com",
  projectId: "stellar-utility-406102",
  storageBucket: "stellar-utility-406102.appspot.com",
  messagingSenderId: "380999547121",
  appId: "1:380999547121:web:5626e78ed41c2b4b251150",
  measurementId: "G-WWYV9TSCPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);