import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9VVsa20wmNvZm9URNasmez2j-c-rUGvg",
  authDomain: "react-e231e.firebaseapp.com",
  projectId: "react-e231e",
  storageBucket: "react-e231e.appspot.com",
  messagingSenderId: "720187875501",
  appId: "1:720187875501:web:8b7d7e9d309b168085e624",
  measurementId: "G-5FK9WPHFCK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);
