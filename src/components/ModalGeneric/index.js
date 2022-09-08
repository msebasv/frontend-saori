import React from "react";

import { Modal, Button } from "react-bootstrap";

import "./index.scss";

const ModalGeneric = ({ children, show, onHide, title }) => {
  return (
    <Modal show={show} onHide={onHide} backdrop="static" fullscreen={true}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default ModalGeneric;
