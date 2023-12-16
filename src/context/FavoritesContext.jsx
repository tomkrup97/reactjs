import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (band) => {
    setFavorites((prevFavorites) => [...prevFavorites, band]);
  };

  const removeFromFavorites = (bandId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((band) => band.id !== bandId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
