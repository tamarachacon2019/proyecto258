import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Add from './pages/Explore/Add/add';
import Delete from './pages/Explore/Delete/delete';
import Interventions from './pages/Explore/Interventions/interventions';
import Templates from './pages/Explore/Templates/templates';
import Directions from './pages/Outfit/Directions/directions';
import Save from './pages/Outfit/Save/save';

function App() {
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
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
