import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";
import styles from "../ComponentComment/VerComentario.module.css"
import { jwtDecode } from "jwt-decode";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';


export const VerComentarios = ({ comentario }) => {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState({});
  const [editedComment, setEditedComment] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [usuarioActual, setUsuarioActual] = useState(null);

  useEffect(() => {
    const obtenerUsuarioActual = async () => {
      try {
        const consultaCookie = Cookies.get("token");

        if (consultaCookie) {
          const idToken = jwtDecode(consultaCookie).data._id;

          const response = await axios.get(
            `http://localhost:3000/api/v1/user/${idToken}`,
            {
              headers: { token: consultaCookie },
            }
          );
          console.log("usuarioActual", response);
          setUsuarioActual(response.data);
        } else {
          console.warn("No hay una cookie de token");
        }
      } catch (error) {
        console.error("Error al obtener el usuario actual:", error);
      }
    };

    obtenerUsuarioActual();
  }, []);

  const handleOpenModal = (commentId) => {
    setSelectedCommentId(commentId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCommentId("");
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const consultaCookie = Cookies.get("token");
      const response = await axios.delete(
        `http://localhost:3000/api/v1/comment/${commentId}`,
        {
          headers: { token: consultaCookie },
        }
      );
      console.log(response.data);
      // Actualizamos los comentarios quitando el comentario eliminado
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error("Error al eliminar el comentario:", error);
    }
  };

  const handleEditar = async (commentId) => {
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
      handleCloseModal();
      setEditedComment("");
      // Actualizar comentarios después de editar
      const updatedComments = comments.map((comment) => {
        if (comment._id === commentId) {
          return { ...comment, comentario: editedComment };
        }
        return comment;
      });
      setComments(updatedComments);
    } catch (error) {
      console.error("Error al editar el comentario:", error);
    }
  };

  useEffect(() => {
    const obtenerComentarios = async () => {
      try {
        const consultaCookie = Cookies.get("token");
        if (consultaCookie) {
          const response = await axios.get(
            `http://localhost:3000/api/v1/comment`,
            {
              headers: { token: consultaCookie },
            }
          );
          setComments(response.data);
        } else {
          console.warn("No hay una cookie de token");
        }
      } catch (error) {
        console.error("Error al obtener Comentarios:", error);
      }
    };
    obtenerComentarios();
  }, []);

  useEffect(() => {
    const buscarUsuarios = async () => {
      try {
        const consultaCookie = Cookies.get("token");
        const userIds = comments.map((comment) => comment.userId);
        const uniqueUserIds = [...new Set(userIds)];

        const usersData = await Promise.all(
          uniqueUserIds.map(async (userId) => {
            const response = await axios.get(
              `http://localhost:3000/api/v1/user/${userId}`,
              {
                headers: { token: consultaCookie },
              }
            );
            return response.data;
          })
        );
        const usersObj = {};
        usersData.forEach((user) => {
          usersObj[user._id] = user;
        });
        setUsers(usersObj);
      } catch (error) {
        console.error("Error al obtener los detalles de los usuarios:", error);
      }
    };
    buscarUsuarios();
  }, [comments]);

  console.log("hola", usuarioActual);
  console.log("vamos a imprimir", users);

  return (
<div className="comments-container">
      <Container>
        <Row>
          <Col>
            {comments && comments.length > 0 && <h2>Comentarios:</h2>}
            <br />
            {comments.map((comment, index) => (
              <Card key={index} className="mb-3">
                <Card.Body>
                  <Card.Title className={styles.nombreComentario}>{users[comment.userId]?.nombre}</Card.Title>
                  <Card.Text>{comment.comentario}</Card.Text>
                  {usuarioActual &&
                    (usuarioActual._id === comment.userId ||
                      usuarioActual.administrador) && (
                      <div className="comment-buttons">
                        <button onClick={() => handleOpenModal(comment._id)}>
                          Editar
                        </button>
                        <button onClick={() => handleDeleteComment(comment._id)}>
                          Borrar
                        </button>
                      </div>
                    )}
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Comentario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
            placeholder="Editar comentario"
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => handleEditar(selectedCommentId)}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
