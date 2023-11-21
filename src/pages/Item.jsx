import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';


export const Item = () => {
  
  const [product, setProduct] = useState ({});

  useEffect (() => {
    axios
      .get('https://dummyjson.com/products/1')
      .then((res) => {
      setProduct(res.data);
    })
    .catch((error) => console.log(error));
  }, []);

  return <div>
    
    <ItemListContainer product={product} />
  </div>;
}