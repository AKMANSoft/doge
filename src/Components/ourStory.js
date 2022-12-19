import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const OurStory =() => {
  return (
    <div>
      <Container>
        <Row className='justify-content-center'>
          <Col md={8}>
            <div className='content'>
              <div className='heading'>
                <h2>!!Amaze Story, Much Wow!!</h2>
              </div>
              <p className='dim'>The Doge Project is a story. As it is progressed, every aspect of the Doge Project will be integrated into the Lore of the Doge Kingdom, and the Doge Kingdoms mission to protect the native People of Earth from the other crypto Kingdoms and the Winter Bear. This includes the much anticipated Decentralized Lottery and future Metaverse Arcade.</p>
              <p className='dim'>This portrayal of the crypto Kingdoms and the Doge Kingdom's mission reign over them, is what all Dogecoin holders want to see. Dogecoin overtake those cryptocurrencies in the way and be the crypto of the future.</p>
              <p className='dim'>This will be the beginning of a very unique community of Doge and Shiba lovers and supporters. Phase 1 of the mission starts with, "Doge is the New Gold." Depicted in anime style art. The next 2 collections, House of Doge and House of Shiba, have a Game of Thrones type style, as they begin their terror over the crypto Kingdoms.</p>
              <div className='text-center mt-5'>
                <div className="btn-wrapper">
                  <Button variant="theme" size='lg'><span>JOIN WHITELIST</span></Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default OurStory;