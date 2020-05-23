import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCychE8DZzaWCHw67gBI6FaIwW9jLn_e8M",
  authDomain: "fir-engram.firebaseapp.com",
  databaseURL: "https://fir-engram.firebaseio.com",
  projectId: "fir-engram",
  storageBucket: "fir-engram.appspot.com",
  messagingSenderId: "6176351640",
  appId: "1:6176351640:web:e5565511ba1639910bf7ed",
  measurementId: "G-FF10DWYEC6",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
