import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AgregarCursos.css";
import imagenPerfil from "../../assets/resources/logo_generation.jpg";

export const AgregarCurso = () => {
  const navigate = useNavigate();
  const [curso, setCurso] = useState({
    titulo: "",
    descripcion: "",
    resumen: "",
    imagen: "",
    precio: "",
    puntaje: "",
  });

  const handleChange = (e) => {
    setCurso({
      ...curso,
      [e.target.name]: e.target.value,
    });
  };

  const handleGuardar = async () => {
    try {
      const respuesta = await fetch(`http://localhost:3000/api/v1/curso`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(curso),
      });

      if (!respuesta.ok) {
        const errorData = await respuesta.json();
        throw new Error(`Error al agregar el curso: ${respuesta.status} ${respuesta.statusText}. Detalles: ${errorData.message}`);
      }

      const nuevoCurso = await respuesta.json();

      // Hacer algo con el nuevoCurso si es necesario

      navigate("/administrar-cursos");
    } catch (error) {
      console.error("Error al agregar el curso:", error);
    }
  };

  const [imagenPerfilSrc, setImagenPerfilSrc] = useState(imagenPerfil);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagenPerfilSrc(reader.result);
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

        <form>



        <section className="row alMedio">
        <img src={imagenPerfilSrc} alt="imagendePerfil" className="imagenPerfil" />
        </section>
        <section className="row alMedio">
        <div className="input-group">
          <label className="input-group-text">
            Subir
          </label>

          
          <input
            type="file"
            className="form-control"
            id="inputGroupFile01"
            name="titulo"
            value={curso.imagen}
            imagen={bufferToDataURL(curso.imagen, 'image/jpeg')}
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
                <label>Puntaje:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="puntaje"
                  value={curso.puntaje}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label></label>
              </div>
              <div className="col-3 izquierda">
                <button type="button" onClick={handleGuardar }>
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
