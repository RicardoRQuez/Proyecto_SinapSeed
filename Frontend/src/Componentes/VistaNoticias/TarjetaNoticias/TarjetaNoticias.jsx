import React from 'react';
import Card from 'react-bootstrap/Card';
import './TarjetaNoticias.css'

export const TarjetaNoticias = ({ titulo, subtitulo, descripcion, enlace }) => {
    return (
      <div className="CardContainer">
        <Card className="Card">
          <Card.Body>
            <Card.Title className="Title">{titulo}</Card.Title>
            <Card.Subtitle className="Subtitle">{subtitulo}</Card.Subtitle>
            <Card.Text className="Description">{descripcion}</Card.Text>
            <Card.Link href={enlace} className="Link">
              Ver más
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  };
