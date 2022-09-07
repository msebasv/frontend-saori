import React from "react";
import { Card } from "react-bootstrap";
import profileImage from "../../assets/images/profileImage.jpg";

import "./index.scss";

const CardProfile = () => {
  return (
    <div className="container-card-profile">
      <Card className="card-profile">
        <Card.Img src={profileImage} className="image-card-profile"></Card.Img>
        <Card.Body className="card-body-profile">
          <Card.Title>Dr. Persona</Card.Title>
          <Card.Text>123456 </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProfile;
