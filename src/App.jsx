import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
//Importamos Firebase
import app from './firebase'
//Autentication
import { getAuth, signOut } from 'firebase/auth';


import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Juegos from "./components/Juegos";
import Contacto from "./components/Contacto";
import Testimonios from "./components/Testimonios";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import RutaPrivada from "./components/RutaPrivada";

//Iniciar sesión y registrarse
import Login from "./components/Login";
import RegistrarUsuario from "./components/RegistrarUsuario";

function App() {
  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  const servicios = ["Matrícula", "Juegos", "Cuestionario de Programación"];

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Juegos" element={<Juegos />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Testimonios" element={<><RutaPrivada>
                                                <Testimonios />
                                                </RutaPrivada></>} />
          <Route path="/Formulario" element={<h1>Formulario</h1>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registrar" element={<RegistrarUsuario />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
