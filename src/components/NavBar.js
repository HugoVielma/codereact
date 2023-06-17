import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <Navbar variant="light">
      <NavLink to="/">
        <img
          src="/imagenes/editable_Family_Pets2.png"
          alt=""
          width="200px"
        ></img>
      </NavLink>
      <Container>
        <Navbar.Brand to="#home">TusMAsCotas</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/category/perro" className="enlace">
            Perros
          </NavLink>
          <NavLink to="/category/gato" className="enlace">
            Gatos
          </NavLink>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
