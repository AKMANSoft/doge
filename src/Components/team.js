import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import Doge from '../images/doge.png'
import Gold from '../images/gold.png'
import Princess from '../images/princess.png'

const Team = () => {
  return(
    <section className='team-section pt-0'>
      <Container>
        <Row>
          <Col md={12}>
            <div className='content'>
              <div className='heading'>
                <h3>OUR TEAM</h3>
              </div>
            </div>
            <div className='team-slider'>
              <div className='team-member'>
                <div className='team-body'>
                  <div className='team-img'>
                    <Image src={Doge} alt="team-member"/>
                  </div>
                  <div className='team-desc'>
                    <div className='content'>
                      <div className='heading'>
                        <h3>Name</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='team-footer'>
                  <Button variant="purple" onClick={(e) => {e.currentTarget.classList.contains('active') ? e.currentTarget.classList.remove('active') : e.currentTarget.classList.add('active')}}>Special Skills</Button>
                    <div className='overlay-section'>
                      <div className='content'>
                        <div className='heading'>
                          <h3>Demo</h3>
                        </div>
                        <p className='dim'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        </p>
                      </div>
                    </div>
                </div>
              </div>
              <div className='team-member'>
                <div className='team-body'>
                  <div className='team-img'>
                    <Image src={Princess} alt="team-member"/>
                  </div>
                  <div className='team-desc'>
                    <div className='content'>
                      <div className='heading'>
                        <h3>Name</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='team-footer'>
                  <Button variant="purple" onClick={(e) => {e.currentTarget.classList.contains('active') ? e.currentTarget.classList.remove('active') : e.currentTarget.classList.add('active')}}>Special Skills</Button>
                    <div className='overlay-section'>
                      <div className='content'>
                        <div className='heading'>
                          <h3>Demo</h3>
                        </div>
                        <p className='dim'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        </p>
                      </div>
                    </div>
                </div>
              </div>
              <div className='team-member'>
                <div className='team-body'>
                  <div className='team-img'>
                    <Image src={Gold} alt="team-member"/>
                  </div>
                  <div className='team-desc'>
                    <div className='content'>
                      <div className='heading'>
                        <h3>Name</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='team-footer'>
                  <Button variant="purple" onClick={(e) => {e.currentTarget.classList.contains('active') ? e.currentTarget.classList.remove('active') : e.currentTarget.classList.add('active')}}>Special Skills</Button>
                    <div className='overlay-section'>
                      <div className='content'>
                        <div className='heading'>
                          <h3>Demo</h3>
                        </div>
                        <p className='dim'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        </p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Team