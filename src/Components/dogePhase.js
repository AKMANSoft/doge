import React from "react";
import BannerImg from '../images/banner.jpg'
import {Container, Row, Button, Col, Image, Card} from 'react-bootstrap';



const DogePhase = (props) => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="phase-sec">
              <div className="phase-bg">
                <Image src={props.backgroundImage}/>
              </div>
              <Card.Body>
                <div className="content">
                  {
                    props.title ? 
                    <div className="heading m-0">
                      <h2 className='text-center'>
                        {props.title}
                      </h2>
                    </div> : ''
                  }
                </div>
                {props.children}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DogePhase;