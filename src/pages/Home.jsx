import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import {collection, getDocs, getFirestore} from 'firebase/firestore';


export const Home = () => {
  
  const [bands, setBands] = useState ([]);

  useEffect (() => {
    const db = getFirestore();
    const bandsCollection = collection(db, 'bands');

    getDocs(bandsCollection).then((snapshot) => {
      setBands(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }).catch(() => SpeechSynthesisErrorEvent(true)).finally(() => setLoading(false));
  }, []);

  console.log(bands);
  return <div>
    
    <ItemListContainer bands={bands} />
  </div>;
}