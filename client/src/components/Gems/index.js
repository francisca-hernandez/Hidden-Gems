import React from 'react'
//Imports from reactstrap
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Button,
  Row,
  Col,
} from 'reactstrap'

// Importing these mutations/queries to add the functionality to the component
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_ME } from '../../utils/queries'

import { REMOVE_GEM } from '../../utils/mutation'

const Gems = () => {
  const { data } = useQuery(QUERY_ME)
  console.log(data?.me?.savedGems)
  const gems = data?.me?.savedGems
  console.log(gems)

  const [removeGem] = useMutation(REMOVE_GEM)

  // Delete a Gem functionality
  const handleDelete = async (gem) => {
    console.log(gem)
    try {
      await removeGem({
        variables: { id: gem._id },
      })
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  // If no Gems - show text saying so.
  if (!gems) {
    return <h3>No Gems Added Yet</h3>
  } else {
    return (
      <Row lg={4}>
        {/* Mapping and calling the gem inputs */}
        {gems &&
          gems.map((gem) => (
            //Card styling - some vanilla CSS used
            <Col key={gem._id} className="d-flex">
              <Card
                className="flex my-2"
                style={{
                  backgroundColor: '#81978C',
                  width: '18rem',
                  display: '',
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">{gem.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {gem.gemId}
                  </CardSubtitle>
                </CardBody>
                <img
                  alt="blurred city with raindrops on lens"
                  src="https://i.picsum.photos/id/171/2048/1536.jpg?hmac=16eVtfmqTAEcr8VwTREQX4kV8dzZKcGWI5ouMlhRBuk"
                  width="100%"
                />
                <CardBody>
                  <CardText>{gem.description}</CardText>
                  <CardLink href={gem.link}>Website Link</CardLink>
                  <CardLink href={gem.address}>Directions</CardLink>
                  {/* Delete Button  */}
                  <Button
                    style={{
                      backgroundColor: 'secondary',
                    }}
                    onClick={() => handleDelete(gem)}
                  >
                    Delete Gem
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
      </Row>
    )
  }
}

export default Gems
