import React, { useState, useMemo } from "react";

export default function SearchFilter({
  items = [],
  placeholder = "Buscar...",
}) {
  const [query, setQuery] = useState("");

  // Si no recibes items via props, usa un array por defecto
  const defaultItems = [
    "Estimulación temprana",
    "Inicial",
    "Primaria",
    "Terapias",
    "Talleres",
    "Guardería",
  ];

  const source = items.length ? items : defaultItems;

  // useMemo para evitar recalcular en cada render innecesario
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return source;
    return source.filter((it) => it.toLowerCase().includes(q));
  }, [query, source]);

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 16 }}>
      <input
        aria-label="Buscar"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "10px 12px",
          fontSize: 16,
          borderRadius: 8,
          border: "1px solid #ccc",
          marginBottom: 12,
        }}
      />

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {filtered.length ? (
          filtered.map((item, idx) => (
            <li
              key={idx}
              style={{
                padding: 12,
                marginBottom: 8,
                borderRadius: 8,
                background: "#f4f4f6",
              }}
            >
              {item}
            </li>
          ))
        ) : (
          <li style={{ color: "#666" }}>No se encontraron resultados</li>
        )}
      </ul>
    </div>
  );
}
