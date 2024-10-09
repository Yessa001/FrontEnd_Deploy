import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCf7N452ELRSCfckTCyBghi2FmrgpQwxtk",
    authDomain: "project-front-end-707af.firebaseapp.com",
    projectId: "project-front-end-707af",
    storageBucket: "project-front-end-707af.appspot.com",
    messagingSenderId: "14453394621",
    appId: "1:14453394621:web:7749dc3a30f23138d5bbd4",
    measurementId: "G-FESQ7NGGY3"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const auth: Auth = getAuth(app);

export { db, auth };