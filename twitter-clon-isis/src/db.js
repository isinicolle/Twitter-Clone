import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEMpDlsVF6kzgoUeNfkPcx0VgnTa8zZCo",
  authDomain: "twitter-clone-isis.firebaseapp.com",
  projectId: "twitter-clone-isis",
  storageBucket: "twitter-clone-isis.appspot.com",
  messagingSenderId: "229510554616",
  appId: "1:229510554616:web:b85ec571c5deb388e4ec0d",
  measurementId: "G-J2C06NQ045"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;