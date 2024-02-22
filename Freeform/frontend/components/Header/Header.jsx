import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

export default function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">Freeform</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/discover">Discover</Nav.Link>
          <Nav.Link href="/mint">Mint</Nav.Link>
          <Nav.Link href="/ids">My Profile</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
