import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Paginas
import Home from "./Page/Home/Home";
import Carros from "./Page/Veiculo/Veiculo";
import Reservas from './Page/Reservas/Reservas';

const Rotas = () => {
  return (
    <Router>
      <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/carros' element={<Carros />}/>
          <Route path='/reservas' element={<Reservas />}/>
          {/* <Route path='/carros/DeskCar' element={<DeskCarro />} /> */}
      </Routes>
    </Router>
  );
};

export default Rotas;
