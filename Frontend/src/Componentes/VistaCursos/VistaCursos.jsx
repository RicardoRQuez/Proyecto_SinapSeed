import styles from "./VistaCursos.module.css";
import image1 from "./imagenes/image1.png";
import { CursoComponent } from './ComponentVistaCursos';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from 'axios';


export const VistaCursos = () => {
  const { id } = useParams();
  const [curso, setCurso] = useState({});

  useEffect(() => {
    const obtenerCurso = async () => {
      try {
        const consultaCookie = Cookies.get('token');
        console.log(consultaCookie);

        const response = await axios.get(`http://localhost:3000/api/v1/curso/${id}`, { headers: { token: consultaCookie } });
        
        if (response.data) {
          setCurso(response.data);
        } else {
          console.error('La respuesta de la API no contiene datos.');
        }
      } catch (error) {
        console.error('Error al obtener Cursos:', error);
      }
    };

    obtenerCurso();
  }, []);
    
  const bufferToDataURL = (buffer, mimeType) => {
    try {
      if (buffer && buffer.data) {
        const arrayBufferView = new Uint8Array(buffer.data);
        const blob = new Blob([arrayBufferView], { type: mimeType });
        const urlCreator = window.URL || window.webkitURL;
        return urlCreator.createObjectURL(blob);
      } else {
       
      }
    } catch (error) {
      console.error(error.message);
      // Devuelve una URL predeterminada o realiza alguna acción de manejo de errores
      return 'URL_POR_DEFECTO';
    }
  };

  
  return (
    <>
      <CursoComponent
        key={curso._id}
        titulo={curso.titulo}
        resumen={curso.resumen}
        descripcion={curso.descripcion}
        imagen={bufferToDataURL(curso.imagen, 'image/jpeg')}
        puntaje={curso.puntaje}
        precio={curso.precio}
      />
    </>
  );
};
 