import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function User() {

  const [users, setUsers] = useState([]);

  const handleFetchUsers = () => {

    axios.get('https://fakestoreapi.com/users').then((resp) => {
      setUsers(resp.data)
    })

  }

  useEffect(() => {
    handleFetchUsers()
  }, [])

  return (
    <>
      <h2 className='text-center mt-2'>Our Users</h2>
      <Container>
        <Row className='mt-4'>
          {
            users.length > 0 ? (
              users.map((user, index) => (
                (
                  <Col className='mb-4' xxs={12} xs={6} sm={6} md={4} lg={4} xl={3} xxl={3} key={index}>
                    <Card className="h-100">
                      <Card.Img variant="top" src="avatar.webp" />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="d-inline-block text-truncate fs-5 fw-semibold text-capitalize"
                          style={{ maxWidth: '250px' }} title={user.name.firstname}>{user.name.firstname} {user.name.lastname}</Card.Title>
                        <Card.Text>
                          {user.email}
                        </Card.Text>
                        <div className="mt-auto">
                          <Link to={`/users/${user.id}`}>
                            <Button variant="warning">View Details</Button>
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              ))
            ) : (
              <h2 className='text-center'>No Users Found</h2>
            )}
        </Row>
      </Container>
    </>
  )
}

export default User