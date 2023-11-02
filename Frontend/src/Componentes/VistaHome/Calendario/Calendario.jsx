import React from 'react';
import './Calendario.css'; // Asegúrate de tener la ruta correcta a tu archivo de estilos

export const Calendario = () => {
  return (
    <>
    <div className="calendario container">
      <div className="row cuadro">
        <div className="col-2 calendario">
          <img src="/imágenes/calendario.png" alt="calendario" className="imagenCalendario" />
        </div>
        <div className="col-10 calendario">
          <a className="textoCalendario" href="#">Revisa nuestro calendario para que organices tu aprendizaje</a>
        </div>
      </div>
    </div>
  
      </>
  );
};
