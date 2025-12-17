import { useState } from "react";

function Matricula() {
  const [form, setForm] = useState({
    tutor: "",
    alumno: "",
    nivel: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reserva enviada:", form);
    alert("✅ Reserva enviada. Nos contactaremos contigo.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto"
    >
      <h3 className="text-xl font-bold text-indigo-600 mb-4 text-center">
        Reserva de Matrícula
      </h3>

      <input
        type="text"
        name="tutor"
        placeholder="Nombre del padre/madre"
        className="w-full mb-3 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="alumno"
        placeholder="Nombre del niño(a)"
        className="w-full mb-3 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={handleChange}
        required
      />

      <select
        name="nivel"
        className="w-full mb-3 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={handleChange}
        required
      >
        <option value="">Nivel educativo</option>
        <option value="estimulación">Estimulación temprana</option>
        <option value="inicial">Inicial</option>
        <option value="primaria">Primaria</option>
      </select>

      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono / WhatsApp"
        className="w-full mb-4 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
      >
        📩 Reservar matrícula
      </button>
    </form>
  );
}

export default Matricula;
