import React from "react";
import {Container, Row, Button, Col, Image} from 'react-bootstrap';


const DogeExtras = (props) => {
  return (
    <Container>
      <div className="extra-images text-center">
        {
          props.DogeIcon ? <Image src={props.DogeIcon}/> : ''
        }
        
        <div className="nft-char">
          <div className="nft-bg">
            { props.DogeDesc ? <Image src={props.DogeDesc}/>  : ''}
          </div>
          <div className="nft-char-slider">
            {props.children}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default DogeExtras;