import { Button, Image } from "react-bootstrap";
import "../../css/slick.min.css";
import Delot1 from "../../images/delot1.png";
import ApeGloveCopy from "../../images/apeglovescopy.png";
import WaifuCopy1 from "../../images/waifu copy1.png";
import Grid from "@mui/material/Grid";
import Table from "./Table";
import LotteryMachine from "./LotteryMachine";

const Lottery = () => {
  return (
    <div className="lottery-body">
      <Grid container spacing={1}>
        <Grid item xs={3.5} className="left">
          <div>
            <div className="Delot1">
              <Image src={Delot1} alt="mission-img" className="Delot1img" />
            </div>
            <div className="ApeGloveCopy">
              <Image
                src={ApeGloveCopy}
                alt="mission-img"
                className="ApeGloveCopyimg"
              />
            </div>
            <div className="WaifuCopy1">
              <Image
                src={WaifuCopy1}
                alt="mission-img"
                className="WaifuCopy1img"
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LotteryMachine />
        </Grid>
        <Grid item xs={12} sm={6} md={4.5}>
          <Table />
        </Grid>
      </Grid>
    </div>
  );
};

export default Lottery;
