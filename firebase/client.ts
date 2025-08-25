import { initializeApp ,  getApp, getApps} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnaasaW881mB2EARKer1Y3gvj5kwHnkHw",
  authDomain: "prepwise-f2d86.firebaseapp.com",
  projectId: "prepwise-f2d86",
  storageBucket: "prepwise-f2d86.firebasestorage.app",
  messagingSenderId: "51128329786",
  appId: "1:51128329786:web:febf9a91adcb1e4049f703",
  measurementId: "G-JE6H5FXKHT",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth();
export const db = getFirestore();
