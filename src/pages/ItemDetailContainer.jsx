import React from "react";
import Card from "react-bootstrap/Card";

export const ItemDetailContainer = ({ band = [] }) => {
  return (
    <Card key={band.id} style={{ width: "18rem", margin: 20 }}>
      <Card.Img variant="top" src={band.image} />
      <Card.Body>
        <Card.Title>{band.name}</Card.Title>
        <Card.Text>{band.tribute}</Card.Text>
      </Card.Body>
    </Card>
  );
};