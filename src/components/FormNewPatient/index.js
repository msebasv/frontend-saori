import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "./index.scss";

const FormNewPatient = () => {
  return (
    <Container>
      <Form className="form-new-patient">
        <Row>
          <Col md={12} lg={6}>
            <Form.Group className="mb-3" controlId="formPatient">
              <Form.Label>Datos del paciente</Form.Label>
              <Form.Control type="text" placeholder="Nombres" />
              <Form.Control type="text" placeholder="Apellidos" />
              <Form.Select aria-label="typeDocument">
                <option>Tipo de Documento</option>
                <option value="1">Cedula de Ciudadanía</option>
                <option value="2">Cedula Extranjería</option>
              </Form.Select>
              <Form.Control type="number" placeholder="No. Documento" />
              <Form.Select aria-label="genre">
                <option>Género</option>
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
              </Form.Select>
              <Form.Control type="date" placeholder="Fecha de nacimiento" />
              <Form.Control type="text" placeholder="Estado Civil" />
              <Form.Control type="text" placeholder="EPS" />
            </Form.Group>
          </Col>
          <Col md={12} lg={6}>
            <Form.Group className="mb-3" controlId="formContact">
              <Form.Label>Datos de contacto</Form.Label>
              <Form.Control type="text" placeholder="Dirección" />
              <Form.Control type="text" placeholder="Localidad/Barrio" />
              <Form.Control type="number" placeholder="Celular" />
              <Form.Control type="email" placeholder="Correo" />
            </Form.Group>
          </Col>
          <Col md={12} lg={6}>
            <Form.Group className="mb-3" controlId="formResponsible">
              <Form.Label>Datos de acompañante/responsable</Form.Label>
              <Form.Control type="text" placeholder="Acompañante" />
              <Form.Control type="text" placeholder="Responsable" />
              <Form.Control type="text" placeholder="Parentesco" />
              <Form.Control type="number" placeholder="Teléfono" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="secondary">Guardar Paciente</Button>
      </Form>
    </Container>
  );
};

export default FormNewPatient;
