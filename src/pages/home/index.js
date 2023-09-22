import { Bolt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "../../styles/globalStyles.css";
import BMSLiveSvg from "../../images/BMS LIVE.svg";
import WhiteLogo from "../../images/Bandland Logo White.svg";
import MainLogo from "../../images/Bandland Logo@3x.png";
import HeaderBase from "../../images/BaseHeader.png";
import MainBg from "../../images/HomeBackground.png";
import SideBorder from "../../images/Border.png";
import MidBanner from "../../images/Banner1.png";
import TextBanner from "../../images/Text Banner.svg";
import OrangeBand from "../../images/Orange Band.svg";
import FooterBase from "../../images/FooterBase.png";
// import BfHalf from "../../images/BGHalf.png";
import "../../App.css";

const Home = () => {
  return (
    <>
      <Box
        className="page-container"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        // backgroundColor={"#44C0A8"}
      >
        <img className="mainBaseStyle" src={MainBg} width={"100%"} />
        {/* <img className="pos-absolute orangeBand" src={OrangeBand} /> */}
        <img className="sideBorder pos-absolute" src={SideBorder} />
        {/* <img className="midBanner pos-absolute" width={"60%"} src={MidBanner} /> */}
        <img className="headerBaseStyle" src={HeaderBase} />
        <img className="pos-absolute mainLogo" src={MainLogo} />
        <img className="pos-absolute textBanner" src={TextBanner} />
        {/* <img src={BfHalf} width={"1500px"} /> */}
        <img className="pos-absolute secondTextBanner" src={TextBanner} />
        {/* <img className="pos-absolute footerBase" src={FooterBase} /> */}
        {/* <img className="pos-absolute footerBase" src={LeftShrub} />
        <img className="pos-absolute footerBase" src={RightShrub} /> */}

        <Box className="headerBtn" display={"flex"} justifyContent={"center"}>
          <Button
            href="/"
            className="homeBtn "
            sx={{ fontFamily: "modesto-condensed" }}
          >
            HOME
          </Button>
          <Bolt className="boltBtn" />

          <Button
            sx={{ fontFamily: "modesto-condensed" }}
            href="/register"
            className="homeBtn "
          >
            REGISTER
          </Button>
        </Box>

        <Box className="pos-absolute school">
          <Typography
            style={{ fontFamily: "Texturina" }}
            className="schoolDesc"
            color={"white"}
          >
            EMBASSY INTERNATIONAL RIDING SCHOOL
          </Typography>
        </Box>
        <Box className="pos-absolute midBannerHead">
          <Typography
            className="midHeading"
            fontSize={50}
            style={{ fontFamily: "modesto-condensed" }}
          >
            ENTER BANDLAND
          </Typography>
        </Box>

        <Typography
          className=" pos-absolute bannerBrief"
          style={{ fontFamily: "Texturina" }}
        >
          Welcome to the state of Bandland. It doesn’t matter who you are or
          where you’re from. All that matters is that you belong. Sling that
          six-string & pledge allegiance to the band. It’s rock’s one true
          homecoming, back to Bangalore. Trends may come & go, but Bandland is
          forever.
        </Typography>

        <Box className={"pos-absolute orangeDesc"}>
          <Grid container display={"flex"} justifyContent={"center"}>
            <Box display={"flex"} sx={{ mb: "-100px" }}>
              <Grid item xs={{ xs: 6, sm: 8 }}>
                <Typography className="midDesc1">2</Typography>
              </Grid>
              <Grid item xs={6} className="midSeparator">
                <Typography className="midDesc2">DAYS.</Typography>
                <Typography className="midDesc2">STAGES.</Typography>
              </Grid>
            </Box>

            <Box display={"flex"} className="orangeMidPoint">
              <Grid item xs={5}>
                <Typography className="midDesc1">12</Typography>
              </Grid>
              <Grid item xs={7} className="midSeparator">
                <Typography className="midDesc2">POWER PACKED.</Typography>
                <Typography className="midDesc2">PERFORMANCES.</Typography>
              </Grid>
            </Box>
          </Grid>
        </Box>
        <Box className="pos-absolute belowOrangeBand">
          <Typography className="midHeading" fontSize={50}>
            BE A CITIZEN OF BANDLAND!
          </Typography>
        </Box>
        <Typography
          style={{ fontFamily: "Texturina" }}
          className="pos-absolute secondBannerBrief"
          sx={{ fontWeight: 600 }}
        >
          Pass on the mic. Grab the stand. Take the stage.
        </Typography>
        <Typography
          sx={{ fontFamily: "Texturina" }}
          className="pos-absolute secondBannerSubBrief"
        >
          Join the inner circle to receive all festival updates, from artist
          lineup to tickets, schedule, guides & more. This one’s for you!
        </Typography>
        <Button href="/register" variant="contained" className=" signUpBtnPos">
          {" "}
          Sign Up{" "}
        </Button>
        <Box className="footerBox pos-absolute">
          <img src={WhiteLogo} className="rotate" />

          <Box
            sx={{ mt: { lg: 2 } }}
            display={"flex"}
            justifyContent={"center"}
          >
            <Button sx={{ p: "0px 8px" }} className="homeBtn">
              HOME
            </Button>
            <Bolt className="boltBtn" />
            <Button href="/register" className="homeBtn">
              REGISTER
            </Button>
          </Box>

          <img src={BMSLiveSvg} className="rotate" />
          <Box sx={{ mt: { lg: 2 } }}>
            <Typography variant="caption" sx={{ fontFamily: "Texturina" }}>
              © | Privacy | Terms & Conditions
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
