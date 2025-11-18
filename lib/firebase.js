// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgcVjuTk90j_QRQKbHLgWgoMGJddonBi8",
  authDomain: "math-chatbot-475113.firebaseapp.com",
  projectId: "math-chatbot-475113",
  storageBucket: "math-chatbot-475113.firebasestorage.app",
  messagingSenderId: "728832613829",
  appId: "1:728832613829:web:5ddff2815697274532ffac",
  measurementId: "G-9V2E7NHLMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

