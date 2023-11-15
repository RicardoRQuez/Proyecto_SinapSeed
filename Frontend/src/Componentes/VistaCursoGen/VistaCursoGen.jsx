import estudio from './estudio.jpg';
import './VistaCursoGen.css';
import { BusquedaCursoGen } from './componentsVistaCursoGen/Busqueda/BusquedaCursoGen.jsx'
import { ComponenteCurso } from './componentsVistaCursoGen/ComponenteCurso/ComponenteCurso.jsx'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

export const VistaCursoGen = () => {
  const [cursos, setCursos] = useState([]);  // Inicializa cursos como un array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const consultaCookie = Cookies.get('token');
        console.log(consultaCookie);

        // Usar la variable consultaCookie en lugar de "token"
        const response = await axios.get("http://localhost:3000/api/v1/curso", { headers: { token: consultaCookie } });
        setCursos(response.data);
        console.log(response.data);
      } catch (error) {
        
        console.error("Error al obtener cursos:", error);
      }
    };

    fetchData();  // Llama a la función asincrónica en useEffect
  }, []);  // Agrega una dependencia vacía para que useEffect se ejecute solo una vez al montar el componente

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
          {/* Renderizar ComponenteCurso para cada curso */}
          {cursos.map((curso) => (
            <ComponenteCurso key={curso.id} curso={curso} />
          ))}
        </div>
        <div className='col-2'></div>
      </section>
    </>
  );
};

