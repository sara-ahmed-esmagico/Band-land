import React from "react";
import "../../styles/Home.css";
import TextBanner from "../../images/Home/Text Banner.png";
import { Box, Button, Grid, Typography } from "@mui/material";
import OrangeBand from "../../images/Home/Orange Band.png";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Banner from "../../images/testBanner.svg";
import gogoDollBanner from "../../images/gogoDollBanner.svg";

const Home = () => {
  return (
    <>
      <Header mobileCss={"mobileViewBannerHome"} midBanner={Banner} />

      <Box className="pos-absolute top-5 relative-top flex-center flex-col align-center text-center homeTop">
        <Box
          sx={{ mt: { sm: 15, lg: 15 } }}
          className="pos-relative homeMargin"
        >
          <img src={gogoDollBanner} className="gogoDollBanner" alt="img" />
        </Box>
        <Typography
          sx={{ mt: 25 }}
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
            src={OrangeBand}
            className="orange-banner"
            alt="img"
          />
          <Box className="pos-absolute top-0" width={"100%"}>
            <Grid className="desc" container>
              <Grid
                item
                xs={12}
                sm={5.5}
                display={{ sm: "flex" }}
                justifyContent={{ sm: "end" }}
              >
                <Typography className="midDesc1">2</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display={{ xs: "flex", sm: "grid" }}
                justifyContent={{ xs: "center", sm: "start" }}
              >
                <Typography
                  sx={{ mt: { xs: -5, sm: 5 } }}
                  display={{ sm: "flex" }}
                  className="midDesc2"
                >
                  DAYS.
                </Typography>
                <Typography sx={{ mt: { xs: -5 } }} className="midDesc2">
                  STAGES.
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={5.5}
                sx={{ mt: { xs: -2 } }}
                display={{ sm: "flex" }}
                justifyContent={{ sm: "end" }}
              >
                <Typography className="midDesc1">12</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display={{ sm: "grid" }}
                justifyContent={{ xs: "center", sm: "start" }}
              >
                <Typography
                  sx={{ mt: { xs: -5, sm: 3 } }}
                  display={{ sm: "flex" }}
                  className="midDesc2"
                >
                  POWER PACKED
                </Typography>

                <Typography
                  sx={{ mt: { xs: -2, sm: -5 } }}
                  className="midDesc2"
                >
                  PERFORMANCES
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>

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
          <Box className="pos-absolute top-5 flex-center flex-col align-center">
            <Typography className=" bannerText font-texturina z-index-3">
              <strong>Pass on the mic. Grab the stand. Take the stage.</strong>
              <br />
              Join the inner circle to receive all festival updates, from artist
              lineup to tickets, schedule, guides & more. This one’s for you!
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
          <Box style={{ backgroundColor: "#44c0a8" }}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
