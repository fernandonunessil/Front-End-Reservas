import React, { useState, useEffect } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import AttCarro from "../../img/AttCarro.png";
import AttCarro2 from "../../img/AttCarro2.png";
import AttCarro3 from "../../img/AttCarro3.png";
import AttCarro4 from "../../img/AttCarro4.png";
import GpsRote from "../../img/GpsRote.png";
import GpsPage from "../../img/GpsPage.png";
// import img from 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png'

function Home() {
  const [content, setContent] = useState([]);
  const [attdata, setAttdata] = useState([]);
  const [img, setImg] = useState([]);

  const contentFirst = (
    <div className="grid justify-center text-center">
      <div className="text-center text-3xl">
        <h1 className="font-bold font-mono p-4">
          Ultima atualização na data {attdata}
        </h1>
      </div>
      <div className="w-full grid justify-center items-center">
        <p>
          Uma nova area onde o usuario pode controlar os carros a serem usados e
          também controlar o status desse mesmo carro, se ele esta reservado, no
          patio, ou em manutenção
        </p>
        <div className="">
          {img
            ? img.map((img) => (
                <div key={img.img} className="p-4">
                  <img
                    src={img.img}
                    alt=""
                    style={{ width: 700, margin: "0 auto" }}
                    className="border shadow-slate-500 shadow-lg"
                  />
                  <p className="p-8">{img.desc}</p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );

  const contentSecond = (
    <div className="grid justify-center text-center">
      <div className="text-center text-3xl">
        <h1 className="font-bold font-mono p-4">Futuras Atualizações</h1>
      </div>
      <div className="w-full grid justify-center items-center">
        <div className="p-8">
          <h2 className="text-2xl text-bold mb-4">
            Adicionar uma area para Acessar a Localização dos nossos veiculos
          </h2>
          <img src={GpsRote} alt="" style={{ width: 700 }} className="border shadow-slate-500 shadow-lg" />
        </div>
        <div className="p-8">
          <h2 className="text-xl text-bold mb-4">
            Mostranto o Lugar em tempo real, e informações complementares sobre
            a localização
          </h2>
          <img src={GpsPage} alt="" style={{ width: 700 }} className="border shadow-slate-500 shadow-lg" />
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    setImg([
      {
        img: AttCarro,
        desc: "Uma nova area com o icone de um carro foi criada",
      },
      {
        img: AttCarro2,
        desc: "Ao colocar o mouse em cima da do icone, ela vai extender, mostrando o nome da area",
      },
      {
        img: AttCarro3,
        desc: "Ao clicar no nome ou icone, ira abrir uma seção, onde no canto superior esquerdo, da parte clara do site, vai possuir um cabeçalho, mostrando 2 icones, uma para cadastrar um veículo, e o outro para visualizar toda a frota de veículos",
      },
      {
        img: AttCarro4,
        desc: 'Ao clicar no link em azul chamado "Cadastrar veículo" vai abrir essa tela, pedindo as seguintes informações ["placa do veículo"/"Ano do veículo"/"Modelo do Veículo"] basta prencher os campos conforme oque se pede e clicar em cadastrar, e pronto ! Você ja vai poder acessar o carro na aba de veículos',
      },
    ]);
  }, []);

  useEffect(() => {
    setAttdata("12/04/2022");
  }, []);

  useEffect(() => {
    setContent(contentFirst);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img]);

  function updateContent(index) {''
    if (index === 1) {
      // Ultimas Atualizações Content
      setContent(
        contentFirst
      );
    } else if (index === 2) {
      //Futuras Atualizações Content
      setContent(
        contentSecond
      );
    } else {
      return null;
    }
  }

  return (
    <div className="bg-sky-900 flex h-full">
      <div className="z-50  float-left ">
        <SideBar />
      </div>

      <div className="absolute text-4xl z-10 left-40 text-white top-10 flex gap-3">
        <i className="bx bxs-home text-4xl"></i>
        <h2>Home</h2>
      </div>

      <div
        className="h-4/5 rounded-tl-3xl absolute right-0 bottom-0 bg-white overflow-x-auto"
        style={{ width: "calc(96% - 10px)" }}
      >
        <div className="w-full h-12 rounded-tl-xl border border-vettor-color bg-white fixed">
          <div className="p-1 ml-7 rounded-tl-xl text-color-link flex gap-10 items-center ">
            <p
              className="cursor-pointer opacity-75 hover:opacity-100"
              onClick={() => updateContent(1)}
            >
              Atualizações
            </p>
            <p className="cursor-pointer opacity-75 hover:opacity-100 flex items-center gap-1">
              <i
                className="bx bxl-whatsapp text-4xl"
                style={{ color: "#0bc91e" }}
              ></i>
              Entre em Contato
            </p>
            <p className="cursor-pointer opacity-75 hover:opacity-100 flex items-center gap-1">
              <i
                className="bx bxl-instagram text-4xl"
                style={{ color: "#9706a2" }}
              ></i>
              Siga a gente no instagram
            </p>
            <p
              className="cursor-pointer opacity-75 hover:opacity-100"
              onClick={() => updateContent(2)}
            >
              Futuras atualizações
            </p>
          </div>
        </div>
        <div className="mt-24 w-full grid">{content}</div>
      </div>
    </div>
  );
}

export default Home;
