
import image from '../image/estudiante_estrellaGen.jpeg'
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import styles from './Comments.module.css';

function CommentComponent() {
  const [author, setAuthor] = useState(''); 
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleCommentChange = (e) => { 
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (author && comment) {
      const newComment = { author, comment };
      setComments([...comments, newComment]);
      setAuthor('');
      setComment('');
    }
  };

  return (
   <>
    <Card>
     <h1 className ={`card-title ${styles['card-title']}`}>Publicar un Comentario</h1>
    <Card.Body>
    
      <div className={styles['comment-form']}>
          <div className="col-6">
              <img src={image} alt="Avatar" className={styles.avatar} width="70px" height="70px" />
              <br />
              <input
                type="text"
                placeholder="Tu nombre"
                value={author}
                onChange={handleAuthorChange}
              />
            </div>
            <div className="col-8">
              <textarea
                placeholder="Escribe tu comentario"
                value={comment}
                onChange={handleCommentChange}
                className={styles.textarea}
              ></textarea>
              <button onClick={handleCommentSubmit} className={styles.buttonChoto}>Publicar Comentario</button>
            </div>
          </div>
          <br />
         
    </Card.Body>
    </Card>
    <Card>
      <Card.Header><h1 className={styles['comments-titleChoto']}>Comentarios</h1></Card.Header>
      <Card.Body>
      <div className={styles.comments}>
              <ul id="comment-list">
                {comments.map((c, index) => (
                  <li key={index}>
                    <strong>{c.author}:</strong> {c.comment}
                  </li>
                ))}
              </ul>
            </div>
            <br />
            <div className={styles['published-avatar-container']}>
            </div>
      </Card.Body>
    </Card>
    </>   
      
   
  );
}

export default CommentComponent;
