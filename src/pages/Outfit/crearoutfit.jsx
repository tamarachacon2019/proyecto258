import React, { useState } from "react";
import "./crearoutfit.css"; // tus estilos

// Generador simple de IDs únicos
const genId = (prefix = "conj") =>
  `${prefix}_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

// Mock de opciones para cada slot
const accesorios = [
  { id: "acc-1", src: "/prenda1.png" },
  { id: "acc-2", src: "/prenda1-2.png" },
];
const poleras = [
  { id: "pol-1", src: "/prenda2.png" },
  { id: "pol-2", src: "/prenda2-2.png" },
];
const pantalones = [
  { id: "pant-1", src: "/prenda3.png" },
  { id: "pant-2", src: "/prenda3-2.png" },
];
const zapatillas = [
  { id: "zap-1", src: "/prenda4.png" },
  { id: "zap-2", src: "/prenda4-2.png" },
];

function CrearOutfit({ onGuardarConjunto }) {
  // índices seleccionados en cada slot
  const [sel, setSel] = useState({
    accesorio: 0,
    polera: 0,
    pantalon: 0,
    zapatillas: 0,
  });

  function change(slot, delta, options) {
    setSel((s) => {
      const len = options.length;
      const next = (s[slot] + delta + len) % len;
      return { ...s, [slot]: next };
    });
  }

  function handleGuardar() {
    const prendas = [
      { slot: "accesorio", ...accesorios[sel.accesorio] },
      { slot: "polera", ...poleras[sel.polera] },
      { slot: "pantalon", ...pantalones[sel.pantalon] },
      { slot: "zapatillas", ...zapatillas[sel.zapatillas] },
    ];

    const conjunto = {
      id: genId("conj"),
      prendas,
      createdAt: new Date().toISOString(),
    };

    // Guarda en localStorage
    const saved = JSON.parse(localStorage.getItem("conjuntos") || "[]");
    saved.push(conjunto);
    localStorage.setItem("conjuntos", JSON.stringify(saved));

    // Notifica a App (si se pasó la prop)
    if (typeof onGuardarConjunto === "function") {
      onGuardarConjunto(conjunto);
    }

    alert("Conjunto guardado ✅");
  }

  return (
    <div className="crear-outfit-container">
      {/* Barra superior */}
      <div className="crear-outfit-header">
        <span className="crear-outfit-logo">t/n wardrobe</span>
        <span className="crear-outfit-title">CREA UN OUTFIT</span>
        <span className="crear-outfit-bgchange">cambiar fondo</span>
      </div>

      {/* Área central */}
      <div className="crear-outfit-main">
        {/* Panel izquierdo */}
        <div className="crear-outfit-side crear-outfit-left">
          <button className="crear-outfit-btn crear-outfit-btn-large">
            ALEATORIO
          </button>
        </div>

        {/* Panel central con prendas */}
        <div className="crear-outfit-clothes-panel">
          {/* Accesorio */}
          <div className="crear-outfit-clothing-row">
            <img
              src={accesorios[sel.accesorio].src}
              alt="Accesorio"
              className="prenda-img"
            />
            <div className="arrows">
              <button onClick={() => change("accesorio", -1, accesorios)}>
                {"<<"}
              </button>
              <button onClick={() => change("accesorio", -1, accesorios)}>
                {"<"}
              </button>
              <button onClick={() => change("accesorio", +1, accesorios)}>
                {">"}
              </button>
              <button onClick={() => change("accesorio", +2, accesorios)}>
                {">>"}
              </button>
            </div>
          </div>

          {/* Torso */}
          <div className="crear-outfit-clothing-row">
            <img
              src={poleras[sel.polera].src}
              alt="Torso"
              className="prenda-img"
            />
            <div className="arrows">
              <button onClick={() => change("polera", -1, poleras)}>
                {"<<"}
              </button>
              <button onClick={() => change("polera", -1, poleras)}>
                {"<"}
              </button>
              <button onClick={() => change("polera", +1, poleras)}>
                {">"}
              </button>
              <button onClick={() => change("polera", +2, poleras)}>
                {">>"}
              </button>
            </div>
          </div>

          {/* Pantalón */}
          <div className="crear-outfit-clothing-row">
            <img
              src={pantalones[sel.pantalon].src}
              alt="Pantalón"
              className="prenda-img"
            />
            <div className="arrows">
              <button onClick={() => change("pantalon", -1, pantalones)}>
                {"<<"}
              </button>
              <button onClick={() => change("pantalon", -1, pantalones)}>
                {"<"}
              </button>
              <button onClick={() => change("pantalon", +1, pantalones)}>
                {">"}
              </button>
              <button onClick={() => change("pantalon", +2, pantalones)}>
                {">>"}
              </button>
            </div>
          </div>

          {/* Calzado */}
          <div className="crear-outfit-clothing-row">
            <img
              src={zapatillas[sel.zapatillas].src}
              alt="Calzado"
              className="prenda-img"
            />
            <div className="arrows">
              <button onClick={() => change("zapatillas", -1, zapatillas)}>
                {"<<"}
              </button>
              <button onClick={() => change("zapatillas", -1, zapatillas)}>
                {"<"}
              </button>
              <button onClick={() => change("zapatillas", +1, zapatillas)}>
                {">"}
              </button>
              <button onClick={() => change("zapatillas", +2, zapatillas)}>
                {">>"}
              </button>
            </div>
          </div>
        </div>

        {/* Panel derecho */}
        <div className="crear-outfit-side crear-outfit-right">
          <div className="crear-outfit-bg-music">
            {/* Fondo o música */}
          </div>
          <button className="crear-outfit-btn crear-outfit-btn-large">
            FILTRAR ESTILO
          </button>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="crear-outfit-footer">
        <span>
          JOYERIA&nbsp; FALDAS&nbsp; BOLSOS&nbsp; BUFANDAS&nbsp; CHAQUETAS&nbsp;
          BOTAS&nbsp; VAQUEROS&nbsp; more
        </span>
        <button
          className="crear-outfit-btn crear-outfit-save"
          onClick={handleGuardar}
        >
          GUARDAR
        </button>
      </div>
    </div>
  );
}

export default CrearOutfit;
