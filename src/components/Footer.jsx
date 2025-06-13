// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">&copy; 2025 Company</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#" className="text-light text-decoration-none me-5">Privacy Policy</a>
            <a href="#" className="text-light text-decoration-none">Terms & Conditions</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
