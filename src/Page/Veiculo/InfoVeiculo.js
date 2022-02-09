import React from 'react';
import SideBar from '../../Components/SideBar/SideBar';

function InfoVeiculo() {
  return (
    <div className='bg-cyan-800 flex items-center'>
        <div className='z-40'><SideBar/></div>

        <div className='text-white absolute ml-24 mt-10 text-3xl'>
            <h1>Land Rover Defender HSE</h1>

            <div className='flex'>
                <div className='w-2/4 p-8'>
                    <img src='https://cdn.motor1.com/images/mgl/E61W4q/s1/land-rover-defender-oncafari.jpg' alt='' className='w-full'/>
                </div>
                <div className='p-8 w-2/5'>
                    <div className='w-full h-full bg-neutral-400'>
                        <h2 className='text-center pt-3'>Informações Sobre o Carro</h2>

                        <div className='text-base mt-10 p-4'>
                            <p>Placa do veículo:</p>
                            <p>Nome do veículo:</p>
                            <p>Quilometragem do veículo:</p>
                            <p>Ultima revisão realizada:</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default InfoVeiculo;
