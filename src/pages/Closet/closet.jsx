
import React, { useEffect, useState, useRef } from "react";

export default function Closet({ initialConjuntos = [] }) {
  const [conjuntos, setConjuntos] = useState(initialConjuntos);
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    // carga inicial de localStorage (mock)
    const stored = JSON.parse(localStorage.getItem("conjuntos") || "[]");
    if (stored.length) setConjuntos(stored);
  }, []);

  useEffect(() => {
    // por si quieres auto-centrar u otras reacciones
  }, [index]);

  const cardW = 260;
  const gap = 24;

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }
  function next() {
    setIndex((i) => Math.min(conjuntos.length - 1, i + 1));
  }
  function jumpToStart() {
    setIndex(0);
  }
  function jumpToEnd() {
    setIndex(conjuntos.length - 1);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Tus conjuntos</h2>

      <div
        style={{
          width: "100%",
          height: 620,
          overflow: "hidden",
          position: "relative",
          backgroundImage: "url('https://previews.123rf.com/images/urfingus/urfingus1506/urfingus150600075/40825341-3d-illustration-of-empty-cupboard.jpg')", // 👈 ruta de tu imagen del closet
          backgroundSize: "cover",   // ajusta la imagen al contenedor
          backgroundPosition: "center",

        }}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            position: "absolute",
            left: 0,
            top: 50,
            transition: "transform 500ms ease",
            transform: `translateX(${-(index * (cardW + gap))}px)`,
            gap: `${gap}px`,
            paddingLeft: 40,
            paddingRight: 40,
          }}
        >
          {conjuntos.map((c) => (
            <div
              key={c.id}
              style={{
                width: cardW,
                height: 520,
                border: "6px solid #fff",
                boxSizing: "border-box",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img src={c.thumbnail} alt={c.id} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Controles tipo los de la imagen */}
      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 16 }}>
        <button onClick={jumpToStart}>{"<<"}</button>
        <button onClick={prev}>{"<"}</button>
        <button
          onClick={() => {
            // ejemplo: autoplay simple
            let i = 0;
            const iv = setInterval(() => {
              setIndex((cur) => {
                if (cur >= conjuntos.length - 1) {
                  clearInterval(iv);
                  return cur;
                }
                return cur + 1;
              });
            }, 800);
          }}
        >
          Play
        </button>
        <button onClick={next}>{">"}</button>
        <button onClick={jumpToEnd}>{">>"}</button>
      </div>
    </div>
  );
}

