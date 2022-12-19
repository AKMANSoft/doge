import React from "react";
import {Container, Row, Button, Col, Image} from 'react-bootstrap';
import "../css/slick.min.css";
import Slider from "react-slick";


const InnerBanner = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  }
  return (
    <div className="header-banner inner-banner">
      <div className="banner-bg">
        <video loop={true} autoPlay="autoPlay" muted playsinline="">
          <source src={props.bannerVideo} type="video/mp4" />
          <source src={props.bannerVideoMov} type="video/mov" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="banner-desc">
        <Container>
          <Row>
            <Col md={12}>
              <div className="btn-wrapper">
                <Button variant={props.btnClass ? props.btnClass : 'purple'} size="lg"><span>JOIN WHITELIST</span></Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="coming-soon">
          <div className={'coming-soon-stripe ' + (props.btnClass ? props.btnClass : 'purple')}>
            <Slider {...settings}>
              <p>Mint Coming Soon</p>
              <p>Whitelist for first access</p>
              <p>Mint Coming Soon</p>
              <p>Whitelist for first access</p>
              <p>Mint Coming Soon</p>
              <p>Whitelist for first access</p>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnerBanner;