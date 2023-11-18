import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditarCursos.css";
import axios from 'axios';


export const CrearCurso = () => {
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
  
  const EnviarSolicitud = async (event) => {
    event.preventDefault()
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
        headers: {
          "Content-Type": "multipart/form-data", // Usamos multipart/form-data para enviar datos binarios (como archivos)
        },
      };
  
      const respuesta = await axios.post(url, formData, opciones);
      
      if (respuesta.data.imagen) {
        const imagenUrl = bufferToDataURL(respuesta.data.imagen, "image/jpeg"); // Reemplaza 'image/jpeg' con el tipo MIME correcto
        setImagenPerfilSrc(imagenUrl);
      }
  
      // Manejar la respuesta según tus necesidades
      console.log("Curso creado con éxito:", respuesta.data);
  
      navigate("/administrar-cursos");
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurso({ ...curso, [name]: value });
  };

  
  const [imagenPerfilSrc, setImagenPerfilSrc] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagenPerfilSrc(reader.result); // Actualizamos la imagen en el frontend

        // Actualizamos el estado para incluir la imagen seleccionada
        setCurso({
          ...curso,
          imagen: file, // Esto podría ser diferente dependiendo de la estructura de datos que espera el backend para la imagen
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const bufferToDataURL = (buffer, mimeType) => {
    const arrayBufferView = new Uint8Array(buffer.data); // Extrae la propiedad data
    const blob = new Blob([arrayBufferView], { type: mimeType });
    const urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(blob);
  };

  return (
    <>
      <div>
        <div className="container-flex antiNavbar">.</div>
        <h2 className="tirarAbajo">Agregar Curso</h2>

        <form onSubmit={EnviarSolicitud}>
        <section className="row">
              <img
                src={imagenPerfilSrc}
                alt="imagendePerfil"
                className="imagenPerfil"
              />
              <div className="input-group mb-3">
                <label className="input-group-text">Subir</label>
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
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
                <label>Horario:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="horario"
                  value={curso.horario}
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
