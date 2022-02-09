import React, { useState, useEffect } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import BoxCar from "../../Components/boxCar/BoxCar";
import Formulario from "../../Components/Formulario/FormularioCarros";

import carrosService from "../../Service/carroService/carrosService";

function Carros() {
  const [content, setContent] = useState();
  const [carros, setCarros] = useState([]);
  const [conteudoAtual, setConteudo] = useState();

  // Função que retorna o conteudo das div de carros
  function viewCars() {
    setConteudo(1);
    return (
      <div className="w-full p-4 flex gap-4 justify-center flex-wrap">
        {carros.length > 0
          ? carros.map((row) => (
              <BoxCar
                statusData={row.stats}
                carName={row.modelo}
                placa={row.placa}
                ano={row.ano}
                src={row.url}
                km={row.km}
                key={row.placa}
              />
            ))
          : null}
      </div>
    );
  }

  // Função que retorna o formulario de para cadastrar carros
  function joinCars() {
    setConteudo(2);
    return <Formulario />;
  }

  function updateContent(content) {
    if (content === 1) {
      setContent(joinCars());
    } else {
      setContent(viewCars());
    }
  }

  useEffect(() => {
    carrosService.get().then((data) => {
      setCarros(data);
    });
  }, [content]);

  useEffect(() => {
    setContent(viewCars());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carros.length]);

  return (
    <>
      <div className="bg-sky-900 flex h-full">
        <div className="z-50  float-left ">
          <SideBar />
        </div>

        <div className="absolute text-4xl z-10 left-40 text-white top-10 flex gap-3">
          <i className="bx bxs-car text-4xl"></i>
          <h2>Veículos</h2>
        </div>

        <div
          className="h-4/5 rounded-tl-xl absolute right-0 bottom-0 bg-white overflow-x-auto"
          style={{ width: "calc(96% - 10px)" }}
        >
          <div className="w-full h-12 rounded-tl-xl  border border-vettor-color bg-white fixed z-30">
            <div className="p-3 ml-7 text-color-link flex gap-5 justify-between">
              <div className="flex gap-5">
                <p
                  className="cursor-pointer opacity-75 hover:opacity-100"
                  onClick={() => updateContent(1)}
                >
                  Cadastrar Vículo
                </p>
                <p
                  className="cursor-pointer opacity-75 hover:opacity-100"
                  onClick={() => updateContent(2)}
                >
                  Veículos
                </p>
              </div>

              {conteudoAtual === 1 ? (
                <div className="flex justify-start gap-2 mr-40">
                  <p className=" text-sm bg-livre text-white p-1 rounded-md shadow-md shadow-slate-400">
                    Livre
                  </p>
                  <p className=" text-sm bg-reservado text-white p-1 rounded-md shadow-md shadow-slate-400">
                    Reservado
                  </p>
                  <p className=" text-sm bg-usando text-white p-1 rounded-md shadow-md shadow-slate-400">
                    Em uso
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="mt-24">{content}</div>
        </div>
      </div>
    </>
  );
}

export default Carros;
