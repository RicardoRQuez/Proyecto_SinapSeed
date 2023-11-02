import React from 'react';
import estudio from './estudio.jpg';
import './VistaCursoGen.css';
import { BusquedaCursoGen } from './componentsVistaCursoGen/Busqueda/BusquedaCursoGen.jsx'
import { ComponenteCurso } from './componentsVistaCursoGen/ComponenteCurso/ComponenteCurso.jsx'

export const VistaCursoGen = () => {
  return (
    <>
        
        <img src={estudio} alt="imagenFondo" className='estudioLuis'/>          
        <section className='row'>
            <div className='col-2'>

            </div>
            <div className='col-8'>
                <BusquedaCursoGen />
                <section className='row text-center encabezadosCursoGen'>
                    <h2 className='tituloh2Luis'> ¡ Encuentra lo que <span className='buscasLuis'> buscas</span> !</h2>
                    <h3 className='tituloh3Luis'> Conoce recursos académicos de tú interes. </h3>
                </section>
                <ComponenteCurso />
                <ComponenteCurso />
                <ComponenteCurso />
                <ComponenteCurso />
                <ComponenteCurso />
                <ComponenteCurso />
            </div>
            <div className='col-2'>
                
            </div>
        </section>    
        
        
    </>
  );
};

