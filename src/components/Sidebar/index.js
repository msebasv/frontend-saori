import React from "react";

import { Nav } from "react-bootstrap";

import CardProfile from "../CardProfile";

import { Link } from "react-router-dom";

import "./index.scss";

const Sidebar = () => {
  return (
    <div>
      <CardProfile />
      <Nav defaultActiveKey="/patients" className="flex-column container-nav">
        <Nav.Link as={Link} to="/patients">
          Pacientes
        </Nav.Link>
        <Nav.Link as={Link} to="/management">
          Administración
        </Nav.Link>
        <Nav.Link as={Link} to="rips">
          Rips
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
