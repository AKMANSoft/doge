import React from "react";
import logo from '../../images/logo-head.png';
import Button from 'react-bootstrap/Button';

const Index = () => {
  return (
    <header>
      <div className="container container-sm">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="nabvar-brand">
              <a href="/">
                <img src={logo} alt="logo"/>
              </a>
            </div>
          </div>
          <div className="col-6 text-right">
            <div className="btn-wrapper">
              <Button variant="theme"><span>CONNECT WALLET</span></Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Index;