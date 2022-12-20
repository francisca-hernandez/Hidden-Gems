import React from 'react'
// import { Link } from 'react-router-dom'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink
} from 'reactstrap'

import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../../utils/queries'

// linking the saveGems
// jsx - same as the other pages
// declaring variable and inputing stuff that needs to be imported

const Gems = () => {
  const { data } = useQuery(QUERY_ME)
  console.log(data?.me?.savedGems)
  const gems = data?.me?.savedGems
  console.log(gems)

  if (!gems) {
    return <h3>No Gems Added Yet</h3>
  } else {
    return (
      <div>
        {gems &&
          gems.map((gem) => (
            <div>
              <Card
                style={{
                  width: '18rem',
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">{gem.name}</CardTitle>
                  <CardSubtitle tag="h6">{gem.description}</CardSubtitle>
                  <CardText>{gem.address}</CardText>
                  <CardLink href={gem.link}>Website Link!</CardLink>
                </CardBody>
              </Card>
              {/* <Card
                style={{
                  width: '18rem',
                }}
              >
                <img alt="Sample" src="" />
                <CardBody>
                  <CardTitle tag="h5">{gems.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {gems.description}
                  </CardSubtitle>
                  <CardText>
                    {gems.address}
                    <Link to={gems.link}>{''}</Link>
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
                )
              </Card> */}
            </div>
          ))}
      </div>
    )
  }
}

export default Gems

// data.me.savedGems is the query call - may need a keyword
// data.me.savedGems will need to be a map function OR we can use antoher type of loop
// we can add a conditional statement to do something else while the queries are loading
// - (ex: is in the gems form and login page at the bottom)
// Just need them to show up on the page as cards or whatever but
// for now just words (try to look at project 1)
