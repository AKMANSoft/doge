import React from 'react';
import NewGold from '../images/new-gold.png'
import HouseDoge from '../images/house-doge.png'
import HouseShiba from '../images/house-shiba.png'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const Collection = () => {
  return (
    <div className='collection-section'>
      <Container>
        <Row>
          <Col md={12}>
            <div className='content'>
              <div className='heading'>
                <h2>COLLECTIONS</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col className='p-0'>
          <div className='missions'>
              <ul>
                <li>
                  <div className='single-mission'>
                    <div className='mission-title'>
                      <p>Mission 1</p>
                    </div>
                    <div className='misision-box'>
                      <div className='mission-body'>
                        <div className='mission-img'>
                          <Image src={NewGold} alt="mission-img"/>
                        </div>
                        <div className='mission-desc'>
                          <div className='content'>
                            <div className='heading'>
                              <h4>Doge is the NeW Gold</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                          </div>
                        </div>
                      </div>
                      <div className='mission-footer'>
                        <div className="btn-wrapper">
                          <Button variant="theme" size="lg" className="btn-block"><span>CONNECT WALLET</span></Button>
                        </div>
                        <a href="/">View Collection</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='single-mission'>
                    <div className='mission-title'>
                      <p>Mission 2</p>
                    </div>
                    <div className='misision-box'>
                      <div className='mission-body'>
                        <div className='mission-img'>
                          <Image src={HouseDoge} alt="mission-img"/>
                        </div>
                        <div className='mission-desc'>
                          <div className='content'>
                            <div className='heading'>
                              <h4>House of Doge</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                          </div>
                        </div>
                      </div>
                      <div className='mission-footer'>
                        <div className="btn-wrapper">
                          <Button variant="theme" size="lg" className="btn-block" disabled><span>coming soon</span></Button>
                        </div>
                        <a href="/">View Collection</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='single-mission'>
                    <div className='mission-title'>
                      <p>Mission 3</p>
                    </div>
                    <div className='misision-box'>
                      <div className='mission-body'>
                        <div className='mission-img'>
                          <Image src={HouseShiba} alt="mission-img"/>
                        </div>
                        <div className='mission-desc'>
                          <div className='content'>
                            <div className='heading'>
                              <h4>House of Shiba</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                          </div>
                        </div>
                      </div>
                      <div className='mission-footer'>
                        <div className="btn-wrapper">
                          <Button variant="theme" size="lg" className="btn-block" disabled><span>coming soon</span></Button>
                        </div>
                        <a href="/">View Collection</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
} 

export default Collection