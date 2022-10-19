import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

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
const db = getFirestore();

export { auth, db };
