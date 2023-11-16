import React from 'react';
import image from '../image/cursos_jovenes.jpg'
import styles from './ImageContainer.module.css'
import Card from 'react-bootstrap/Card';


const ImageContainer = () => {
    return (
    <>
      <Card>
        <img className={styles['image-container']}  src={image}  />
        <Card.Body className={styles.Border}>
          <Card.Text className={`card-title ${styles['card-title']}`} >
          Foro SinapSeed
          </Card.Text>
        </Card.Body>
      </Card>
    </>

    );
}

export default ImageContainer;
