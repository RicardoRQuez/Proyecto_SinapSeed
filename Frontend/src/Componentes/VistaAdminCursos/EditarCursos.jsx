import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditarCursos.css";

export const EditCurso = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curso, setCurso] = useState({
    titulo: "",
    descripcion: "",
    resumen: "",
    imagen: "",
  });

  useEffect(() => {
    const obtenerDetallesCurso = async () => {
      try {
        const respuesta = await fetch(
          `http://localhost:3000/api/v1/curso/${id}`
        );
        const datos = await respuesta.json();
        setCurso(datos);
      } catch (error) {
        console.error("Error al obtener detalles del curso:", error);
      }
    };

    obtenerDetallesCurso();
  }, [id]);

  const handleChange = (e) => {
    setCurso({
      ...curso,
      [e.target.name]: e.target.value,
    });
  };

  const handleGuardar = async () => {
    try {
      const respuesta = await fetch(
        `http://localhost:3000/api/v1/curso/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(curso),
        }
      );

      const datosActualizados = await respuesta.json();

      setCurso(datosActualizados);

      navigate("/administrar-cursos");
    } catch (error) {
      console.error("Error al actualizar el curso:", error);
    }
  };

  return (
    <>
      <div>
        <div className="container-flex antiNavbar">.</div>
        <h2 className="tirarAbajo">Editar Curso</h2>

        <form>
          <div className="container alMedio">
            <div className="row alMedio ">
              <div className="col-3 izquierda">
                <label>Nombre:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="nombre"
                  value={curso.nombre}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label>Descripción:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="descripcion"
                  value={curso.descripcion}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label>Fecha de Inicio:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="fechaInicio"
                  value={curso.fechaInicio}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label>Duración:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="duracion"
                  value={curso.duracion}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label>Docente:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="docente"
                  value={curso.docente}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label>Horario:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="horario"
                  value={curso.horario}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label></label>
              </div>
              <div className="col-3 izquierda">
                <button type="button" onClick={handleGuardar}>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
