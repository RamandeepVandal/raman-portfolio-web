import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand className="nav-brand content-h-md nav-text">
          Raman
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="me-5 content-p nav-text" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="me-5 content-p nav-text" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="me-5 content-p nav-text" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="me-5 content-p nav-text" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
