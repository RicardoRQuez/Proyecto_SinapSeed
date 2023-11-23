import React from 'react';
import './CuadroDatos.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export const CuadroDatos = (props) => {
  const { imagenes, numeros, textos, tooltips } = props.datos;

  return (
    <div className="container datos-portada">
      <div className="row cuadro text-center">
        {imagenes.map((imagen, index) => (
          <div className="col" key={index}>
            <OverlayTrigger
 placement="bottom"
  overlay={<Tooltip id={`tooltip-${index}`}>{tooltips && tooltips[index]}</Tooltip>}
>
              <div className="row">
                <a className="enlace-columna">
                  <div className='d-flex justify-content-center'>
                    <img src={imagen} alt="" className="iconito" />
                  </div>
                  <div className="row">
                    <p>{numeros[index]}</p>
                  </div>
                  <p className="texto-cuadro">{textos[index]}</p>
                </a>
              </div>
            </OverlayTrigger>
          </div>
        ))}
      </div>
    </div>
  );
};