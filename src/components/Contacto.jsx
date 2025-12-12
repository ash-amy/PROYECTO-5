import { Link } from "react-router-dom";
import "./Contacto.css";
function Contacto() {
  return (
    <>
      <main className="contactanos">
        <h1>Contáctanos</h1>
        <p>
          Estamos aquí para responder tus preguntas y ayudarte en el proceso de
          inscripción
        </p>
      </main>

      <section className="redes">
        <section className="Form">
          <h3 className="p-3">Envíanos un Mensaje</h3>
          <form className="space-y-4 p-4">
            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor=""
              >
                Nombre Completo
              </label>
              <input
                className="w-full border border-gray-300 rounded px-3 py-2"
                type="text"
                name=""
                id=""
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor=""
              >
                Correo Electrónico
              </label>
              <input
                className="w-full border border-gray-300 rounded px-3 py-2"
                type="email"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor=""
              >
                Teléfono
              </label>
              <input
                className="w-full border border-gray-300 rounded px-3 py-2"
                type="email"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor=""
              >
                Mensaje
              </label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2"
                name=""
                id=""
              ></textarea>
            </div>

            <button className="bg-blue-200 border text-white w-full py-2 rounded">
              Enviar
            </button>
          </form>
        </section>

        <section className="Network">
          <div className="caja" id="Net2">
            <i class="bi bi-telephone"></i>
            <h4>Teléfono</h4>
            <p>
              <li>(01) 456-7890 </li>
              <li>+51 987 654 321 (WhatsApp)</li>
            </p>
          </div>

          <div className="caja" id="Net3">
            <i class="bi bi-envelope"></i>
            <h4>Email</h4>
            <p>contacto@codeplay.edu.pe</p>
          </div>

          <div className="caja" id="Net4">
            <i class="bi bi-clock"></i>
            <h4>Horario de Atención</h4>
            <p>
              <li>Lunes a Viernes: 8:00 a.m. - 6:00 p.m.</li>
              <li>Sábados: 9:00 a.m. - 1:00 p.m.</li>
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Contacto;
