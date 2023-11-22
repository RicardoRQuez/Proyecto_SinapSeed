import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";
import styles from '../../../VistaForo/components/Comments.module.css'


export const VerComentarios = ({ comentario }) => {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState({});
  const [editedComment, setEditedComment] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState("");
  const [showModal, setShowModal] = useState(false);

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
          setComments(comments.filter(comment => comment._id !== commentId));
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
          const userIds = comments.map(comment => comment.userId);
          const uniqueUserIds = [...new Set(userIds)];
  
          const usersData = await Promise.all(uniqueUserIds.map(async userId => {
            const response = await axios.get(
              `http://localhost:3000/api/v1/user/${userId}`,
              {
                headers: { token: consultaCookie },
              }
            );
            return response.data;
          }));
          const usersObj = {};
          usersData.forEach(user => {
            usersObj[user._id] = user;
          });
          setUsers(usersObj);
        } catch (error) {
          console.error("Error al obtener los detalles de los usuarios:", error);
        }
      };
      buscarUsuarios();
    }, [comments]);
  
  return (
    <div className="comments-container">
    {comments.map((comment, index) => (
      <div key={index} className="comment">
        <strong>{users[comment.userId]?.nombre}</strong>: {comment.comentario}
        <div className="comment-buttons">
          <button onClick={() => handleOpenModal(comment._id)}>Editar</button>
          <button onClick={() => handleDeleteComment(comment._id)}>Borrar</button>
        </div>
      </div>
    ))}
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
        <Button variant="primary" onClick={() => handleEditar(selectedCommentId)}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
);
};