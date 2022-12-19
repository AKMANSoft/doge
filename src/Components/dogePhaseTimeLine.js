import React from "react";
import BannerImg from '../images/banner.jpg'
import {Container, Row, Button, Col, Image, Card} from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";


const DogePhaseTimeLine = (props) => {
  return (
    <div className="phase-section">
      <div className="phase-img">
        <Image src={props.phaseImg}/>
      </div>
      <div className="phase-desc">
        <div className="content">
          <div className="heading">
            <h4>{props.heading}</h4>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default DogePhaseTimeLine;