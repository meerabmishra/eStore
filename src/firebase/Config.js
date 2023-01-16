// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "eshop-75066.firebaseapp.com",
  projectId: "eshop-75066",
  storageBucket: "eshop-75066.appspot.com",
  messagingSenderId: "664040354399",
  appId: "1:664040354399:web:58d3a68f1ee16b04a721ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app