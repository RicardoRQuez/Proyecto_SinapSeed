import React, { useState } from "react";
import "./ComponenteCurso.css";
import Cookies from "js-cookie";
import axios from "axios";
import { Modal as BootstrapModal, Button, Form  } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ComponenteComentarios = ({
  nombre,
  comentario,
  imagen,
  createdAt,
  usuarioActualId,
  userId,
  usuarioActual,
  admin,
  commentId,
}) => {
 const navigate = useNavigate()
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editedComment, setEditedComment] = useState(comentario);
  

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleEditar = async () => {
    try {
      const consultaCookie = Cookies.get("token");
      const response = await axios.put(
        `http://localhost:3000/api/v1/comment/${commentId}`, 
        {
          comentario: editedComment,
        },
        {
          headers: { token: consultaCookie },
        }
      );
  
      console.log("Respuesta del servidor:", response.data);
  
      // Lógica adicional después de editar el comentario (actualizar estado, etc.)
  
      // Cierra el modal y reinicia el estado del comentario editado
      closeModal();
      setEditedComment("");
    } catch (error) {
      console.error("Error al editar el comentario:", error);
    }
  };
  
  const handleDeleteComment = async () => {
    try {
      const consultaCookie = Cookies.get("token");
      const response = await axios.delete(
        `http://localhost:3000/api/v1/comment/${commentId}`,
        {
          headers: { token: consultaCookie },
        }
      );
      console.log(response.data);

      closeModal();
      navigate ("/cursosGen")
    } catch (error) {
      console.error("Error al eliminar el comentario:", error);
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
          <h4 className="h4Luis">{nombre}</h4>
          <p className="parrafoLuis">{comentario}</p>
          <p className="parrafoLuis">{createdAt}</p>

          {usuarioActual && (usuarioActualId === userId || admin) && (
            <>
              <button
                type="submit"
                className="botonVermasCursoGen"
                onClick={openModal}
              >
                Eliminar
              </button>
              <button type="submit" className="botonComentar" onClick={openModal}>
                Editar
              </button>
            </>
          )}
        </div>
      </div>

      <BootstrapModal show={modalIsOpen} onHide={closeModal}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>Confirmar Eliminación</BootstrapModal.Title>
        </BootstrapModal.Header>

        <BootstrapModal.Body>
          <p>¿Estás seguro de que deseas eliminar este comentario?</p>
        </BootstrapModal.Body>

        <BootstrapModal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleDeleteComment}>
            Confirmar
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
      <BootstrapModal show={modalIsOpen} onHide={closeModal}>
  <BootstrapModal.Header closeButton>
    <BootstrapModal.Title>Editar Comentario</BootstrapModal.Title>
  </BootstrapModal.Header>

  <BootstrapModal.Body>
    <Form>
      <Form.Group controlId="formEditComment">
        <Form.Label>Edita tu comentario:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={editedComment}
          onChange={(e) => setEditedComment(e.target.value)}
        />
      </Form.Group>
    </Form>
  </BootstrapModal.Body>

  <BootstrapModal.Footer>
    <Button variant="secondary" onClick={closeModal}>
      Cancelar
    </Button>
    <Button variant="primary" onClick={handleEditar}>
      Confirmar Edición
    </Button>
  </BootstrapModal.Footer>
</BootstrapModal>
    </section>
  );
};
