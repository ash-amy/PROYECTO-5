import { Link } from "react-router-dom";
import "./Nosotros.css";
function Nosotros() {
  return (
    <>
      <main className="Presentación">
        <h1>SOBRE NOSOTROS</h1>
        <div className="descripción">
          <p>
            Somos un grupo de estudiantes apasionadas por la programación de
            software y el desarrollo web. Creemos que la tecnología no solo
            transforma el mundo, sino que también despierta la creatividad y el
            potencial de quienes la descubren desde pequeños. Por eso, nuestro
            propósito es inspirar a niños, niñas y familias a explorar juntos
            este universo digital, motivándolos a soñar, aprender y construir un
            futuro lleno de oportunidades.
          </p>
          <p>
            En coherencia con nuestro objetivo, CODEPLAY está conformado por
            jóvenes estudiantes apasionadas por la tecnología y la educación,
            unidas por el deseo de inspirar a las nuevas generaciones.
          </p>
        </div>
      </main>

      <div className="Contenedor">
        <div className="Tarjetas" id="tarjeta1">
          <h4>Ashley Perales</h4>
          <img src="/Avatar.png" alt="Foto de integrante" />
          <p>
            Apasionada por la tecnología y la innovación educativa. Le encanta
            trabajar en equipo y liderar proyectos que inspiren a otros.
          </p>
        </div>

        <div className="Tarjetas" id="tarjeta2">
          <h4>Hannah ______</h4>
          <img src="/Avatar.png" alt="Foto de integrante" />
          <p>
            Le apasiona crear interfaces atractivas y funcionales que conecten
            con las personas y hagan que aprender sea divertido.
          </p>
        </div>

        <div className="Tarjetas" id="tarjeta3">
          <h4>Melany ______</h4>
          <img src="/Avatar.png" alt="Foto de integrante" />
          <p>
            Disfruta resolviendo problemas y creando soluciones tecnológicas que
            faciliten el aprendizaje y la comunicación.
          </p>
        </div>
      </div>

      <div className="mas-info">
        <h2>Conoce un poco más sobre nuestros objetivos como empresa</h2>
      </div>

      <section className="Misión-Visión-Valores">
        <img src="/logo.png" alt="Logo de ColdPlay" />

        <div>
          <div className="contenedor" id="Misión">
            <h3>📌Mision</h3>
            <p className="fw-semibold">
              Brindar a los niños un espacio seguro, divertido y creativo donde
              puedan aprender programacion a travez de juegos interactivos,
              desarrollando habilidades tecnologicas, logicas y de resolucion de
              problemas mientras se divierten
            </p>
          </div>

          <div className="contenedor" id="Visión">
            <h3>👀Vision</h3>
            <p className="fw-semibold">
              Ser la plataforma educativa lider en el mundo hispanohablante que
              inspire a niños y niñas a divertirse en creadores digitales,
              fomentando su curiosidad, pensamiento critico y amor por la
              tecnologia desde temprana edad
            </p>
          </div>

          <div className="contenedor" id="Valores">
            <h3>✨Valores</h3>
            <ul className="fw-semibold">
              <li>Divertirse</li>
              <li>Inclusion</li>
              <li>Creatividad</li>
              <li>Seguridad</li>
              <li>Colaboracion</li>
              <li>Curiosidad tecnologica</li>
              <li>Aprendizaje progresivo</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nosotros;
