import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src="scrap1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3 className='text-black'>Smart Waste Management</h3>
            <p className='text-black'>Book scrap pickups from home and turn your waste into value.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src="scrap2.jpeg" alt="Second slide" />
          <Carousel.Caption>
            <h3 className='text-white'>Earn from Your Waste</h3>
            <p className='text-white'>Recycle newspapers, plastics, electronics, and more — and get paid instantly.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="py-5 text-center">
        <h1 className="mb-4">Welcome to Our Application</h1>
        <p className="mb-4">
          Your smart waste management and recycling solution. Schedule scrap pickups, earn money, and keep the environment clean!
        </p>

        <Row className="justify-content-center my-4">
          <Col xs="auto">
            <Link to="/about">
              <Button variant="warning" className="mx-2">About Us</Button>
            </Link>
          </Col>
          <Col xs="auto">
            <Link to="/users">
              <Button variant="warning" className="mx-2">Our Users</Button>
            </Link>
          </Col>
        </Row>

        <p className="text-muted mt-4">Join us in making waste management safe, simple, and sustainable.</p>
      </Container>
    </>
  );
}

export default Home