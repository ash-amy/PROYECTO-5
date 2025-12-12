import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchBar from './SearchBar';

import './Navbar.css'

function NavVisitante() {
    return (
    <nav className="navbar degradado text-black p-0">
      {/* IZQUIERDA - LOGO */}
        <div className="text-xl font-bold">
          <img
            className="logo"
            src="./Logo sin fondo.png"
            alt="Logo CodePlay"
          />
        </div>


        {/* CENTRO - MENÚ */}
        <div>
          <ul className="options flex space-x-6 p-t-2">
            <li className="hover:text-gray-300">{" "}<Link to="/">Inicio</Link></li>
            <li className="hover:text-gray-300">{" "}<Link to="/Nosotros">Nosotros</Link></li>
            <li className="hover:text-gray-300">{" "}<Link to="/Juegos">Juegos y Retos</Link></li>
            <li className="hover:text-gray-300">{" "}<Link to="/Contacto">Contáctanos</Link>{" "}</li>
            <li className="hover:text-gray-300">{" "}<Link to="/Testimonios">Testimonios</Link></li>
          </ul>
        </div>

        {/* DERECHA - SEARCH + SESIÓN */}
        <div className='opciones'>
          <SearchBar />

          {/* BOTONES DE SESIÓN */}
            <button className="boton rounded-2 mx-1 hover:text-gray-300">{" "}<Link to="/Login">Log in</Link></button>
            <button className="boton rounded-2 mx-1 hover:text-gray-300">{" "}<Link to="/Registrar">Sign up</Link></button>
        </div>
    </nav>
  );
}

export default NavVisitante;