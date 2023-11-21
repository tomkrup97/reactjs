import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import '../index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';


export const Home = () => {
  
  const [products, setProducts] = useState ([]);

  useEffect (() => {
    axios
      .get('https://dummyjson.com/products/?limit=10')
      .then((res) => {
      setProducts(res.data.products);
    })
    .catch((error) => console.log(error));
  }, []);

  return <div>
    
    <ItemListContainer products={products} />
  </div>;
}