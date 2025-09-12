import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  // Atajo secreto: Ctrl + Alt + L abre login oculto
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "l") {
        navigate("/login"); // 👈 asegúrate que coincida con la ruta de App.jsx
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <div className="home-container">
      {/* Botón ESTILOS */}
      <div className="card" onClick={() => navigate("/explore/templates")}>
        <img src="/icons/estilos.png" alt="Estilos" />
        <h2>ESTILOS</h2>
        <p>Inspírate a hacer tu outfit según el estilo que más te guste</p>
      </div>

      {/* Botón AGREGAR */}
      <div className="card" onClick={() => navigate("/crearoutfit")}>
        <img src="/icons/agregar.png" alt="Agregar" />
        <h2>AGREGAR</h2>
        <p>Crea tu outfit que más te guste</p>
      </div>

      {/* Botón CLOSET */}
      <div className="card" onClick={() => navigate("/closet")}>
        <img src="/icons/closet.png" alt="Closet" />
        <h2>CLOSET</h2>
        <p>Ve los atuendos que se han guardado</p>
      </div>
    </div>
  );
};

export default Home;
