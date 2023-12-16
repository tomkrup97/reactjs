import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useFavorites } from '../../context/FavoritesContext';

const BandFavSelector = ({ band, label = "" }) => {
  const { addToFavorites, removeFromFavorites } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(band.id);
    } else {
      addToFavorites(band);
    }
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <Button variant={isFavorite ? 'success' : 'primary'} onClick={handleToggleFavorite}>
      {isFavorite ? '★ Añadido a Favoritos' : '☆ Añadir a Favoritos'} {label}
    </Button>
  );
};

export default BandFavSelector;

