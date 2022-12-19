import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Cloud1 from '../images/61c9b2f8b80ffabdb9b49722_Group 235.png'
import Cloud from '../images/61c9b27283c49a07484a1ebf_Group 237.png'
import WhitePaper from '../images/whitePaper.png'

const Whitepaper = () => {
  return(
    <Container>
      <Row className='justify-content-center'>
        <Col md={10}>
          <section className='whitepaper'>
            <div className="btn-wrapper mt-md-5">
              <Button variant="theme" size='lg'><span>READ WHITEPAPER</span></Button>
            </div>
            <img src={WhitePaper} alt="WhitePaper" className='w-100'/>
            <div className='shape shape-12'>
              <img src={Cloud} alt='' />
            </div>
            <div className='shape shape-13'>
              <img src={Cloud1} alt='' />
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default Whitepaper;