import React, { useState, useEffect } from "react";
import estudio from "./estudio.jpg";
import "./VistaCursoGen.css";
import { BusquedaCursoGen } from "./componentsVistaCursoGen/Busqueda/BusquedaCursoGen.jsx";
import { ComponenteCurso } from "./componentsVistaCursoGen/ComponenteCurso/ComponenteCurso.jsx";
import { ComponenteComentarios } from "./componentsVistaCursoGen/ComponenteCurso/ComponenteComentarios.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import {jwtDecode} from 'jwt-decode';

export const VistaCursoGen = () => {

  const [cursos, setCursos] = useState([]);
  const [comment, setComment] = useState([]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
  const [usuarioActual, setUsuarioActual] = useState(null);

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
    const obtenerCursos = async () => {
      try {
        const consultaCookie = Cookies.get("token");
        const response = await axios.get("http://localhost:3000/api/v1/curso", {
          headers: { token: consultaCookie },
        });
        setCursos(response.data);
      } catch (error) {
        console.error("Error al obtener Cursos:", error);
      }
    };

    obtenerCursos();
  }, []);

  useEffect(() => {
    const obtenerComentarios = async () => {
      try {
        const consultaCookie = Cookies.get("token");

        if (consultaCookie) {
          const response = await axios.get(
            `http://localhost:3000/api/v1/comment`,
            {
              headers: { token: consultaCookie },
            }
          );
          console.log("idComentario",response.data)
          setComment(response.data);
        } else {
          console.warn("No hay una cookie de token");
        }
      } catch (error) {
        console.error("Error al obtener Comentarios:", error);
      }
    };

    obtenerComentarios();
  }, []);
  console.log("responsecomment", comment);

  const bufferToDataURL = (buffer, mimeType) => {
    if (!buffer || !buffer.data) {
      return null; // O algún valor predeterminado si prefieres
    }
  
    const arrayBufferView = new Uint8Array(buffer.data);
    const blob = new Blob([arrayBufferView], { type: mimeType });
    const urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(blob);
  };
  

  const handleClickMostrarOcultarComentarios = (cursoId) => {
    // Cambiar el estado para mostrar/ocultar los comentarios
    setCursoSeleccionado((prevCursoSeleccionado) =>
      prevCursoSeleccionado === cursoId ? null : cursoId
    );
  };

  const cursosAMostrar = cursos.map((curso) => {
    // Filtra los comentarios que corresponden al curso actual
    const comentariosCurso = comment.filter(
      (comentario) => comentario.courseId._id === curso._id
    );

    // Agrega los comentarios como una propiedad adicional al objeto de curso
    return {
      ...curso,
      comentarios: comentariosCurso,
    };
  });

  return (
    <>
      <img src={estudio} alt="imagenFondo" className="estudioLuis" />
      <section className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <BusquedaCursoGen />
          <section className="row text-center encabezadosCursoGen">
            <h2 className="tituloh2Luis">
              {" "}
              ¡ Encuentra lo que{" "}
              <span className="buscasLuis"> buscas</span> !
            </h2>
            <h3 className="tituloh3Luis">
              {" "}
              Conoce recursos académicos de tú interés.{" "}
            </h3>
          </section>

          {cursosAMostrar.map((curso) => (
            <React.Fragment key={curso._id}>
              <ComponenteCurso
                titulo={curso.titulo}
                resumen={curso.resumen}
                descripcion={curso.descripcion}
                imagen={bufferToDataURL(curso.imagen, "image/jpeg")}
                id={curso._id}
                onClickVerOcultarComentarios={() =>
                  handleClickMostrarOcultarComentarios(curso._id)
                }
                usuarioNombre={usuarioActual.nombre}
                usuarioImagen={bufferToDataURL(
                  usuarioActual.imagen,
                  "image/jpeg")}
                userId={usuarioActual._id}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="col-2"></div>
      </section>
    </>
  );
};