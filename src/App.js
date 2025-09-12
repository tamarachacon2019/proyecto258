import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Add from './pages/Explore/Add/add';
import Delete from './pages/Explore/Delete/delete';
import Interventions from './pages/Explore/Interventions/interventions';
import Templates from './pages/Explore/Templates/templates';
import Directions from './pages/Outfit/Directions/directions';
import Save from './pages/Outfit/Save/save';
import CrearOutfit from './pages/Outfit/crearoutfit';
import Closet from './pages/Closet/closet';
import { useState, useEffect } from 'react';


function App() {
    const [conjuntos, setConjuntos] = useState([]);

  // Cargar conjuntos guardados en localStorage al inicio
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('conjuntos') || '[]');
    setConjuntos(stored);
  }, []);

  // Función para agregar un conjunto nuevo
  function onGuardarConjunto(conjunto) {
    setConjuntos((prev) => [...prev, conjunto]);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore/add" element={<Add />} />
        <Route path="/explore/delete" element={<Delete />} />
        <Route path="/explore/interventions" element={<Interventions />} />
        <Route path="/explore/templates" element={<Templates/>} />
        <Route path="/outfit/directions" element={<Directions/>} />
        <Route path="/outfit/save" element={<Save/>} />
        <Route path="/crearoutfit" element={<CrearOutfit/>} />
        <Route path="/closet/closet" element={<Closet/>} />

         {/* Pasamos la función onGuardarConjunto al CrearOutfit */}
        <Route
          path="/crearoutfit"
          element={<CrearOutfit onGuardarConjunto={onGuardarConjunto} />}
        />

        {/* Closet recibe la lista de conjuntos */}
        <Route
          path="/closet"
          element={<Closet initialConjuntos={conjuntos} />}
        /> 
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
