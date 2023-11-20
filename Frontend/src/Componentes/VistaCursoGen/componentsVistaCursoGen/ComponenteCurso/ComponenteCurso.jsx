import React from 'react';
import './ComponenteCurso.css'
import muestra from '../../muestra.jpeg'
import { NavLink } from 'react-router-dom';

export const ComponenteCurso = ({ imagen, titulo, descripcion, id, onClickVerOcultarComentarios }) => {
  return (
    
    <section className='containerCursoGen'>
      <div className='row'>
        <div className='col-2'>
          <img src={imagen} alt="imagen de muestra" className='imagenCursoGen'/>
        </div>
        <div className='col-10'>
          <h4 className='h4Luis'>{titulo}</h4>
          <p className='parrafoLuis'>{descripcion}</p>
          <NavLink className="ingresarCursoGen" to={`/cursos/${id}`}>
        <button type="submit" className="botonVermasCursoGen">
          Ver más
        </button>
      </NavLink>
      <button type="submit" onClick={onClickVerOcultarComentarios} className="botonComentar">
          Ver/ocutar comentarios
        </button>
        
        </div>

      </div>
      
    </section>
  );
};

