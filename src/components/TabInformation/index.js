import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./index.scss";

const TabInformation = () => {
  return (
    <Container className="container-tab-information">
      <Row>
        <Col md={12} lg={6}>
          <h6>Datos Personales</h6>
          <p>Documento:</p>
          <p>Edad:</p>
          <p>Género:</p>
          <p>Estado Civil: </p>
          <p>EPS: </p>
          <p>Dirección: </p>
          <p>Teléfono: </p>
          <p>Correo: </p>
        </Col>
        <Col md={6} lg={6}>
          <h6>Enfermedades:</h6>
          <p>Antecedentes:</p>
          <p>Alergias:</p>
        </Col>
        <Col md={12} lg={6}>
          <h6>Datos de acompañante/responsable</h6>
          <p>Responsable:</p>
          <p>Acompañante:</p>
          <p>Teléfono:</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TabInformation;
