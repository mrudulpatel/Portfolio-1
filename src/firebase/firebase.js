import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAdqC6QFkv1YQSDfGRaWZok4JLvIUBoV7k",
  authDomain: "portfolio-61d3e.firebaseapp.com",
  projectId: "portfolio-61d3e",
  storageBucket: "portfolio-61d3e.appspot.com",
  messagingSenderId: "311181498648",
  appId: "1:311181498648:web:0d3e8b134f26ec4aace66d",
  measurementId: "G-10Q9EJ1MMQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const analytics = getAnalytics(app);

export default db;
export { auth };
