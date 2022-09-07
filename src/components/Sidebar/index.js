import React from "react";

import { Nav } from "react-bootstrap";

import CardProfile from "../CardProfile";

import { Link } from "react-router-dom";

import "./index.scss";

const Sidebar = () => {
  return (
    <div>
      <CardProfile />
      <Nav className="flex-column container-nav">
        <Nav.Link as={Link} eventKey="/patients" to="/patients">
          Pacientes
        </Nav.Link>
        <Nav.Link as={Link} eventKey="/management" to="/management">
          Administración
        </Nav.Link>
        <Nav.Link as={Link} eventKey="/rips" to="rips">
          Rips
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
