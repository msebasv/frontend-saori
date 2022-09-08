import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

import ModalGeneric from "../ModalGeneric";
import FormAnamnesis from "../FormAnamnesis";

import "./index.scss";

const TableAnamnesis = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-table-anamnesis">
      <Table bordered size="md">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Médico</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22/03/2021</td>
            <td>Dr. Patiño</td>
            <td onClick={handleShow}>Ver</td>
          </tr>
          <tr>
            <td>22/03/2022</td>
            <td>Dr. Patiño</td>
            <td>Ver</td>
          </tr>
        </tbody>
        <ModalGeneric show={show} onHide={handleClose} title="Anamnesis">
          <FormAnamnesis />
        </ModalGeneric>
      </Table>
    </div>
  );
};

export default TableAnamnesis;
