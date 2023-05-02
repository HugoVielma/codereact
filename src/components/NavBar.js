import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./cartWidget";
import { NavLink } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <Navbar bg="light" variant="light">
      <NavLink to="/">
        <img
          src="/imagenes/editable_Family_Pets2.png"
          alt=""
          width="200px"
        ></img>
      </NavLink>
      <Container>
        <Navbar.Brand href="#home">TusMAsCotas</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/category/perro">Perros</NavLink>
          <NavLink to="/category/gato">Gatos</NavLink>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
