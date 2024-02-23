import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "./Header.scss"

export default function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container className="Header">
        <Navbar.Brand href="/" className="logo">
          Freeform
        </Navbar.Brand>
        <Nav className="nav">
          <Nav.Link href="/discover" className="nav__disco">
            Discover
          </Nav.Link>
          <Nav.Link href="/mint" className="nav__mint">
            Mint
          </Nav.Link>
          <Nav.Link href="/ids" className="nav__ids">
            My Profile
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
