import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBTGrzd8qgPoNbvo2oPurQw2bCMMjffzdM",
  authDomain: "tajik-foods-18fad.firebaseapp.com",
  projectId: "tajik-foods-18fad",
  storageBucket: "tajik-foods-18fad.appspot.com",
  messagingSenderId: "161708574248",
  appId: "1:161708574248:web:55736075495bb5c03f171d",
};
initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
