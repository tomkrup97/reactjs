import "./NavBarComponent.css";
import FavButtonComponent from "../FavButtonComponent/FavButtonComponent";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import main_logo from "./main_logo.png";


const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="Navbar">
      <Container className="conte">
        <img src={main_logo} className="mainLogo" />
        <Navbar.Brand href="#home">Banda Tributo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="menuLink">Inicio</Nav.Link>
            <Nav.Link href="#link" className="menuLink">Shows</Nav.Link>
            <NavDropdown title="Bandas" id="basic-nav-dropdown" className="menuLink">
              <NavDropdown.Item href="#action/3.1">Bandas Tributo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bandas Cover</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bandas Independientes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Inscribir Banda
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <FavButtonComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;