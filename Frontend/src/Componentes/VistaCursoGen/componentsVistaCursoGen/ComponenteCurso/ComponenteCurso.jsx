import React from 'react';
import './ComponenteCurso.css'
import muestra from '../../muestra.jpeg'

export const ComponenteCurso = () => {
  return (
    <section className='containerCursoGen'>
      <div className='row'>
        <div className='col-2'>
          <img src={muestra} alt="imagen de muestra" className='imagenCursoGen'/>
        </div>
        <div className='col-10'>
          <h4 className='h4Luis'>Full Stack Javascript </h4>
          <p className='parrafoLuis'> Conviértete en un Desarrollador Full Stack con el curso de JavaScript de Generation Chile. Inscríbete y avanza en tu carrera profesional.</p>
          <button type="submit" className="botonVermasCursoGen">
          <span className='ingresarCursoGen'> Ver más</span>
          </button>
        </div>

      </div>
      
    </section>
  );
};

