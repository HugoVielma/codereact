import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./cartWidget";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <img
          src="/imagenes/editable_Family_Pets2.png"
          alt=""
          width="200px"
        ></img>
        <Container>
          <Navbar.Brand href="#home">TusMAsCotas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Perros</Nav.Link>
            <Nav.Link href="#features">Gatos</Nav.Link>
            <Nav.Link href="#pricing">Aves</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
