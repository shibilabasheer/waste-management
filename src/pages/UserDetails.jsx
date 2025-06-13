import React from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Card, Button} from 'react-bootstrap';
import axios from 'axios';

function UserDetails() {
  const { id } = useParams()
  const navigate = useNavigate();
  const [userDetails , setUserDetails] = useState({})

  const getUserDetails = (id) => {

    axios.get(`https://fakestoreapi.com/users/${id}`).then((resp) => {
      console.log(resp.data)
      setUserDetails(resp.data)
    })

  }

  useEffect(() => {
    if(id)
    getUserDetails(id)
  }, [id])

  return (
   <Container className="my-5">
      <Card className="mx-auto shadow-lg rounded-4" style={{ maxWidth: '600px' }}>
        <Card.Img variant="top" src="/avatar.webp" alt="User Avatar" style={{ maxHeight: '300px', objectFit: 'cover' }} className="rounded-top-4"/>
        <Card.Body className="p-4">
          <Card.Title className="text-center fs-3 mb-3 fw-bold text-capitalize">
            {userDetails.name?.firstname} {userDetails.name?.lastname}
          </Card.Title>
          <Card.Text>
            <strong>Email : </strong> {userDetails.email}
          </Card.Text>
          <Card.Text>
            <strong>Username : </strong> {userDetails.username}
          </Card.Text>
          <Card.Text>
            <strong>Phone : </strong> {userDetails.phone}
          </Card.Text>
          <Card.Text>
            <strong>City : </strong> {userDetails.address?.city}
          </Card.Text>
          <Card.Text>
            <strong>Street : </strong> {userDetails.address?.street}
          </Card.Text>

          <div className="d-grid mt-4">
            <Button variant="warning" onClick={() => navigate('/users')}>
              Go Back
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default UserDetails