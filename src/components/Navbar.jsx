import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase';

import "./base.css"
import "./Navbar.css";

import NavUsuario from "./NavUsuario";
import NavVisitante from "./NavVisitante";

function Navbar() {
  const [usuario, setUsuario] = useState(null)

  useEffect(()=>{
    const auth = getAuth(app);

    //Detectar usuario
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if (user) {
        setUsuario(user)
      } else {
        setUsuario(null)
      }
    });
    return () => unsubscribe();
  },[]);

  if (usuario) {
    return <NavUsuario />
  } else{
    return <NavVisitante />
  }
}

export default Navbar;
