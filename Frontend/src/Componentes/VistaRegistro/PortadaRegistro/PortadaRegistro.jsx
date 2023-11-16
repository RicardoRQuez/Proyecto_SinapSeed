import React from "react";
import styles from "./PortadaRegistro.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormularioRegistro } from "../FormularioRegistro/FormularioRegistro.jsx";

export const PortadaRegistro = () => {
  return (
    <div className={`${styles.portadaRegistro} d-flex flex-column `}>
      <Row className="container-fluid texto-principal">
        <Col lg={1}></Col>
        <Col lg={5}>
          <h1 className="titulo-personalizado color">¡Registrate!</h1>
        </Col>
        <Col lg={5}>
          <p className={styles.parrafoPortadaRegistro}>
            ¡Regístrate y obtén acceso a todo nuestro{" "}
            <span className={styles.color}>contenido!</span> !
          </p>
        </Col>
        <Col lg={1}></Col>
      </Row>
      <Row className=" Formulario mt-5 container d-flex justify-content-center ">
      <Col lg={3}></Col>
        <Col lg={7}>
          <FormularioRegistro />
        </Col>
        
      </Row>
    </div>
  );
};
