import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import app from './firebaseConfig'; // Importa la configuración de Firebase
import Register from './Register'; // Importa el componente de Registro
import Login from './Login'; // Importa el componente de Inicio de Sesión

function App() {
  useEffect(() => {
    // Verifica si Firebase está configurado correctamente
    console.log("Firebase está configurado correctamente:", app);
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            ¡Firebase está conectado correctamente! Consulta la consola.
          </p>

          <Routes>
            {/* Rutas para los formularios de Login y Register */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* Puedes agregar más rutas según lo necesites */}
          </Routes>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
