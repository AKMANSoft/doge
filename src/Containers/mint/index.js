import React from "react";
import logo from '../../images/nft.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import WalletLayout from '../../sharedModules/walletLayout'

import Discord from '../../images/discord.png';
import Twitter from '../../images/twitter.png';
import Instagram from '../../images/instagram.png';
import Facebook from '../../images/facebook.png';
import Message from '../../images/message.png';


const Mint = () => {
  return (
    <WalletLayout>
      <div className="container container-sm mt-md-5 mt-4">
        <div className="row">
          <div className="col-12">
            <div className="heading text-center m-0">
              <h2>MINT YOUR NFT</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="buy-nft">
        <div className="container container-sm">
          <div className="row">
            <div className="col-md-12">
              <div className="buyDesc">
                <ul className="f-figures">
                  <li>
                    <p>STATUS</p>
                    <p>STARTING IN 12 DAYS</p>
                  </li>
                  <li>
                    <p>PRICE</p>
                    <p>0.06 ETH</p>
                  </li>
                </ul>
                <div className="buyCalculator">
                  <p>1000 Remaining</p>
                  <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="dim">How many NFT's to mint?</p>
                  <div className="buyCounter">
                    <button><FontAwesomeIcon icon={faMinus} /></button>
                    <input type="text" min-value="1" value="1" />
                    <button><FontAwesomeIcon icon={faPlus} /></button>                  
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <Button variant="transparent" className="p-0 text-left">CONNECT <br/>WALLET</Button>
                    </div>
                    <div className="col-8">
                      <div className="btn-wrapper w-100">
                        <Button variant="purple" className="w-100"><span>MINT NOW</span></Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <ul className="social-media-list">
              <li><a href="#"><img src={Discord} alt="logo"/></a></li>
              <li><a href="#"><img src={Twitter} alt="logo"/></a></li>
              <li><a href="#"><img src={Instagram} alt="logo"/></a></li>
              <li><a href="#"><img src={Facebook} alt="logo"/></a></li>
              <li><a href="#"><img src={Message} alt="logo"/></a></li>
            </ul>
          </footer>
        </div>
      </div>
    </WalletLayout>
  )
}

export default Mint;