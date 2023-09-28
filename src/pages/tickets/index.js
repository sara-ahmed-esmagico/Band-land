import React from "react";
import "../../styles/Home.css";
import { Box, Typography } from "@mui/material";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Banner from "../../images/testBanner.svg";
import ticketTextBanner1 from "../../images/ticketTextBanner1.png";
import ticketTextBanner2 from "../../images/ticketTextBanner2.png";
import ticketTextBanner3 from "../../images/ticketTextBanner3.png";
import '../../styles/ticket.css'
const Tickets = () => {
  return (
    <>
      <Header mobileCss={"mobileViewBannerTicket"} midBanner={Banner} />

      <Box className="pos-absolute top-5 relative-top flex-center flex-col align-center text-center ticketTop ">
        <Box className="pos-relative flex-center flex-col align-center ticketBannerMargin ">
          <img
            className="ticketBanner"
            src={ticketTextBanner1}
            alt="img"
          />
          <Box className="pos-absolute  font-texturina z-index-3">
            <h1 className="ticketHeading">EARLY BIRD</h1>
            <Typography className="ticketText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet enim gravida velit
             fringilla gravida vel in nulla. Pellentesque elementum ligula eget tellus accumsan 
             dignissim. Cras lacinia velit quis mollis tempus. Nullam eget bibendum lectus. Sed 
             iaculis erat quis odio sollicitudin, in tincidunt nunc tempus.
            </Typography>
            <h1 className="ticketHeading">₹1999</h1>
          </Box>
        </Box>
        <Box className="pos-relative flex-center flex-col align-center ticketBannerMargin ">
          <img
            className="ticketBanner"
            src={ticketTextBanner2}
            alt="ticketTextBanner2"
          />
          <Box className="pos-absolute  font-texturina z-index-3">
            <h1 className="ticketHeading">PLATINUM</h1>
            <Typography className="ticketText" style={{color:"white"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet enim gravida velit
             fringilla gravida vel in nulla. Pellentesque elementum ligula eget tellus accumsan 
             dignissim. Cras lacinia velit quis mollis tempus. Nullam eget bibendum lectus. Sed 
             iaculis erat quis odio sollicitudin, in tincidunt nunc tempus.
            </Typography>
            <h1 className="ticketHeading">₹1999</h1>
          </Box>
        </Box>
        <Box className="pos-relative flex-center flex-col align-center ticketBannerMargin ">
          <img
            className="ticketBanner"
            src={ticketTextBanner3}
            alt="ticketTextBanner3"
          />
          <Box className="pos-absolute  font-texturina z-index-3">
            <h1 className="ticketHeading">GENERAL ADMISSION</h1>
            <Typography className="ticketText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet enim gravida velit
             fringilla gravida vel in nulla. Pellentesque elementum ligula eget tellus accumsan 
             dignissim. Cras lacinia velit quis mollis tempus. Nullam eget bibendum lectus. Sed 
             iaculis erat quis odio sollicitudin, in tincidunt nunc tempus.
            </Typography>

            <h1 className="ticketHeading">₹1999</h1>
          </Box>
        </Box>

        <Box
          sx={{ mt: { xs: 5, lg: 10 } }}
          className="pos-relative flex-center flex-col align-center"
        >
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Tickets;
