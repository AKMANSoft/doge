import React from "react";
import bannerVideo from '../images/videos/homeBanner.mp4'
import bannerVideoMov from '../images/videos/homeBanner.mov'
import {Container, Row, Button, Col, Image} from 'react-bootstrap';


const Banner = () => {
  return (
    <div className="header-banner">
      <div className="banner-bg">
        <video loop={true} autoPlay="autoPlay" muted="" playsinline="">
          <source src={bannerVideo} type="video/mp4" />
          <source src={bannerVideoMov} type="video/mov" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="banner-desc">
        <Container>
          <Row>
            <Col md={12}>
              <div className="btn-wrapper">
                <Button variant="theme" size="lg"><span>JOIN WHITELIST</span></Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Banner;