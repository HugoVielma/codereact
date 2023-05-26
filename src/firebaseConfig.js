import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp4vXk7pclVGb_i2WsAmA8aIkl0nz2nL0",
  authDomain: "family-pets-a0b9c.firebaseapp.com",
  projectId: "family-pets-a0b9c",
  storageBucket: "family-pets-a0b9c.appspot.com",
  messagingSenderId: "767391348901",
  appId: "1:767391348901:web:95f2a8d2fb742cddc8754c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
