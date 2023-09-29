import React from "react";
import "../../styles/Home.css";
import TextBanner from "../../images/Home/Text Banner.png";
import { Box, Button, Typography } from "@mui/material";
import redBand from "../../images/redBand.svg";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Banner from "../../images/testBanner.svg";
import greenBorder1 from "../../images/greenBorder1.png";
import greenBorder2 from "../../images/greenBorder2.png";
import "../../styles/about.css";

const About = () => {
  return (
    <>
      <Header mobileCss={"mobileViewBannerAbout"} midBanner={Banner} />
      <Box className="pos-absolute top-5 relative-top flex-center flex-col align-center text-center aboutTop ">
        <Typography
          sx={{ mt: {xs: 25 ,sm:36} }}
          color={"white"}
          className="font-modesto-condensed text-shadow heading-relative"
        >
          ENTER BANDLAND
        </Typography>

        <Box className="pos-relative flex-center flex-col align-center ">
          <img
            className="relative-banner-width-height"
            src={TextBanner}
            alt="img"
          />
          <Typography className="pos-absolute bannerText font-texturina z-index-3">
            Welcome to the state of Bandland. It doesn’t matter who you are or
            where you’re from. All that matters is that you belong. Sling that
            six-string & pledge allegiance to the band. It’s rock’s one true
            homecoming, back to Bangalore. Trends may come & go, but Bandland is
            forever.
          </Typography>
        </Box>
        <Box sx={{ mt: { sm: 5, lg: 10 } }} className="pos-relative">
          <img
            style={{ marginTop: "5px" }}
            src={redBand}
            className="red-banner"
            alt="img"
          />
          <Box className="pos-absolute top-0" width={"100%"}>
            <Typography
              sx={{ mt: { xs: 5, lg: 10 } }}
              color={"white"}
              className="font-modesto-condensed text-shadow heading-relative z-index-2"
            >
              BE A CITIZEN OF BANDLAND!
            </Typography>
            <Box
              sx={{ mt: { xs: 5, lg: 10 } }}
              className="pos-relative flex-center flex-col align-center"
            >
              <img
                className="relative-banner-width-height z-index-2"
                src={TextBanner}
                alt="img"
              />
              <img
                src={greenBorder1}
                alt="greenBorder"
                className="greenBorderLeft"
              />{" "}
              <img
                src={greenBorder2}
                alt="greenBorder"
                className=" greenBorderRight"
              />
              <Box className="pos-absolute top-5 flex-center flex-col align-center">
                <Typography className=" bannerText font-texturina z-index-3">
                  <strong>
                    Pass on the mic. Grab the stand. Take the stage.
                  </strong>
                  <br />
                  Join the inner circle to receive all festival updates, from
                  artist lineup to tickets, schedule, guides & more. This one’s
                  for you!
                </Typography>
                <Button
                  href="/register"
                  variant="contained"
                  className="font-modesto-condensed bg-color z-index-3"
                  sx={{ mt: { xs: 2 }, fontSize: { sm: "20px", lg: "30px" } }}
                >
                  {" "}
                  Sign Up{" "}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ mt: { xs: 5, lg: 10 } }}
          className="pos-relative flex-center flex-col align-center"
          style={{ backgroundColor: "#7B1AA7" }}
        >
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default About;
