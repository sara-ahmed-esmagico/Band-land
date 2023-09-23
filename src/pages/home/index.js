import { Bolt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "../../styles/globalStyles.css";
import BMSLiveSvg from "../../images/BMS LIVE.svg";
import WhiteLogo from "../../images/Bandland Logo White.svg";
// import MainLogo from "../../images/Bandland Logo@3x.png";
import HeaderBase from "../../images/BaseHeader.svg";
import MainBg from "../../images/homebg.svg";
import SideBorder from "../../images/Border.png";
// import MidBanner from "../../images/Banner1.png";
import TextBanner from "../../images/Text Banner.svg";
// import OrangeBand from "../../images/Orange Band.svg";
import FooterBase from "../../images/FooterBase.png";
// import BorderLine from "../../images/Line.svg";
import "../../App.css";

const Home = () => {
  return (
    <>
      <Box className="page-container">
        <img className="mainBaseStyle" src={MainBg} width={"100%"} />
        {/* <img className="pos-absolute orangeBand" src={OrangeBand} /> */}
        {/* <img className="sideBorder pos-absolute" src={SideBorder} /> */}
        <img className="pos-absolute registerSideBorder " src={SideBorder} />

        {/* <img className="midBanner pos-absolute" width={"60%"} src={MidBanner} /> */}
        {/* <img className="headerBaseStyle" src={HeaderBase} /> */}
        <img className="regHeaderBaseStyle pos-absolute " src={HeaderBase} />

        {/* <img className="pos-absolute mainLogo" src={MainLogo} /> */}
        {/* <img src={BfHalf} width={"1500px"} /> */}
        {/* <img className="pos-absolute footerBase" src={FooterBase} /> */}
        {/* <img className="pos-absolute footerBase" src={LeftShrub} />
        <img className="pos-absolute footerBase" src={RightShrub} /> */}

        {/* <Box className="headerBtn" display={"flex"} justifyContent={"center"}>
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
        </Box> */}

        {/* <Box className="pos-absolute school">
          <Typography
            style={{ fontFamily: "Texturina" }}
            className="schoolDesc"
            color={"white"}
          >
            EMBASSY INTERNATIONAL RIDING SCHOOL
          </Typography>
        </Box> */}
        <Box className="pos-absolute midBannerHead">
          <Typography className="midHeading">ENTER BANDLAND</Typography>
          <img className="textBanner" src={TextBanner} />
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
        </Box>

        <Typography className=" pos-absolute bannerBrief">
          Welcome to the state of Bandland. It doesn’t matter who you are or
          where you’re from. All that matters is that you belong. Sling that
          six-string & pledge allegiance to the band. It’s rock’s one true
          homecoming, back to Bangalore. Trends may come & go, but Bandland is
          forever.
        </Typography>
        <Box className="pos-absolute belowOrangeBand">
          <Typography className="midHeading">
            BE A CITIZEN OF BANDLAND!
          </Typography>
          <img className="secondTextBanner" src={TextBanner} />
        </Box>

        <Box className="pos-absolute secBriefPos">
          <Typography className="secondBannerSubBrief">
            <strong>Pass on the mic. Grab the stand. Take the stage.</strong>
            <br />
            Join the inner circle to receive all festival updates, from artist
            lineup to tickets, schedule, guides & more. This one’s for you!
          </Typography>
          <Button href="/register" variant="contained" className="signUpBtnPos">
            {" "}
            Sign Up{" "}
          </Button>
        </Box>

        {/* <Typography
          style={{ fontFamily: "Texturina" }}
          className="pos-absolute secondBannerBrief"
          sx={{ fontWeight: 600 }}
        >
          
        </Typography> */}

        {/* <Box className="footerBox pos-absolute">
          <img src={WhiteLogo} className="rotate" />

          <Box
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
          <Box >
            <Typography variant="caption" sx={{ fontFamily: "Texturina" }}>
              © | Privacy | Terms & Conditions
            </Typography>
          </Box>
        </Box> */}
        <img className="pos-absolute registerFooterBase" src={FooterBase} />
        {/* <img className="pos-absolute borderLine" src={BorderLine} /> */}
        <Box
          className="regHeaderBtn pos-absolute"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button href="/" className="homeBtn texturinaFont">
            HOME
          </Button>
          <Bolt />
          <Button href="/register" className="homeBtn texturinaFont">
            REGISTER
          </Button>
        </Box>

        <Box className="pos-absolute registerFooterBox">
          <img src={WhiteLogo} className="rotate logoSize" />

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className={"mt--5"}
          >
            <Button href="/" className="regHomeBtn">
              HOME
            </Button>
            <Bolt />
            <Button href="/register" className="regHomeBtn">
              REGISTER
            </Button>
          </Box>
          <img src={BMSLiveSvg} className="rotate BMSLogo" />
          <Box sx={{ mt: { xs: 0, sm: 2 } }}>
            <Typography
              variant="caption"
              sx={{ fontFamily: "Texturina", fontSize: { xs: 6, sm: 12 } }}
            >
              © | Privacy | Terms & Conditions
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
