import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { MainRouter } from "./router/MainRouter";
import { FavoritesProvider } from "./context/FavoritesContext"

import React from 'react';


const App = () => {
  return (
    <div>
      <FavoritesProvider>
        <MainRouter />
      </FavoritesProvider>
    </div>
  );
};

export default App;
