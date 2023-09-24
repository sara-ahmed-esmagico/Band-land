import React from "react";
import "../../styles/Home.css";
import HeaderBase from "../../images/BaseHeader.svg";
import SideBorder from "../../images/Border.png";
import MidBanner from "../../images/Banner@2x.png";
import FooterBase from "../../images/FooterBase.png";
import MainLogo from "../../images/Bandland Logo@3x@2x.png";
import TextBanner from "../../images/Home/Text Banner.png";
import { Box, Typography } from "@mui/material";
import OrangeBand from "../../images/Home/Orange Band.svg";

const Home = () => {
  return (
    <div className="full-screen-background flex-center flex-col align-center ">
      <img
        src={HeaderBase}
        width={"100%"}
        className="pos-absolute top-0 no-overlap"
      />
      <img src={MidBanner} width={"80%"} height={"100%"} />
      <img className="pos-absolute top-0" src={SideBorder} width={"100%"} />
      <Box className="pos-absolute relative-top flex-center flex-col align-center text-center ">
        <img src={MainLogo} className="relative-width" />
        <Typography
          className="font-texturina font-relative"
          width={"60%"}
          color={"white"}
        >
          EMBASSY INTERNATIONAL RIDING SCHOOL
        </Typography>
        <Typography
          sx={{ mt: 2 }}
          color={"white"}
          className="font-modesto-condensed text-shadow heading-relative"
        >
          ENTER BANDLAND
        </Typography>
        <Box className="pos-relative flex-center flex-col align-center ">
          <img className="relative-banner-width-height" src={TextBanner}  />
        </Box>
        <img style={{marginTop: '10px'}} src={OrangeBand} width={"100%"} />

        <Typography
          sx={{ mt: 2 }}
          color={"white"}
          className="font-modesto-condensed text-shadow heading-relative"
        >
          BE A CITIZEN OF BANDLAND!
        </Typography>
        <Box className="pos-relative flex-center flex-col align-center ">
          <img className="relative-banner-width-height" src={TextBanner} />
        </Box>
      </Box>

      <img className="no-overlap" src={FooterBase} width={"100%"} />
    </div>
  );
};

export default Home;
