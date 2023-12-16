import React, { createContext} from 'react'

export const FavContext = createContext();

export const useFavorites = () => {
   return useContext(FavoritesContext);
 };

export const FavProvider = ({children}) => {

   const [FavCount, setFavCount] = React.useState(0);
  
   return <FavContext.Provider value={{FavCount, setFavCount}}>{children}</FavContext.Provider>;
}