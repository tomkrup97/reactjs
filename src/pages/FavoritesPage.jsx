import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { Card } from 'react-bootstrap';


const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h2 style={{marginTop: "10px", marginLeft: "10px"}}>Tus Favoritos</h2>
      <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {favorites.map((band) => {
        return (
          <Card key={band.id} style={{ width: "15rem", margin: "10px" }}>
            <Card.Img variant="top" src={band.image} />
            <Card.Body>
              <Card.Title>{band.name}</Card.Title>
              <Card.Text>Tributo a <strong>{band.tribute}</strong></Card.Text>
              
            </Card.Body>
          </Card>
        );
      })}
    </div>
    </div>
  );
};

export default FavoritesPage;

