import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCEMpDlsVF6kzgoUeNfkPcx0VgnTa8zZCo",
  authDomain: "twitter-clone-isis.firebaseapp.com",
  projectId: "twitter-clone-isis",
  storageBucket: "twitter-clone-isis.appspot.com",
  messagingSenderId: "229510554616",
  appId: "1:229510554616:web:b85ec571c5deb388e4ec0d",
  measurementId: "G-J2C06NQ045"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;