import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "./index.scss";

const FormAnamnesis = ({ disabled, onHide }) => {
  return (
    <Container>
      <Form className="form-anamnesis">
        <Row>
          <Col md={12} lg={6}>
            <Form.Group className="mb-3" controlId="formQuery">
              <Form.Label>Motivo de consulta</Form.Label>
              <Form.Control as="textarea" rows={3} disabled={disabled} />
            </Form.Group>
            <Form.Label className="title-record">Antecedentes</Form.Label>
            <Form.Group className="mb-3" controlId="formPersonal">
              <Form.Label>Personales</Form.Label>
              <Form.Control type="text" disabled={disabled} />
            </Form.Group>
            <Form.Group>
              <Form.Group className="mb-3" controlId="formFamily">
                <Form.Label>Familiares</Form.Label>
                <Form.Control type="text" disabled={disabled} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSurgical">
                <Form.Label>Quirúrgicos</Form.Label>
                <Form.Control type="text" disabled={disabled} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPathological">
                <Form.Label>Patológicos</Form.Label>
                <Form.Control type="text" disabled={disabled} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPharmacological">
                <Form.Label>Farmacológicos</Form.Label>
                <Form.Control type="text" disabled={disabled} />
              </Form.Group>
            </Form.Group>
          </Col>
          <Col md={12} lg={6} className="col-form-diagnostics">
            <Form.Group className="mb-3" controlId="formDiagnostics">
              <Form.Control
                type="text"
                placeholder="Tipo de consulta"
                disabled={disabled}
              />
              <Form.Control
                type="text"
                placeholder="Finalidad de consulta"
                disabled={disabled}
              />
              <Form.Control
                type="text"
                placeholder="Diagnóstico principal"
                disabled={disabled}
              />
              <Form.Control
                type="text"
                placeholder="Diagnóstico relacionado"
                disabled={disabled}
              />
              <Form.Control
                type="text"
                placeholder="Diagnóstico relacionado"
                disabled={disabled}
              />
              <Form.Select aria-label="cause" disabled={disabled}>
                <option>Causa Externa</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Form.Select>
              <Form.Select aria-label="type" disabled={disabled}>
                <option>Tipo</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPharmacological">
              <Form.Label>Plan de tratamientos</Form.Label>
              <Form.Control type="text" disabled={disabled} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPharmacological">
              <Form.Label>Pronóstico</Form.Label>
              <Form.Control type="text" disabled={disabled} />
            </Form.Group>
            <Form.Group
              className="mb-3 form-group-button"
              controlId="formPharmacological"
            >
              <Button variant="secondary" disabled={disabled}>
                Guardar
              </Button>
              <Button variant="secondary" onClick={onHide}>
                Cancelar
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FormAnamnesis;
