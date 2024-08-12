import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Button,
  Badge,
} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const location = useLocation();
  return (
    <Navbar expand="sm" sticky="top" bg="dark" data-bs-theme="dark" className="shadow-lg">
      <Container>
        <Navbar.Brand>E commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>E commerce</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="mx-auto my-auto">
              <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
              <Nav.Link as={NavLink} to="/store" >STORE</Nav.Link>
              <Nav.Link as={NavLink} to="/about" >ABOUT</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" >CONTACT</Nav.Link>
            </Nav>
            <Nav className="d-flex flex-row justify-content-between align-items-center">
              <Nav.Link>
                <Button variant="primary">Login</Button>
              </Nav.Link>
              <Nav.Link>
                <Button variant="outline-primary">Signup</Button>
              </Nav.Link>
              {location.pathname === "/store" && <Nav.Link>
                <Button variant="primary" onClick={props.onShow}>
                  Cart <Badge bg="dark">{cartCtx.items.length}</Badge>
                </Button>
              </Nav.Link>}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
