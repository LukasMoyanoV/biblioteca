// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // Importa las funciones de autenticación

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD5hgOBIovjyDT2hco5xRqBnjc9EsMuqX0",
  authDomain: "sistema-de-biblioteca-d4d94.firebaseapp.com",
  projectId: "sistema-de-biblioteca-d4d94",
  storageBucket: "sistema-de-biblioteca-d4d94.firebasestorage.app",
  messagingSenderId: "595520176785",
  appId: "1:595520176785:web:51d6e2f8ad0b2d01ec7530",
  measurementId: "G-DZ9PN76GYZ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Configura la autenticación
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
