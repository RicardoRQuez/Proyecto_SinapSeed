import React from 'react';
import './CuadroDatos.css';

export const CuadroDatos = (props) => {
  const { enlaces, imagenes, numeros, textos } = props.datos;

  return (
    <div className="container datos-portada">
      <div className="row cuadro text-center">
        {enlaces.map((enlace, index) => (
          <div className="col" key={index}>
            <a href={enlace} className="enlace-columna">
              <img src={imagenes[index]} alt="" className="iconito" />
              <p>{numeros[index]}</p>
              <p className="texto-cuadro">{textos[index]}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
