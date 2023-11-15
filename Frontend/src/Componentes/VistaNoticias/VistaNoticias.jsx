import React from "react";
import { MostradorDeNoticias } from "./MostradorNoticias/MostradorDeNoticias";
import { BuscadorDeNoticias } from "./BuscadorDeNoticias/BuscadorDeNoticias";
import { PortadaNoticias } from "./PortadaNoticias/PortadaNoticias";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const VistaNoticias = () => {

  return (
    <>
      <PortadaNoticias />
      <Row className="vista-noticias-container">
        <Col lg={9}>
          <BuscadorDeNoticias className="vista-noticias-item buscador" />
        </Col>
        <Col lg={3}>
          <MostradorDeNoticias className="vista-noticias-item mostrador" />
        </Col>
      </Row>
    </>
  );
};
