import React, { useState, useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DOGEPROJECTALLTIMEPAYOUTS from "../../images/DOGEPROJECTALLTIMEPAYOUTS.png";
import DOGEPROJECTALLTIMEPAYOUTSHORIZONTAL from "../../images/DOGEPROJECTALLTIMEPAYOUTSHORIZONTAL.png";

import DogeProjectLogo2 from "../../images/DogeProjectLogo2.png";
import { Grid } from "@mui/material";

const tableArray = [
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
  { username: "haider", gmail: "hdrali036@gmail.com", payout: "100" },
];

export default function Table() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <div>
      <div className="table-header">
        <div className="table-head">
          <Image
            className="DOGEPROJECTALLTIMEPAYOUTS"
            alt="header"
            src={DogeProjectLogo2}
          />
          <div className="table-header-left">
            <Image
              className="DOGEPROJECTALLTIMEPAYOUTS"
              alt="header"
              src={
                windowSize.innerWidth > 900
                  ? DOGEPROJECTALLTIMEPAYOUTS
                  : DOGEPROJECTALLTIMEPAYOUTSHORIZONTAL
              }
            />
            <text className="table-header-left-text">10,000.00</text>
          </div>
        </div>
        <div className="listHeader">
          <Grid container spacing={0}>
            <Grid item xs={3.3} md={3}>
              <text className="listHeaderText">WEEK</text>
            </Grid>
            <Grid item xs={5.7} md={5}>
              <text className="listHeaderText">WINNER</text>
            </Grid>
            <Grid item xs={3} md={4}>
              <text className="listHeaderText">PAYOUT (USDC)</text>
            </Grid>
          </Grid>
        </div>
      </div>
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "black",
          position: "relative",
          overflow: "auto",
          maxHeight: windowSize.innerHeight - 150,
          height: windowSize.innerHeight - 150,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {tableArray.map((item, index) => (
          <ListItem
            className="TablelistItem"
            sx={{ backgroundColor: index % 2 ? "#570442" : "#1E0217" }}
            key={`item-${item.gmail}`}
          >
            <Grid className="TablelistItemContainer" container spacing={1}>
              <Grid item xs={3} md={3}>
                <div className="tablWeek">
                  <text className="tablWeekText">{index + 1}</text>
                </div>
              </Grid>
              <Grid item xs={6} md={5}>
                <div className="tableWinnerContainer">
                  <text className="tableName">{item.username}</text>
                  <text className="tableEmail">{item.gmail}</text>
                </div>
              </Grid>
              <Grid item xs={3} md={4}>
                <text className="tablePayoutText">{item.payout}</text>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
