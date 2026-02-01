import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTnibJka_frD-BulNdRglpjjJEMfVZ130",
  authDomain: "back-end-module-project.firebaseapp.com",
  projectId: "back-end-module-project",
  storageBucket: "back-end-module-project.firebasestorage.app",
  messagingSenderId: "460186365110",
  appId: "1:460186365110:web:8385835fc8a2323c524a17",
  measurementId: "G-1H1ZXRSRTK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
