function Modal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

      {/* Contenido del modal */}
      <div className="bg-white p-6 rounded-xl shadow-xl w-11/12 max-w-200 relative animate-scaleIn">

        {/* Botón cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-xl hover:text-red-500"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">
          ¿Cuánto sabes de programación?
        </h2>

        <form className="flex flex-col gap-4">
            <section class="form">
                <div class="quiz-container">
                    <h1>Diagnóstico de Conocimientos</h1>
                    <p>Responde para conocer el nivel de tu hijo en programación.</p>

                    {/* Barra de progreso */}
                    <div class="progress">
                        <div id="progress-bar"></div>
                    </div>

                    {/* Contenedor de la pregunta */}
                    <div id="quiz"></div>

                    {/* Botón siguiente / ver resultado */}
                    <button id="nextBtn" class="oculto">Siguiente</button>

                    {/* Resultado */}
                    <div id="resultado" class="oculto"></div>
                </div>
            </section>

        </form>
      </div>
    </div>
  );
}

export default Modal;
