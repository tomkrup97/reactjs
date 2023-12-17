import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { getDocs, getFirestore, collection, getDoc, doc, query, where} from "firebase/firestore";


export const Home = () => {
  
  const [bands, setBands] = useState ([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, "bands");

    getDocs(collectionRef)
      .then((res) => {
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBands(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return <div>
    
    <ItemListContainer bands={bands} />
  </div>;
}