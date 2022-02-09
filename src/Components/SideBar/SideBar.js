import React from "react";
import { Link } from "react-router-dom";
import JetCar from "../../img/JetCars.png";

const SideBar = () => {
  return (
    <div className="w-16 rounded-tr-xl h-screen bg-slate-900 hover:w-48 ease-in-out duration-300 ">
      <div className="p-8 w-full h-56">{/* <img src={JetCar} alt="" /> */}</div>
      <div className="text-white p-4 overflow-hidden text-xl">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-3">
            <i className="bx bxs-home text-4xl"></i>
            <h2>Home</h2>
          </Link>
        </div>
        <div>
          <Link to="/carros" className="flex items-center gap-3 mb-3">
            <i className="bx bxs-car text-4xl"></i>
            <h2>Veículos</h2>
          </Link>
        </div>
        <div>
          <Link to="/reservas" className="flex items-center gap-3 mb-3">
            <i className="bx bxs-calendar-edit text-4xl"></i>
            <h2>Reservas</h2>
          </Link>
        </div>
        <div></div>
      </div>
    </div> //Bg SideBar
  );
};

export default SideBar;
