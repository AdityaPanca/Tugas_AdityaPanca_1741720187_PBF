import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyBbnFWapuaLOG03qxstOSG56WJOc831RXQ",
    authDomain: "react-853ac.firebaseapp.com",
    databaseURL: "https://react-853ac.firebaseio.com",
    projectId: "react-853ac",
    storageBucket: "react-853ac.appspot.com",
    messagingSenderId: "254525469952",
    appId: "1:254525469952:web:0d3e1a110f3d0ceec4afe5",
    measurementId: "G-SR647HS3GP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export const database = firebase.database();

  export default firebase;