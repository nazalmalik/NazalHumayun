import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function Navcomp() {
  return (
    <Navbar expand="lg" className="custom-navbar fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="navbarbrand">
          Eng.NazaL
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-menu"
          className="navbar-toggle"
        />
        <Navbar.Collapse id="navbar-menu">
          <Nav className="navbar-links ms-auto gap-4">
            <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-link">
              Skills
            </Nav.Link>
            <Nav.Link href="#services" className="nav-link">
              Services
            </Nav.Link>
            <Nav.Link href="#portfolio" className="nav-link">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navcomp;
