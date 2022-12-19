import React from "react";
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import Timeline from './timeline';
import Cloud1 from '../images/DogeonRocket.png'
import Cloud from '../images/dragon.png'
import { Button } from 'react-bootstrap';


const Roadmap = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="roadmap">
            <div className="content">
              <div className="heading">
                <h2 className='text-center'>ROADMAP</h2>
              </div>
            </div>
            <Card.Body>
              <Timeline />
              <div className='text-center'>
                <div className='btn-wrapper'>
                  <Button variant='purple' size="lg"><span>Join Whitelist</span></Button>
                </div>
              </div>
              <div className='shape shape-top35-left0'>
                <img src={Cloud} alt='' />
              </div>
              <div className='shape shape-13'>
                <img src={Cloud1} alt='' />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Roadmap;