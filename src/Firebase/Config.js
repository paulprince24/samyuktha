import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0vEOX9M1qPbQvGSCi-rbrS__ZPd2AkZY",
  authDomain: "samyuktha70-42ee8.firebaseapp.com",
  projectId: "samyuktha70-42ee8",
  storageBucket: "samyuktha70-42ee8.appspot.com",
  messagingSenderId: "976047870905",
  appId: "1:976047870905:web:b8bf780cde1e5ea0a09c68",
  measurementId: "G-LKX0LN3KBT",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export default firebase;
export { db, firebase };
