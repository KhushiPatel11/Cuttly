import React, { useState, useEffect } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbarweb() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`bg-body-tertiary mb-3 fixed-top ${scrollPosition > 50 ? 'scrolled' : ''}`}
        >
          <Container fluid>
            <Navbar.Brand as={Link} to="/">Cuttly</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <NavDropdown
                    title="Services"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action1" as={Link} to="/preview">Priview Mode</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/cutturl">CUTT URL Button</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/checkurl">Check URL</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">API</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Integrations</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">Support</NavDropdown.Item>
                    <NavDropdown.Item href="#action7">Abuse Report</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">Features</Nav.Link>
                  <NavDropdown
                    title="Pricing"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="/pricing">Yearly</NavDropdown.Item>
                    <NavDropdown.Item href="#action9">Monthly</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">About</Nav.Link>
                </Nav>
                <div className="d-flex">
                  <Button variant="outline-success" as={Link} to="/login">Login</Button>
                </div>
                <div className="d-flex">
                  <Button variant="outline-success" as={Link} to="/signup">SignUP</Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarweb;
