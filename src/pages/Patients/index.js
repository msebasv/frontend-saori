import React from "react";

import { Form, Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

import TablePatients from "../../components/TablePatients";

import "./index.scss";

const Patients = () => {
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
            type="submit"
            className="button-new-patient"
          >
            Nuevo Paciente
          </Button>
        </Form.Group>
      </div>
      <div className="container-section-table-patients">
        <TablePatients />
      </div>
    </div>
  );
};

export default Patients;
