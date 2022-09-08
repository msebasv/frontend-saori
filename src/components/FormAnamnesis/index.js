import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "./index.scss";

const FormAnamnesis = () => {
  return (
    <Container>
      <Form>
        <Row>
          <Col md={12} lg={6}>
            <Form.Group className="mb-3" controlId="formQuery">
              <Form.Label>Motivo de consulta</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Label>Antecedentes</Form.Label>
            <Form.Group className="mb-3" controlId="formPersonal">
              <Form.Label>Personales</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Group className="mb-3" controlId="formFamily">
                <Form.Label>Familiares</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSurgical">
                <Form.Label>Quirúrgicos</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPathological">
                <Form.Label>Patológicos</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPharmacological">
                <Form.Label>Farmacológicos</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form.Group>
          </Col>
          <Col md={12} lg={6}>
            <Form.Group className="mb-3" controlId="formDiagnostics">
              <Form.Control type="text" placeholder="Tipo de consulta" />
              <Form.Control type="text" placeholder="Finalidad de consulta" />
              <Form.Control type="text" placeholder="Diagnóstico principal" />
              <Form.Control type="text" placeholder="Diagnóstico relacionado" />
              <Form.Control type="text" placeholder="Diagnóstico relacionado" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPharmacological">
              <Form.Label>Plan de tratamientos</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPharmacological">
              <Form.Label>Pronóstico</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPharmacological">
              <Button variant="secondary">Guardar</Button>
              <Button variant="secondary">Cancelar</Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FormAnamnesis;
