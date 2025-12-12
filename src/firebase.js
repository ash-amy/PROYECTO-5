//Iniciar Firebase
import { initializeApp } from "firebase/app";
//base de datos
import { getFirestore } from "firebase/firestore";
//autenticacion
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSsbsv1bXit330Ma3mdQm3kvDYU3sjVak",
  authDomain: "ashley-35072.firebaseapp.com",
  projectId: "ashley-35072",
  storageBucket: "ashley-35072.firebasestorage.app",
  messagingSenderId: "868708826135",
  appId: "1:868708826135:web:83dfdcedbbfbeb68ca3052",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//exportaciones
export default app;
export { db, getAuth };