import React from 'react';
import img from '../image/cursox.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './TemasRelacionados.module.css'

const TemasRelacionados = () => {
  return (
    <div className={styles['card-container']}>
       <Card style={{ width: '26rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  size="lg" className={styles['primary-button']}>
       Temas Relacionados
      </Button>
        <br />
        <Button  size="lg" className={styles['primary-button']}>
      Mas Populares
      </Button>
        <br />
        <Button  size="lg" className={styles['primary-button']}>
        Lo Ultimo
      </Button>
      </Card.Body>
    </Card>
  </div>

  );
};

export default TemasRelacionados;
