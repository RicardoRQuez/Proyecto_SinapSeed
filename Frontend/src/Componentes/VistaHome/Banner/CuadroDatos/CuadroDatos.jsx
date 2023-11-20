import React from 'react';
import './CuadroDatos.css';

export const CuadroDatos = (props) => {
  const { enlaces, imagenes, numeros, textos } = props.datos;

  return (
    <div className="container datos-portada">
      <div className="row cuadro text-center">
        {enlaces.map((enlace, index) => (
          <div className="col" key={index}>

            <div className="row">
            <a href={enlace} className="enlace-columna">
              <div className='d-flex justify-content-center'>
              <img src={imagenes[index]} alt="" className="iconito" />
              </div>
              <div className="row">
              <p>{numeros[index]}</p>
              </div>
              <p className="texto-cuadro">{textos[index]}</p>
            </a>
          </div>

          </div>
        ))}
      </div>
    </div>
  );
};
