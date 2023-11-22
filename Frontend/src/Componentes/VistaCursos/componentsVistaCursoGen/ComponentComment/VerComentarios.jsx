import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import styles from "../../../VistaForo/components/Comments.module.css";
import Cookies from "js-cookie";
import axios from "axios";

export const VerComentarios = ({ comentario }) => {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});
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
          console.log("idComentario", response.data);
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
    const buscarUsuarioComentario = async () => {
      try {
        const consultaCookie = Cookies.get("token");
        let userId;

        if (Array.isArray(comments) && comments.length > 0) {
          userId = comments[0].userId;
          const response = await axios.get(
            `http://localhost:3000/api/v1/user/${userId}`,
            {
              headers: { token: consultaCookie },
            }
          );
          setUser(response.data);
        } else {
          console.log(
            "El objeto comments no contiene elementos o no es un array."
          );
          return;
        }
      } catch (error) {
        console.error("Error al obtener los detalles del usuario:", error);
      }
    };

    buscarUsuarioComentario();
  }, []);
  console.log('prueba', comments)
  return (
    <Card>
      <Card.Header>
        <h1 className={styles["comments-titleChoto"]}>Comentarios</h1>
      </Card.Header>
      <Card.Body>
        <div className={styles.comments}>
          <strong>{user.nombre}</strong> {comments}
        </div>
        <br />
        <div className={styles["published-avatar-container"]}></div>
      </Card.Body>
    </Card>
  );
};
