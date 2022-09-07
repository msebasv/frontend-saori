import React from "react";

import { Modal, Button } from "react-bootstrap";

import "./index.scss";

const ModalGeneric = ({ children, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} backdrop="static" fullscreen={true}>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo Paciente</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default ModalGeneric;
