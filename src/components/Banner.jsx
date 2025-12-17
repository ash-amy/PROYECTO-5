import { useState } from "react";

function Banner() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative bg-white rounded-2xl shadow-xl p-6 text-center animate-fadeIn">
        {/* Botón cerrar */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-black"
        >
          ×
        </button>
        <img src="./Banner.png" alt="" />
      </div>
    </div>
  );
}

export default Banner;