import React, { useState, useEffect } from "react";
import estudio from "./estudio.jpg";
import "./VistaCursoGen.css";
import { BusquedaCursoGen } from "./componentsVistaCursoGen/Busqueda/BusquedaCursoGen.jsx";
import { ComponenteCurso } from "./componentsVistaCursoGen/ComponenteCurso/ComponenteCurso.jsx";
import { ComponenteComentarios } from "./componentsVistaCursoGen/ComponenteCurso/componenteComentarios";
import axios from "axios";
import Cookies from "js-cookie";

export const VistaCursoGen = () => {
  const [cursos, setCursos] = useState([]);
  const [comment, setComment] = useState([]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

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
    const obtenerUsuarios = async () => {
      try {
        const consultaCookie = Cookies.get("token");

        if (consultaCookie) {
          const response = await axios.get(
            `http://localhost:3000/api/v1/comment`,
            {
              headers: { token: consultaCookie },
            }
          );
          setComment(response.data);
        } else {
          console.warn("No hay una cookie de token");
        }
      } catch (error) {
        console.error("Error al obtener Comentarios:", error);
      }
    };

    obtenerUsuarios();
  }, []);
  console.log("responsecomment", comment);

  const bufferToDataURL = (buffer, mimeType) => {
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
              />
              {/* Mostrar comentarios solo si el curso está seleccionado */}
              {cursoSeleccionado === curso._id &&
                curso.comentarios.map((comentario) => (
                  <ComponenteComentarios
                    key={comentario._id}
                    nombre={comentario.userId.nombre}
                    comentario={comentario.comentario}
                    imagen={bufferToDataURL(
                      comentario.userId.imagen,
                      "image/jpeg"
                    )}
                    id={comentario._id}
                  />
                ))}
            </React.Fragment>
          ))}
        </div>
        <div className="col-2"></div>
      </section>
    </>
  );
};