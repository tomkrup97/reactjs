import { useState, useEffect } from "react";
import { getDocs, getFirestore, collection, getDoc, doc, query, where} from "firebase/firestore";

export const useAllBandsByFilter = (collectionName, categoryId, fieldToFilter) => {
    const [bands, setBands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const db = getFirestore();
      const collectionRef = collection(db, collectionName);
  
      const categoryQuery = query(collectionRef, where(fieldToFilter, "==", categoryId))
  
      getDocs(categoryQuery)
        .then((res) => {
          const data = res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setBands(data);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
  
    }, [categoryId]);
  
    return { bands, loading, error };
  };