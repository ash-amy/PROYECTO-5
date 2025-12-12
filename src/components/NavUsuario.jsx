import { Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

import './Navbar.css'

function NavUsuario() {
    const auth = getAuth();
    const navigate = useNavigate();
    //Función para cerrar sesión
    const cerrarSesion = async() => {
        await signOut(auth);
        navigate("/");
    }

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
            <li className="hover:text-gray-300">{" "}<Link to="/Contacto">Contáctanos</Link></li>
            <li className="hover:text-gray-300">{" "}<Link to="/Testimonios">Testimonios</Link></li>
          </ul>
        </div>

        {/* DERECHA - SEARCH + CERRAR SESIÓN */}

          <div className='opciones'>
            <SearchBar />
        
            <button onClick={cerrarSesion} className="boton rounded-2 mx-1 hover:text-gray-300">cerrar sesión</button>
          </div>
    </nav>
  );
}

export default NavUsuario;