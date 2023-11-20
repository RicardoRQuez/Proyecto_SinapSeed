import React from 'react';
import './ComponenteCurso.css'

export const ComponenteComentarios = ({ userId: { nombre, imagen }, comentario }) => {
  return (
    
    <section className='containerCursoGen'>
      <div className='row'>
        <div className='col-2'>
          <img src={imagen} alt="imagen de muestra" className='imagenCursoGen'/>
        </div>
        <div className='col-10'>
          <h4 className='h4Luis'>{nombre}</h4>
          <p className='parrafoLuis'>{comentario}</p>
          
        <button type="submit" className="botonVermasCursoGen">
          Eliminar
        </button>
        <button type="submit" className="botonVermasCursoGen">
          Editar
        </button>
      
        </div>

      </div>
      
    </section>
  );
};
