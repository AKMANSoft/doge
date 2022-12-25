import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import "../../css/slick.min.css";
import Jackpot from "../../images/Jackpot copy 1.png";
import QD1 from "../../images/QD1.png";
import d10 from "../../images/d10.png";
import D5 from "../../images/D5.png";
import D52 from "../../images/D52.png";
import CountUp from "react-countup";
import Group1348 from "../../images/Group1348.png";

export default function LotteryMachine() {
  const [draw, setDraw] = useState(false);
  const [looteryno, setLooteryno] = useState(
    Math.floor(10000 + Math.random() * 99999)
  );

  return (
    <div style={{ height: "100%" }}>
      <div className="lootery-machine-frame">
        <div className="horizontal-center Jackpot">
          <Image src={Jackpot} alt="mission-img" className="Jackpotimg" />
        </div>

        <div className="horizontal-center JackpotField ">
          {draw == true ? (
            <CountUp
              className="lottery-counter"
              startVal={0}
              //duration={6}
              end={Math.floor(100 + Math.random() * 999)}
            />
          ) : (
            <text className="lottery-counter">000</text>
          )}
        </div>

        <div className="horizontal-center QD1">
          <button className="QD1Button" onClick={() => setDraw(true)}>
            <Image src={QD1} alt="mission-img" className="QD1img" />
          </button>
        </div>
      </div>

      <div className="Machine-back">
        <div className="more-draw-container">
          <button className="morebuttons" onClick={() => alert("More")}>
            <Image src={D5} alt="mission-img" className="morebuttonsimg" />
          </button>
          <button className="morebuttons" onClick={() => alert("More")}>
            <Image src={D52} alt="mission-img" className="morebuttonsimg" />
          </button>
          <button className="morebuttons" onClick={() => alert("More")}>
            <Image src={d10} alt="mission-img" className="morebuttonsimg" />
          </button>
        </div>

        <text className="lottery-number-header">YOUR LOTTERY NUMBER</text>
        <div className="lottry-number-field">
          <text className="lottery-number-text">{looteryno}</text>
        </div>
      </div>
    </div>
  );
}
