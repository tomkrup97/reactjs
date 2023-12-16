import "./NavBarComponent.css";
import FavButtonComponent from "../FavButtonComponent/FavButtonComponent";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import main_logo from "./main_logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const NavBarComponent = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
    .get('https://dummyjson.com/products/categories')
    .then((res) => setCategories(res.data))
    .catch((error) => console.log(error));
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="Navbar" style={{ backgroundColor: "red" }}>
      <Container className="conte">
        <img src={main_logo} className="mainLogo" />
        <Navbar.Brand><Link to={"/"} className="brandLink">Banda Tributo</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to={"/"} className="menuLink">Inicio</Link></Nav.Link>
            <Nav.Link href="#link" className="menuLink">Shows</Nav.Link>
            <NavDropdown title="Bandas" id="basic-nav-dropdown" className="menuLink">
              {categories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}><Link to={`/category/${category}`}>{category}</Link></NavDropdown.Item>
                )
              })}
              
            </NavDropdown>
          </Nav>
          <Link to="/favorites"><FavButtonComponent></FavButtonComponent></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;