import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

import ModalGeneric from "../../components/ModalGeneric";
import FormNewPatient from "../../components/FormNewPatient";
import TablePatients from "../../components/TablePatients";

import "./index.scss";

const Patients = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-patients">
      <div className="container-section-search-new">
        <Form.Group className="input-search-document-container">
          <Form.Control
            id="inputSearchDocument"
            type="text"
            placeholder="No. Documento"
            className="input-search-document"
          />
          <AiOutlineSearch className="icon-search-document" />
        </Form.Group>
        <Form.Group className="button-new-patiente-container">
          <Button
            variant="secondary"
            className="button-new-patient"
            onClick={handleShow}
          >
            Nuevo Paciente
          </Button>
          <ModalGeneric show={show} onHide={handleClose} title="Nuevo Paciente">
            <FormNewPatient />
          </ModalGeneric>
        </Form.Group>
      </div>
      <div className="container-section-table-patients">
        <TablePatients />
      </div>
    </div>
  );
};

export default Patients;
