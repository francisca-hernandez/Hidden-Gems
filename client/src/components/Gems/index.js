import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'; 


// linking the saveGems
// jsx - same as the other pages
// declaring variable and inputing stuff that needs to be imported

const Gems = ({ gems }) => {
  if (!gems.length >= 0) {
    return <h3>No Gems Added Yet</h3>
  } else
  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
      {gems && gems.map((gem) => 
      <h1>{gem.name}</h1>)}
      {/* can we let people add their own images?? */}
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
    </Card>
  )
}
export default Gems; 

// data.me.savedGems is the query call - may need a keyword
// data.me.savedGems will need to be a map function OR we can use antoher type of loop
// we can add a conditional statement to do something else while the queries are loading
// - (ex: is in the gems form and login page at the bottom)
// Just need them to show up on the page as cards or whatever but
// for now just words (try to look at project 1)




