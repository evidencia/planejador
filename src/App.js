import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./pages/Login";
import Home from "./pages/Home";
import Esportes from "./pages/Esportes";
import AddTreinos from "./pages/AddTreinos";
import MarcaTreino from "./pages/MarcaTreino";


import './styles/global.scss'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/selecionar" element={<Esportes />}/>
          <Route path="/adicionar" element={<AddTreinos />}/>
          <Route path="/marcar" element={<MarcaTreino />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
