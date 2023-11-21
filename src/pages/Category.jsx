import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Category = () => {
    const [products, setProducts] = useState ([]);

    const { categoryId } = useParams();

    useEffect(() => {
      axios
        .get(`https://dummyjson.com/products/category/${categoryId}`)
        .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => console.log(error));
    }, [categoryId]);
    
    return <div>
      
      <ItemListContainer products={products} />
    </div>;
}

export default Category;