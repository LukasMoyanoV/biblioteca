// src/Login.js
import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from './firebaseConfig'; // Importa la configuración de autenticación

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Inicia sesión con Firebase
      await signInWithEmailAndPassword(auth, email, password);
      alert('Inicio de sesión exitoso');
      // Redirigir a la página principal o a la página de usuario autenticado
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
