import { Bolt } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "../../styles/globalStyles.css";
import BMSLiveSvg from "../../images/BMS LIVE.svg";
import WhiteLogo from "../../images/Bandland Logo White.svg";
import MainLogo from "../../images/Bandland Logo@3x.png";
import HeaderBase from "../../images/Header Base.png";
import MainBg from "../../images/BG.svg";
import SideBorder from "../../images/Border.png";
import MidBanner from "../../images/Banner1.png";
import TextBanner from "../../images/Text Banner.svg";
import OrangeBand from "../../images/Orange Band.svg";
import FooterBase from "../../images/Footer Base.png";
import BfHalf from '../../images/BGHalf.png'

const Home = () => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <img className="mainBaseStyle" src={MainBg} width={"1500px"} />
        <img className="pos-absolute orangeBand" src={OrangeBand} />
        <img className="pos-absolute sideBorder" src={SideBorder} />
        <img className="midBanner pos-absolute" width={"60%"} src={MidBanner} />
        <img className="headerBaseStyle pos-absolute " src={HeaderBase} />
        <img className="pos-absolute mainLogo" src={MainLogo} />
        <img className="pos-absolute textBanner" src={TextBanner} />
        <img src={BfHalf} />
        <img className="pos-absolute secondTextBanner" src={TextBanner} />
        <img className="pos-absolute footerBase" src={FooterBase} />

        <Box
          className="headerBtn pos-absolute "
          display={"flex"}
          justifyContent={"center"}
        >
          <Button href="/" className="homeBtn texturinaFont">
            HOME
          </Button>
          <Bolt fontSize="large" sx={{ mt: 2 }} />

          <Button href="/register" className="homeBtn texturinaFont">
            REGISTER
          </Button>
        </Box>

        <Box className="pos-absolute school">
          <Typography
            className="texturinaFont schoolDesc"
            color={"white"}
            variant="h6"
          >
            EMBASSY INTERNATIONAL RIDING SCHOOL
          </Typography>
        </Box>
        <Box className="pos-absolute midBannerHead">
          <Typography className="midHeading" fontSize={50}>ENTER BANDLAND</Typography>
        </Box>

        <Typography className="texturinaFont pos-absolute bannerBrief">
          Welcome to the state of Bandland. It doesn’t matter who you are or
          where you’re from. All that matters is that you belong. Sling that
          six-string & pledge allegiance to the band. It’s rock’s one true
          homecoming, back to Bangalore. Trends may come & go, but Bandland is
          forever.
        </Typography>
        <Box className="pos-absolute belowOrangeBand">
          <Typography className="midHeading" fontSize={50}>
            BE A CITIZEN OF BANDLAND!
          </Typography>
        </Box>
        <Typography
          className="texturinaFont pos-absolute secondBannerBrief"
          sx={{ fontWeight: 600 }}
        >
          Pass on the mic. Grab the stand. Take the stage.
        </Typography>
        <Typography className="texturinaFont pos-absolute secondBannerSubBrief">
          Join the inner circle to receive all festival updates, from artist
          lineup to tickets, schedule, guides & more. This one’s for you!
        </Typography>
        <Button
          href="/register"
          variant="contained"
          sx={{ backgroundColor: "#44C0A8" }}
          className="texturinaFont signUpBtnPos"
        >
          {" "}
          Sign Up{" "}
        </Button>
        <Box className="pos-absolute footerBox">
          <img src={WhiteLogo} className="rotate" />

          <Box display={"flex"} justifyContent={"center"} sx={{ mt: 5 }}>
            <Button className="homeBtn texturinaFont">HOME</Button>
            <Bolt fontSize="large" sx={{ mt: 2 }} />
            <Button className="homeBtn texturinaFont">REGISTER</Button>
          </Box>

          <img src={BMSLiveSvg} className="rotate" style={{ marginTop: 45 }} />
          <Typography className="texturinaFont" sx={{ mt: 2 }}>
            © | Privacy | Terms & Conditions
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
