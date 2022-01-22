import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'
export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar' variant="dark">
    <Container>
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto p-2">
        <Nav.Link href="#features">Skin Care</Nav.Link>
        <Nav.Link href="#pricing">Body & Hand</Nav.Link>
        <Nav.Link href="#pricing">Hair</Nav.Link>
        <Nav.Link href="#pricing">Body & Hand</Nav.Link>
        <Nav.Link href="#pricing">Fragrance</Nav.Link>
        <Nav.Link href="#pricing">Home</Nav.Link>
        <Nav.Link href="#pricing">Kits& Travels</Nav.Link>
        <Nav.Link href="#pricing">Gifts</Nav.Link>
        <Nav.Link href="#pricing">Read</Nav.Link>
        <Nav.Link href="#pricing">Store</Nav.Link>
    
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Login</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
         Cart
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
