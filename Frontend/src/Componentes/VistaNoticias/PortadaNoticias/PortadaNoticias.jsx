import React from "react";
import "./PortadaNoticias.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const PortadaNoticias = () => {
  return (
    <> 
    <div className="container-fluid portada-image w-100 d-flex">
      <Row className=" container-fluid texto-principal">
        <Col lg={7}>
          <h1 className="titulo-personalizado">¡<span className="color">Cultiva</span>  tu Conocimiento!</h1>
        </Col>
        <Col lg={5}>
          <p className="parrafoPortada">
            ¡Mantente informado y prepárate para el <span className="color">futuro</span> !
          </p>
        </Col>
      </Row>
      </div>
      </>
  );
};
