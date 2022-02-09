import React, { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import TableReserva from "../../Components/Tables/TabelaReserva";

import reservasService from "../../Service/ReservasService/ReservasService";

import FormularioReservas from "../../Components/Formulario/FormularioReservas";
import FormularioDevolução from "../../Components/Formulario/FormularioDevolução";
import FormularioSaida from '../../Components/Formulario/FormularioSaida';

function Reservas() {
  const [reservas, setReservas] = useState();
  const [att, setAtt] = useState();
  const [content, setContent] = useState();

  const handleSubmitForm = (bool) => {
   setAtt(bool) 
  }


  useEffect(() => {
    reservasService.get().then((data) => {
      setReservas(data);
    });
  }, [att]);


  useEffect(() => {
    setContent(<TableReserva data={reservas}/>);
  }, [reservas, att]);

  function updateContent(index) {
    if (index === 1) {
      setContent(<FormularioReservas onUpdate={handleSubmitForm()} updateData={att}/>);
    } else if (index === 2) {
      reservasService.get().then((data) => {
        setReservas(data);
      });
      setContent(<TableReserva data={reservas}/>);
    } else if (index === 3) {
      setContent(<FormularioDevolução onUpdate={handleSubmitForm()}/>)
    } else if (index === 4) {
      setContent(<FormularioSaida />)
    }
  }

  return (
    <div className="bg-sky-900 flex h-full">
      <div className="z-50  float-left ">
        <SideBar />
      </div>

      <div className="absolute text-4xl z-10 left-40 text-white top-10 flex gap-3">
        <i className="bx bxs-calendar-edit text-4xl"></i>
        <h2>Reservas</h2>
      </div>

      <div
        className="h-4/5 rounded-tl-3xl absolute right-0 bottom-0 bg-white overflow-x-auto"
        style={{ width: "calc(96% - 10px)" }}
      >
        <div className="w-full h-12 rounded-tl-xl border border-vettor-color bg-white fixed z-40">
          <div className="p-3 ml-7 text-color-link rounded-tl-xl flex gap-10 items-center">
            <div className="cursor-pointer" onClick={() => updateContent(2)}>
              Reservas
            </div>
            <div className="cursor-pointer" onClick={() => updateContent(1)}>
              Reservar um Veículo
            </div>
            <div className="cursor-pointer" onClick={() => updateContent(3)}>
              Chegada de um Veículo
            </div>
            <div className="cursor-pointer" onClick={() => updateContent(4)}>
              Saida de um Veículo
            </div>
          </div>
        </div>
        <div className="mt-24 w-11/12 grid justify-center items-center">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Reservas;
