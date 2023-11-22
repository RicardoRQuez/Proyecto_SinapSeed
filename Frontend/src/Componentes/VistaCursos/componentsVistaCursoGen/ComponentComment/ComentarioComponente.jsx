import React, {useState, useEffect} from "react";
import { Card } from "react-bootstrap";
import styles from '../../../VistaForo/components/Comments.module.css';
import Cookies from "js-cookie";
import axios from 'axios';
import { VerComentarios } from "./VerComentarios";

export  const Comentario=({imagenUsuario,nombreUsario,cursoId,usuarioActualId})=> {
  const [comments, setComments] = useState([]);


        const handleComentar = async () => {
            try {
              console.log('antes del key',cursoId)
              const consultaCookie = Cookies.get("token");
              const response = await axios.post(
                `http://localhost:3000/api/v1/comment/${cursoId}/${usuarioActualId}`, // Reemplaza la URL con tu endpoint
                {
                  comments: comentario,
                },
                {
                  headers: { token: consultaCookie },
                }
              );
          
              console.log("Respuesta del servidor:", response.data);
              setComments([...comments, response.data]);
            } catch (error) {
              console.error("Error al crear el comentario:", error);
            }
        };

    
        return (
         <>
          <Card>
           <h1 className ={`card-title ${styles['card-title']}`}>Publicar un Comentario</h1>
          <Card.Body>
          
            <div className={styles['comment-form']}>
                <div className="col-6">
                    <img src={imagenUsuario} alt="Avatar" className={styles.avatar} width="70px" height="70px" />
                    <br />
                    <p>{nombreUsario}</p>
                  </div>
                  <div className="col-8">
                    <textarea
                      placeholder="Escribe tu comentario"
                      value={comments}
                      onChange={(e) => setComments(e.target.value)} 
                      className={styles.textarea}
                    ></textarea>
                    <button onClick={handleComentar} className={styles.buttonChoto}>Publicar Comentario</button>
                  </div>
                </div>
                <br />
               
          </Card.Body>
          </Card>
          <VerComentarios
          comentario={comments.comentario}
          />
          </>  
            
         
        );
      }
    
      

