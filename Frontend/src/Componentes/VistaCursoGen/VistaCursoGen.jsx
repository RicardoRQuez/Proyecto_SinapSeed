import React, { useState, useEffect } from 'react';
import estudio from './estudio.jpg';
import './VistaCursoGen.css';
import { BusquedaCursoGen } from './componentsVistaCursoGen/Busqueda/BusquedaCursoGen.jsx'
import {ComponenteCurso } from './componentsVistaCursoGen/ComponenteCurso/ComponenteCurso.jsx'
import muestra from './muestra.jpeg';
import axios from 'axios';
import Cookies from "js-cookie";


export const VistaCursoGen = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const obtenerCursos = async () => {
      try {
        const consultaCookie = Cookies.get('token');
        console.log(consultaCookie);
        

        const response = await axios.get('http://localhost:3000/api/v1/curso',{ headers: { token: consultaCookie } });
        setCursos(response.data);
      } catch (error) {
        console.error('Error al obtener Cursos:', error);
      }
    };

    obtenerCursos();
  }, []); 

  const bufferToDataURL = (buffer, mimeType) => {
    const arrayBufferView = new Uint8Array(buffer.data); // Extrae la propiedad data
    const blob = new Blob([arrayBufferView], { type: mimeType });
    const urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(blob);
  };
  


  return (
    <>
    <img src={estudio} alt="imagenFondo" className='estudioLuis' />
    <section className='row'>
      <div className='col-2'></div>
      <div className='col-8'>
        <BusquedaCursoGen />
        <section className='row text-center encabezadosCursoGen'>
          <h2 className='tituloh2Luis'> ¡ Encuentra lo que <span className='buscasLuis'> buscas</span> !</h2>
          <h3 className='tituloh3Luis'> Conoce recursos académicos de tú interés. </h3>
        </section>
       
        {cursos.map((curso) => (
          <ComponenteCurso
            key={curso._id}
            titulo={curso.titulo}
            resumen={curso.resumen}
            descripcion={curso.descripcion}
            imagen={bufferToDataURL(curso.imagen, 'image/jpeg')}
            id={curso._id}
          />
        ))}
      </div>
      <div className='col-2'></div>
    </section>
  </>
);
};
