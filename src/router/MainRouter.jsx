import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "../pages/Home";
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import { Link } from "react-router-dom";
import Category from '../pages/Category';


export const MainRouter = () => {
    return (
    <BrowserRouter>
        <NavBarComponent />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<Category />} />
        </Routes>
    </BrowserRouter>
    )
}