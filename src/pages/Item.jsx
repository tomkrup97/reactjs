import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

import BandFavSelector from '../BandFavSelector/BandFavSelector';
import { Link, useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { Card } from 'react-bootstrap';


export const Item = ({ bands }) => {
  
  return(
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {bands.map((band) => {
        return (
          <Card key={band.id} style={{ width: "15rem", margin: "10px" }}>
            <Link to={`/item/${band.id}`}>
              <Card.Img variant="top" src={band.image} />
            </Link>
            <Card.Body>
              <Card.Title>{band.name}</Card.Title>
              <Card.Text>Tributo a <strong>{band.tribute}</strong></Card.Text>
              <BandFavSelector />
            </Card.Body>
          </Card>
        );
      })}
    </div>
    )
};