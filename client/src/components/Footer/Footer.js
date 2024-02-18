import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <Container fluid="md">
        <Row>
          <Col>
            <p>
              The Internet Computer's largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </Col>
          <Col>
            <p>
              Copyright © {new Date().getFullYear()} Freeform. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
