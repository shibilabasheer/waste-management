import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

function About() {

  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow p-4">
            <Card.Body>
              <Card.Title as="h1" className="mb-4 text-center">About Our App</Card.Title>
              <Card.Text>
                Welcome to our Waste Management App — your go-to platform for safe, easy, and reliable recycling!
                <br /><br />
                Sell newspapers, plastics, metals, electronics, and appliances from your home, office, or construction site.
                <br /><br />
                Our mission is to make waste disposal more sustainable and convenient by connecting users with verified scrap collectors.
              </Card.Text>
              <div className="text-center mt-4">
                <Button variant="warning" onClick={() => navigate('/')}>
                  Back to Home
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About