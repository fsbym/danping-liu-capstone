import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Freeform</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Discover</Nav.Link>
          <Nav.Link href="#features">Mint</Nav.Link>
          <Nav.Link href="#pricing">My Profile</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
