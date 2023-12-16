import React from "react";
import { useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { BandFavSelector } from './BandFavSelector'

const ItemDetailContainer = ({ bands }) => {

    const { bandID } = useParams();

       
    return(
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "15rem",
            justifyContent: "space-around",
            color: "green",
          }}
        >
          {bands.map((band) => {
            return (
              <Card key={band.id} style={{ width: "18rem", margin: 20 }}>
                <Link to={`/item/${band.id}`}>
                  <Card.Img variant="top" src={band.image} />
                </Link>
                <Card.Body>
                  <BandFavSelector />
                  <Card.Title>{band.name}</Card.Title>
                  <Card.Text>Tributo a <strong>{band.tribute}</strong></Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        )
}

export default ItemDetailContainer;