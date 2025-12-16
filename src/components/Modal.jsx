import Quiz from "./Quiz";

function Modal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Contenido del modal */}
      <div className="bg-white p-6 rounded-xl shadow-xl w-2/3 relative">
      
        <form className="flex flex-col gap-4">
          <section class="form">
            <div class="quiz-container">
              <h1>Diagnóstico de Conocimientos</h1>
                <p className="font-sans">Responde para conocer tu nivel en programación.</p>
                  <Quiz />
            </div>
          </section>
        </form>

        {/* Botón cerrar */}
        <button onClick={onClose}
          className="absolute top-4 right-4 bg-pink-400 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-500">
          ✕
        </button>

      </div>
    </div>
  );
}

export default Modal;
