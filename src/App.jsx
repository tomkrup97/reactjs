import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import './index.css';
import axios from 'axios';
import { useEffect } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { MainRouter } from "./router/MainRouter";

function App() {

  return <div>
    
    <MainRouter />
    
  </div>;
}

export default App;
