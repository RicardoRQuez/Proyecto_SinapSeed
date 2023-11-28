import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";
import styles from "../ComponentComment/VerComentario.module.css";
import { jwtDecode } from "jwt-decode";
import { Row, Col, Card, Container } from "react-bootstrap";

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

  const bufferToDataURL = (buffer, mimeType) => {
    if (!buffer || !buffer.data) {
      return null; // O algún valor predeterminado si prefieres
    }

    const arrayBufferView = new Uint8Array(buffer.data);
    const blob = new Blob([arrayBufferView], { type: mimeType });
    const urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(blob);
  };
  return (
    <div className="comments-container">
      <Container>
        <Row>
          <Col>
            {comments && comments.length > 0 && (
              <Card className={styles.tituloComentario}>
                Participa en nuestro foro comentando los cursos
              </Card>
            )}
            {comments.map((comment, index) => (
              <Card key={index} className="mb-3">
                <Card.Body className={styles.bordeComentario}>
                  {usuarioActual && usuarioActual.imagen && (
                    <img
                      src={bufferToDataURL(comment.imagen, "image/jpeg")}
                      className={styles.avatar}
                      alt="Usuario sin imagen"
                      width="70px"
                      height="70px"
                    />
                  )}
                  <Card.Title className={styles.nombreComentario}>
                    {users[comment.userId]?.nombre}
                  </Card.Title>
                  <Card.Text className={styles.comentarioForo}>
                    {comment.comentario}
                  </Card.Text>
                  <p>{comment.createdAt}</p>
                  {usuarioActual &&
                    (usuarioActual._id === comment.userId ||
                      usuarioActual.administrador) && (
                      <div className="comment-buttons">
                        <Button
                          className={styles.botonesComentario}
                          variant="primary"
                          onClick={() => handleOpenModal(comment._id)}
                        >
                          Editar
                        </Button>
                        <Button
                          className={styles.botonesComentario}
                          variant="primary"
                          onClick={() => handleDeleteComment(comment._id)}
                        >
                          Borrar
                        </Button>
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
          <Button
            variant="primary"
            className={styles.botonesComentario}
            onClick={handleCloseModal}
          >
            Cancelar
          </Button>
          <Button
            variant="primary"
            className={styles.botonesComentario}
            onClick={() => handleEditar(selectedCommentId)}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
