import React, {useState} from "react";
import "./ComponenteCurso.css";
import muestra from "../../muestra.jpeg";
import { NavLink } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap"; 
import Cookies from "js-cookie";
import axios from 'axios'

export const ComponenteCurso = ({
  imagen,
  titulo,
  descripcion,
  id,
  onClickVerOcultarComentarios,
  usuarioNombre,
  usuarioImagen,
  userId,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [comentario, setComentario] = useState("");
  

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setComentario(""); // Limpiar el comentario al cerrar el modal
  };

  const handleComentar = async () => {
    try {
      const consultaCookie = Cookies.get("token");
      const response = await axios.post(
        `http://localhost:3000/api/v1/comment/${id}/${userId}`, // Reemplaza la URL con tu endpoint
        {
          comentario: comentario,
        },
        {
          headers: { token: consultaCookie },
        }
      );
  
      console.log("Respuesta del servidor:", response.data);
  
      // Lógica adicional después de crear el comentario (actualizar estado, etc.)
  
      // Cierra el modal y reinicia el estado del nuevo comentario
      closeModal();
      setComentario("");
    } catch (error) {
      console.error("Error al crear el comentario:", error);
    }
  };
  
  return (
    <section className="containerCursoGen">
      <div className="row">
        <div className="col-2">
          <img
            src={imagen}
            alt="imagen de muestra"
            className="imagenCursoGen"
          />
        </div>
        <div className="col-10">
          <h4 className="h4Luis">{titulo}</h4>
          <p className="parrafoLuis">{descripcion}</p>
          <NavLink className="ingresarCursoGen" to={`/cursos/${id}`}>
            <button type="submit" className="botonVermasCursoGen">
              Ver más
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
