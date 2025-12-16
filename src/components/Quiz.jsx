import { useState } from "react";

function Quiz() {
  const preguntas = [
    {
      texto: "¿Sabes qué es un algoritmo?",
      opciones: [
        { texto: "No sé", valor: 1 },
        { texto: "Más o menos", valor: 2 },
        { texto: "Sí, lo entiendo", valor: 3 },
      ],
    },
    {
      texto: "¿Has usado Scratch o un lenguaje con bloques?",
      opciones: [
        { texto: "Nunca", valor: 1 },
        { texto: "Algunas veces", valor: 2 },
        { texto: "Sí, bastante", valor: 3 },
      ],
    },
    {
      texto: "¿Sabes qué es una variable?",
      opciones: [
        { texto: "No", valor: 1 },
        { texto: "Lo he escuchado", valor: 2 },
        { texto: "Sí, lo sé usar", valor: 3 },
      ],
    },
    {
      texto: "¿Has resuelto problemas con pasos lógicos?",
      opciones: [
        { texto: "Nunca", valor: 1 },
        { texto: "A veces", valor: 2 },
        { texto: "Sí, seguido", valor: 3 },
      ],
    },
    {
      texto: "¿Has creado historias o juegos con bloques?",
      opciones: [
        { texto: "No", valor: 1 },
        { texto: "Pocas veces", valor: 2 },
        { texto: "Muchas veces", valor: 3 },
      ],
    },
    {
      texto: "¿Sabes qué es un bucle o ciclo?",
      opciones: [
        { texto: "No", valor: 1 },
        { texto: "He escuchado de eso", valor: 2 },
        { texto: "Sí, lo sé usar", valor: 3 },
      ],
    },
    {
      texto: "¿Has probado escribir código en algún lenguaje?",
      opciones: [
        { texto: "Nunca", valor: 1 },
        { texto: "Un poco", valor: 2 },
        { texto: "Sí, bastante", valor: 3 },
      ],
    },
  ];

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuesta, setRespuesta] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const [resultado, setResultado] = useState(null);

  const progreso = ((preguntaActual) / preguntas.length) * 100;

  const siguiente = () => {
    setPuntaje(puntaje + respuesta);
    setRespuesta(null);

    if (preguntaActual + 1 < preguntas.length) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      mostrarResultado(puntaje + respuesta);
    }
  };

  const mostrarResultado = (total) => {
    if (total <= 10) {
      setResultado({
        nivel: "Básico",
        feedback: "Tu hijo necesita empezar desde cero con juegos y lógica.",
        costo: "Plan recomendado: Introducción – S/120",
      });
    } else if (total <= 16) {
      setResultado({
        nivel: "Intermedio",
        feedback: "Ya tiene nociones básicas, se recomienda Scratch.",
        costo: "Plan recomendado: Scratch – S/150",
      });
    } else {
      setResultado({
        nivel: "Avanzado",
        feedback: "Buen nivel, puede avanzar a Python.",
        costo: "Plan recomendado: Python – S/200",
      });
    }
  };

  if (resultado) {
    return (
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold">Resultado</h2>
        <p><b>Nivel:</b> {resultado.nivel}</p>
        <p>{resultado.feedback}</p>
        <p className="font-semibold">{resultado.costo}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="font-semibold">
        {preguntas[preguntaActual].texto}
      </h3>

      {/* Barra de progreso */}
        <div className="flex justify-center mt-6 mb-6">
        <div className="w-full h-3 max-w-xl bg-gray-200 rounded-full h-1">
            <div
            className="bg-gradient-to-r from-blue-400 via-yellow-400 to-red-400 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progreso}%` }}
            />
        </div>
        </div>

        <div className="flex flex-col items-center gap-4">
            {preguntas[preguntaActual].opciones.map((op, i) => (
                <label
                key={i}
                className={`w-full max-w-md flex items-center justify-center gap-3
                    border rounded-xl py-3 cursor-pointer
                    transition text-gray-700
                    ${respuesta === op.valor
                    ? "border-gray-400 bg-gray-100"
                    : "border-gray-300 hover:bg-gray-50"}
                `}
                >
                <input
                    type="radio"
                    name="respuesta"
                    checked={respuesta === op.valor}
                    onChange={() => setRespuesta(op.valor)}
                />
                <span>{op.texto}</span>
                </label>
            ))}
        </div>


        <button
            onClick={siguiente}
            disabled={respuesta === null}
            className="w-full max-w-md rounded-full bg-pink-400 text-white py-3 hover:bg-pink-500 disabled:opacity-50"
            >
            Siguiente
        </button>

    </div>
  );
}

export default Quiz;
