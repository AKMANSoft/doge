import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const WhatDoge = () => {
  return (
    <section className='whatDoge'>
      <Container>
        <Row>
          <Col md={12}>
            <div className='content'>
              <div className='heading'>
                <h2>What is the Doge Project</h2>
                <h2 className='trace'>(D)o.(O)nly.(G)ood.(E)veryday</h2>
              </div>
              <p>
              The Doge Project is a community first project. We want to bring together the community of loyal “shibes” who were the original “good bois.” Encapsulating and holding strongly to the “Do only good everyday” motto and lighthearted, passionate, fun, and loyal personality, not unlike the shiba inu dog of the original meme. This is displayed in the Doge Project's first project, the Decentralized Lottery. The purpose of this Decentralized Lottery is to give the community a chance win big, weekly, but also to allow for the community to raise money for charity and give back to the community to choose what to do with it.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='learn-more-doge'>
        <div className="btn-wrapper">
          <Button variant="theme" size='lg'><span>READ WHITEPAPER TO LEARN MORE</span></Button>
        </div>
      </div>
    </section>
  )
}

export default WhatDoge