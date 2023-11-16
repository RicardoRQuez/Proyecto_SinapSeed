import React from 'react';
import './CuadroFotasas.css'; // Asegúrate de tener la ruta correcta a tu archivo de estilos

export const EquipoSinapSeed = () => {
  const nombres = ['Diego Martínez', 'Ricardo Rodríguez', 'Ivana Castillo', 'Sabrina Silva', 'Luis Díaz'];
  const correos = ['', '', '', '', ''];
  const grupos = ['Generation Group', 'Generation Group', 'Generation Group', 'Generation Group', 'Generation Group'];

  const miniaturas = ['/imágenes/Enjulandia.jpeg', '/imágenes/ricardo.jpeg', '/imágenes/ivana.jpeg', '/imágenes/Sabrina.jpeg', '/imágenes/Luis.jpeg'];

  return (
   <>
   
    <div className="container pie">
    <div className="col">
          <h4 className="teamSinap">Equipo SinapSeed</h4>
        </div>
      <div className="row">
        {miniaturas.map((imagen, index) => (
          <div className="col" key={index}>
            <img src={imagen} alt="miniaturas" className="mini" />
          </div>
        ))}
      </div>
      <div className="row">
        {nombres.map((nombre, index) => (
          <div className="col" key={index}>
            {nombre}
          </div>
        ))}
      </div>
      <div className="row">
        {correos.map((correo, index) => (
          <div className="col" key={index}>
            {correo}
          </div>
        ))}
      </div>
      <div className="row">
        {grupos.map((grupo, index) => (
          <div className="col" key={index}>
            {grupo}
          </div>
        ))}
      </div>
      <div className="row">
        
      </div>
    </div>
    </>
  );
};
