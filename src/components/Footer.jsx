import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="nombre">
          <p>
            <b>"CODEPLAY"</b>
          </p>
        </div>
        <div className="icons">
          <i className="bi bi-instagram"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-whatsapp"></i>
        </div>
        <div className="author">
          <p>
            “Plataforma educativa para niños de 6 a 10 años, donde aprender
            programación y creatividad es un juego.”
          </p>
          <p>© 2025 CodePlay. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
