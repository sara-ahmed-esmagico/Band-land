import { Bolt } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "../../styles/globalStyles.css";
import BMSLiveSvg from "../../images/BMS LIVE.svg";
import WhiteLogo from "../../images/Bandland Logo White.svg";
import MainLogo from '../../images/Bandland Logo@3x.png'

const Home = () => {

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Button href="/" className="homeBtn texturinaFont">
          HOME
        </Button>
        <Bolt fontSize="large" sx={{ mt: 2 }} />

        <Button href="/register" className="homeBtn texturinaFont">
          REGISTER
        </Button>
      </Box>

      <Typography className="texturinaFont">PRESENTS</Typography>
      <img src={MainLogo} />

      <Typography className="texturinaFont">
        EMBASSY INTERNATIONAL RIDING SCHOOL
      </Typography>
      <Typography className="texturinaFont">
        Welcome to the state of Bandland. It doesn’t matter who you are or where
        you’re from. All that matters is that you belong. Sling that six-string
        & pledge allegiance to the band. It’s rock’s one true homecoming, back
        to Bangalore. Trends may come & go, but Bandland is forever.
      </Typography>
      <Typography className="midHeading">BE A CITIZEN OF BANDLAND!</Typography>
      <Typography className="texturinaFont" sx={{ fontWeight: 600 }}>
        Pass on the mic. Grab the stand. Take the stage.
      </Typography>
      <Typography className="texturinaFont">
        Join the inner circle to receive all festival updates, from artist
        lineup to tickets, schedule, guides & more. This one’s for you!
      </Typography>
      <Button
        href="/register"
        variant="contained"
        sx={{ backgroundColor: "#44C0A8" }}
        className="texturinaFont"
      >
        {" "}
        Sign Up{" "}
      </Button>
      <img src={WhiteLogo} className="rotate" />

      <Box display={"flex"} justifyContent={"center"}>
        <Button className="homeBtn texturinaFont">HOME</Button>
        <Bolt fontSize="large" sx={{ mt: 2 }} />
        <Button className="homeBtn texturinaFont">REGISTER</Button>
      </Box>
        
      <img src={BMSLiveSvg} className="rotate" />
      <Typography className="texturinaFont">
        © | Privacy | Terms & Conditions
      </Typography>
    </Box>
  );
};

export default Home;
