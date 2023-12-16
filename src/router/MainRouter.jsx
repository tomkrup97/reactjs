import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "../pages/Home";
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import { ItemDetailContainer } from "../pages";
import Category from '../pages/Category';
import FavoritesPage from '../pages/FavoritesPage';

export const MainRouter = () => {
    return (
    <BrowserRouter>
        <NavBarComponent />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item/:bandId" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            
        </Routes>
    </BrowserRouter>
    )
}