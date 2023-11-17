import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditarCursos.css";

export const CrearCurso = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curso, setCurso] = useState({
    titulo: "",
    descripcion: "",
    resumen: "",
    imagen: "",
    horario: "",
    precio: "",
    puntaje: "",
  });
  
  const EnviarSolicitud = async () => {
    try {
      const url = "http://localhost:3000/api/v1/curso";

      const formData = new FormData();
      formData.append("titulo", curso.titulo);
      formData.append("descripcion", curso.descripcion);
      formData.append("resumen", curso.resumen);
      formData.append("imagen", curso.imagen);
      formData.append("precio", curso.precio); 
      formData.append("puntaje", curso.puntaje);
      formData.append("horario", curso.horario); 


      const opciones = {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: formData, 
      };

      const respuesta = await fetch(url, opciones);

      if (respuesta) {
        const datos = await respuesta.json();
        // Manejar la respuesta según tus necesidades
        console.log("Curso creado con éxito:", datos);
      } else {
        console.error(
          "Error en la solicitud POST:",
          respuesta.status,
          respuesta.statusText
        );
      }
      navigate("/administrar-cursos");
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurso({ ...curso, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCurso({ ...curso, imagen: file });
  };

  return (
    <>
      <div>
        <div className="container-flex antiNavbar">.</div>
        <h2 className="tirarAbajo">Agregar Curso</h2>

        <form onSubmit={EnviarSolicitud}>
          <section className="row alMedio">
            <img
              src={curso.imagen ? URL.createObjectURL(curso.imagen) : ''}
              alt="imagen de Perfil"
              className="imagenPerfil"
            />
          </section>
          <section className="row alMedio">
            <div className="input-group">
              <label className="input-group-text">Subir</label>

              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
                name="titulo"
                value={curso.imagen}
                onChange={handleFileChange}
              />
            </div>
          </section>

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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label>Puntaje:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="puntaje"
                  value={curso.puntaje}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label>Precio:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="precio"
                  value={curso.precio}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label></label>
              </div>
              <div className="col-3 izquierda">
                <button type="submit">Guardar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
