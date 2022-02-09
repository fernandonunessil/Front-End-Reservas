import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Apenas a div onde os carros ficam, na pagina /carros
function BoxCar(params) {
  let { statusData, src, carName, placa, ano, km } = params;

  const [colorStatus, setColor] = useState("#39AE4C");

  const [statusBar, setBar] = useState(null);

  if (statusData){

  }else {
    statusData = 'livre'
  }

  useEffect(() => {
    if (statusData === "livre") {
      setColor("#39AE4C");

    } else if (statusData === "reservado") {
      setColor("#AE9C39");

    } else if (statusData === "em uso") {
      setColor("#B82F2F");

    }
  }, [statusData]);

  useEffect(() => {
    setBar(
      <div
        className="w-full h-1 absolute -bottom-1"
        style={{ backgroundColor: colorStatus }}
      ></div>
    );
  }, [colorStatus, statusData]);

  return (
      <div
        className="h-96 border bg-slate-100 shadow-lg shadow-slate-400 rounded-tr-2xl relative "
        style={{ minWidth: "25%"}}
      >
        <div className='text-center'>
          <img src={src} alt='' className='rounded-tr-2xl'  style={{width: '320px', height: '200px'}}/>
          <h2 className='p-2 text-2xl font-mono'>{carName}</h2>
          <p>Placa do Veículo: <span className="text-cyan-700">{placa}</span></p>
          <p>Ano do Veículo: <span className="text-cyan-700">{ano}</span></p>
          <p>Quilometragem: <span className='text-cyan-700'>{km}</span></p>
          <p>Status: <span style={{color: colorStatus}}>{statusData}</span></p>
        </div>
        {statusBar}
      </div>
  );
}
// require(directori)
export default BoxCar;
