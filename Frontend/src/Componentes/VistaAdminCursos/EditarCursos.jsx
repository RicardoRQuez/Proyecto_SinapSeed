import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditarCursos.css";
import axios from 'axios';
import Cookies from "js-cookie";

export const EditCurso = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curso, setCurso] = useState({
    titulo: "",
    descripcion: "",
    resumen: "",
    imagen: "",
    horario: ""
  });

  useEffect(() => {
    const obtenerCursos = async () => {
      try {
        const consultaCookie = Cookies.get('token');
        console.log(consultaCookie);
        

        const response = await axios.get(`http://localhost:3000/api/v1/curso/${id}`,{ headers: { token: consultaCookie } });
        setCurso(response.data);
      } catch (error) {
        console.error('Error al obtener Cursos:', error);
      }
    };

    obtenerCursos();
  }, []); 

  const handleChange = (e) => {
    setCurso({
      ...curso,
      [e.target.name]: e.target.value,
    });
  };


const handleGuardar = async () => {
  try {
    const respuesta = await axios.patch(
      `http://localhost:3000/api/v1/curso/${id}`,
      curso,
      
    );

    const datosActualizados = respuesta.data;

    setCurso(datosActualizados);
    navigate('/administrar-cursos');
  } catch (error) {
    console.error('Error al actualizar el curso:', error);
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
