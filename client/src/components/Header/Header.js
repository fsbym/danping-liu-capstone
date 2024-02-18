import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Freeform</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Discover</Nav.Link>
            <Nav.Link href="#features">Mint</Nav.Link>
            <Nav.Link href="#pricing">My Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Freeform</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Discover</Nav.Link>
            <Nav.Link href="#features">Mint</Nav.Link>
            <Nav.Link href="#pricing">My Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
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
    </>
  );
}
