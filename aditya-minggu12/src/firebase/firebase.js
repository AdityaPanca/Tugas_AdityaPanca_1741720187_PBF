import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBL0Y131kjJbl2G5dJw8kpzOiXrJ4-uXs",
  authDomain: "loginfirebase-30c0e.firebaseapp.com",
  databaseURL: "https://loginfirebase-30c0e.firebaseio.com",
  projectId: "loginfirebase-30c0e",
  storageBucket: "loginfirebase-30c0e.appspot.com",
  messagingSenderId: "852558227605",
  appId: "1:852558227605:web:af362a5e44c227e546d39c",
  measurementId: "G-MSTQ1PYMXY"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;