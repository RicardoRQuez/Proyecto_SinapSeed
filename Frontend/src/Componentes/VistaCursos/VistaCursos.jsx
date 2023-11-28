import styles from "./VistaCursos.module.css";
import { CursoComponent } from './ComponentVistaCursos';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from 'axios';
import {Comentario}  from './componentsVistaCursoGen/ComponentComment/ComentarioComponente.jsx'
import {jwtDecode} from 'jwt-decode';
import { VerComentarios } from "./componentsVistaCursoGen/ComponentComment/VerComentarios.jsx";


export const VistaCursos = () => {
  const { id } = useParams();
  const [curso, setCurso] = useState({});
  const [usuarioActual, setUsuarioActual] = useState({});

  useEffect(() => {
    const obtenerUsuarioActual = async () => {
      try {
        const consultaCookie = Cookies.get("token");
  
        if (consultaCookie) {
          const idToken = jwtDecode(consultaCookie).data._id;
  
          const response = await axios.get(
            `http://localhost:3000/api/v1/user/${idToken}`,
            {
              headers: { token: consultaCookie },
            }
          );
          console.log("usuarioActual",response)
          setUsuarioActual(response.data);
        } else {
          console.warn("No hay una cookie de token");
        }
      } catch (error) {
        console.error("Error al obtener el usuario actual:", error);
      }
    };
  
    obtenerUsuarioActual();
  }, []);


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
    if (!buffer || !buffer.data) {
      return null; // O algún valor predeterminado si prefieres
    }
  
    const arrayBufferView = new Uint8Array(buffer.data);
    const blob = new Blob([arrayBufferView], { type: mimeType });
    const urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(blob);
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
      <Comentario
      cursoId={curso._id}
      imagenUsuario={bufferToDataURL(usuarioActual.imagen, 'image/jpeg')}
      imagenUsuarioCrearComentario={usuarioActual.imagen}
      nombreUsario={usuarioActual.nombre}
      usuarioActualId={usuarioActual._id}
      />
    </>
  );
};
 
