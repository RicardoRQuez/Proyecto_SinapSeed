import React from "react";
import styles from "./VistaCursos.module.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


export const CursoComponent = ({titulo, resumen, descripcion, imagen, precio, puntaje }) => {
 



  return (
    <>
     
      <div className={`${styles.portadaCursos} d-flex`}></div>
      
      <div className="row justify-content-center align-items-center g-2">
        {/* Primera columna */}
        <div className={`${styles.columnaUno} col-5`}>
          {/* Primera fila en la primera columna */}
          <br />

            <Card className={`${styles.tarjetita}`}>
      <Card.Body>
        <Card.Title className={`${styles.tituloGratis}`}>{titulo}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" >{resumen}</Card.Subtitle>
            <Card.Text>
          {descripcion}
          </Card.Text>
          </Card.Body>
          </Card>
      
        </div>
        <div className="col-5 mt-5">
        <Card.Img variant="top" src={imagen}   className={`${styles.imagenCursos} ${styles.espaciadoPrecio}`}/>

        </div>
      </div>



      <div className="row justify-content-center align-items-center g-2">
      <div className="col">
            <ListGroup>
            <ListGroup.Item className={styles.tituloPrecio}><span className={styles.precio}>Precio:</span> {precio}</ListGroup.Item>
            </ListGroup>
            </div>

            <div className="col">
      
            <ListGroup>
      <ListGroup.Item className={styles.tituloPrecio}><span className={styles.precio}>Puntaje:</span> {puntaje}</ListGroup.Item>
    </ListGroup>
          </div>
          </div>

      <br />
    </>
  );
};


