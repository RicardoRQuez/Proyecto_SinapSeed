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
                <label>titulo:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="titulo"
                  value={curso.titulo}
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
                <label>Resumen:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="resumen"
                  value={curso.resumen}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label>Imagen</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="imagen"
                  value={curso.imagen}
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
