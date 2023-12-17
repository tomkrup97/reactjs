import React from "react";
import { useAllBandsByFilter } from "../hooks/CategoryHook";
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  const { bands } = useAllBandsByFilter("bands", categoryId, "category");


  return <ItemListContainer bands={bands} />;
};

export default Category;
