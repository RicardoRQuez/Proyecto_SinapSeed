import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditarCursos.css";
import axios from "axios";
import Cookies from "js-cookie";
import imagenPerfil from "../../assets/resources/cursox.jpg";

export const EditCurso = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curso, setCurso] = useState({
    titulo: "",
    descripcion: "",
    resumen: "",
    imagen: "",
    horario: "",
  });

  useEffect(() => {
    const obtenerCursos = async () => {
      try {
        const consultaCookie = Cookies.get("token");
        console.log(consultaCookie);

        const response = await axios.get(
          `http://localhost:3000/api/v1/curso/${id}`,
          { headers: { token: consultaCookie } }
        );
        if (response.data.imagen) {
          const imagenUrl = bufferToDataURL(response.data.imagen, "image/jpeg"); // Reemplaza 'image/jpeg' con el tipo MIME correcto
          setImagenPerfilSrc(imagenUrl);
        }
        setCurso(response.data);
      } catch (error) {
        console.error("Error al obtener Cursos:", error);
      }
    };

    obtenerCursos();
  }, [id]);

  const handleChange = (e) => {
    setCurso({
      ...curso,
      [e.target.name]: e.target.value,
    });
  };

  const handleGuardar = async (event) => {
    event.preventDefault();

    try {

      const formData = new FormData(); // Crear objeto FormData
  
          // Agregar campos de texto al FormData
          formData.append("titulo", curso.titulo);
          formData.append("descripcion", curso.descripcion);
          formData.append("resumen", curso.resumen);
          formData.append("horario", curso.horario);        
          formData.append("puntaje", curso.puntaje);
          formData.append("precio", curso.precio);

          
          if (curso.imagen) {
            formData.append("imagen", curso.imagen); // Agregar la imagen al FormData
          }
      console.log(curso); 
      const respuesta = await axios.patch(
        `http://localhost:3000/api/v1/curso/${id}`,
        formData, // Enviar el FormData en lugar de datosUsuario
            {
              headers: {
                "Content-Type": "multipart/form-data", // Asegúrate de establecer el tipo de contenido correcto para FormData
              },
            }
      );
<<<<<<< HEAD
      const datosActualizados = await respuesta.json();
=======

      const datosActualizados = respuesta.data;

>>>>>>> 99aa2d825d726453bbff098ecf929caa62eaa4e4
      setCurso(datosActualizados);
      navigate("/administrar-cursos");
    } catch (error) {
      console.error("Error al actualizar el curso:", error);
    }
  };

  const [imagenPerfilSrc, setImagenPerfilSrc] = useState("imagenPerfil");

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
        <h2 className="tirarAbajo">Editar Curso</h2>
<<<<<<< HEAD
        <form>
=======

        <form onSubmit={handleGuardar}>
>>>>>>> 99aa2d825d726453bbff098ecf929caa62eaa4e4
          <div className="container alMedio">
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
            <div className="row alMedio ">
              <div className="col-3 izquierda">
<<<<<<< HEAD
                <label>Título:</label>
=======
                <label>titulo:</label>
>>>>>>> 99aa2d825d726453bbff098ecf929caa62eaa4e4
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="titulo"
<<<<<<< HEAD
                  value={curso.nombre}
=======
                  value={curso.titulo}
>>>>>>> 99aa2d825d726453bbff098ecf929caa62eaa4e4
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
<<<<<<< HEAD
                  value={curso.fechaInicio}
=======
                  value={curso.resumen}
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
>>>>>>> 99aa2d825d726453bbff098ecf929caa62eaa4e4
                  onChange={handleChange}
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
