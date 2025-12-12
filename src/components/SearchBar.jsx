// SearchBar.jsx
import { useEffect, useRef, useState } from "react";

function SearchBar() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Enfocar input al abrir
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative flex items-center">
      {/* Lupa */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
          />
        </svg>
      </button>

      {/* Input desplegable */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar..."
        onKeyDown={(e) => {
          if (e.key === "Enter") setOpen(false);
        }}
        className={`absolute right-0 top-0 h-10 rounded-full border border-gray-300 bg-white pl-4 pr-10 text-gray-700 shadow-md outline-none transition-all duration-500 ease-in-out
          ${open ? "w-56 opacity-100 pointer-events-auto" : "w-0 opacity-0 pointer-events-none"}`}
      />
    </div>
  );
}

export default SearchBar;
