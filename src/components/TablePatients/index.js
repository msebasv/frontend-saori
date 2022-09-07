import React from "react";

import { Table } from "react-bootstrap";

import "./index.scss";

const TablePatients = () => {
  return (
    <div className="container-table-patients">
      <Table bordered size="md">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>No. Documento</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ada Lovelace</td>
            <td>123456789</td>
            <td>Ver</td>
          </tr>
          <tr>
            <td>Grace Hopper</td>
            <td>987654321</td>
            <td>Ver</td>
          </tr>
          <tr>
            <td>Margaret Hamilton</td>
            <td>5678901234</td>
            <td>Ver</td>
          </tr>
          <tr>
            <td>Joan Clarke</td>
            <td>1234056789</td>
            <td>Ver</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TablePatients;
