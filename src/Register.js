// src/Register.js
import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from './firebaseConfig'; // Importa la configuración de autenticación

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Registra al usuario con Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Usuario registrado con éxito');
      // Redirigir a la página de inicio de sesión o a la página principal si lo deseas
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Registrarse</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
