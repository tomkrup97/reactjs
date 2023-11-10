import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import './index.css';
import axios from 'axios';
import { useEffect } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return <div>
    <NavBarComponent />
    <ItemListContainer intro="Encontrá las mejores bandas que rinden tributo a tus artistas favoritos"/>
  </div>;
}

export default App;
