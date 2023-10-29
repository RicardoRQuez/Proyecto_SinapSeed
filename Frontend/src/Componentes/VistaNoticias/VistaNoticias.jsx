import React from 'react';
import { MostradorDeNoticias } from './MostradorNoticias/MostradorDeNoticias';
import { BuscadorDeNoticias } from './BuscadorDeNoticias/BuscadorDeNoticias';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './VistaNoticias.css';

export const VistaNoticias = () => {
  return (
    <Row className="vista-noticias-container">
      <Col lg={10}>
      <BuscadorDeNoticias className="vista-noticias-item buscador" />
      </Col>
      <Col lg={2}>
      <MostradorDeNoticias className="vista-noticias-item mostrador" />
      </Col>
    </Row>
  );
}

