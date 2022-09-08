import React, { useState } from "react";

import { Button } from "react-bootstrap";

import TableAnamnesis from "../TableAnamnesis";
import ModalGeneric from "../ModalGeneric";

import "./index.scss";

const TabAnamnesis = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-tab-anamnesis">
      <TableAnamnesis />
      <Button className="button-new-anamnesis" onClick={handleShow}>
        Nueva
      </Button>
      <ModalGeneric
        show={show}
        onHide={handleClose}
        title="Nueva Anamnesis"
      ></ModalGeneric>
    </div>
  );
};

export default TabAnamnesis;
