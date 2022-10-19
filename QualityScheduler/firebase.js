// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
//import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'
//import 'firebase/datastore'
//require('firebase/firestore')
//require('firebase/auth')

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import { getFirestore } from "@firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAweH4IMO2SdMb25EYF08JYd0fBK_oUfBo",
//   authDomain: "quality-scheduler-dd348.firebaseapp.com",
//   projectId: "quality-scheduler-dd348",
//   storageBucket: "quality-scheduler-dd348.appspot.com",
//   messagingSenderId: "397032213041",
//   appId: "1:397032213041:web:cb7441464a265f55aca310",
//   measurementId: "G-D5PH3P8C42",
// };

// // Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = app();
// }

// const auth = firebase.auth(app);
// const db = getFirestore(app);
// export { auth, db };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAweH4IMO2SdMb25EYF08JYd0fBK_oUfBo",
  authDomain: "quality-scheduler-dd348.firebaseapp.com",
  projectId: "quality-scheduler-dd348",
  storageBucket: "quality-scheduler-dd348.appspot.com",
  messagingSenderId: "397032213041",
  appId: "1:397032213041:web:cb7441464a265f55aca310",
  measurementId: "G-D5PH3P8C42",
};

const app = initializeApp(firebaseConfig);

console.log(app);

const auth = getAuth(app);

export { auth };
