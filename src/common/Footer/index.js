import React from 'react'
import Stars from "../../images/Home/Stars.png";
import Foot from "../../images/Home/Foot.png";
import { Bolt } from "@mui/icons-material";
import WhiteLogo from "../../images/Bandland Logo White.svg";
import BMSLiveSvg from "../../images/BMS LIVE.svg";
import "../../styles/Home.css";
import { Box, Button, Typography } from '@mui/material';
import FooterBase from "../../images/Home/Footer.png";

const Footer = () => {
    
  return (
    <div className='pos-relative flex-center flex-col align-center'>
      <img
          className="pos-absolute bottom-0 z-index-1"
          src={Foot}
          style={{ width: "100%" }}
        />
        <img
          className="pos-absolute bottom-2 z-index-1"
          src={Stars}
          style={{ width: "100%" }}
        />
        <Box className="pos-relative z-index-4">
          <img src={FooterBase} className="footer" />
          <Box
            className="pos-absolute  z-index-4 flex flex-col align-center"
            width={"100%"}
            sx={{ top: "30%" }}
          >
            <img src={WhiteLogo} className="rotate" width={"20%"} />
            
            <Box sx={{flexDirection: {xs: "column", sm: 'row'} }} className="flex align-center">
              <Button
                href="/"
                className="font-modesto-condensed btn-text"
                sx={{ px: 0, fontSize: { xs: "20px", sm: "40px" }, mt: {xs: -1 ,sm: 0}}}

              >
                HOME
              </Button>
              <Bolt
                sx={{ px: 0, visibility: {xs: 'hidden', sm: 'visible'} }}
                fontSize='large'
              />
              <Button
                href="/register"
                className="font-modesto-condensed btn-text"
                sx={{ mt: {xs: -7 ,sm: 0}, fontSize: { xs: "20px", sm: "40px" } }}
              >
                REGISTER
              </Button>
            </Box>
            <img src={BMSLiveSvg} className="rotate live-logo" />
            <Box sx={{ mt: { xs: 0, sm: 2 } }}>
              <Typography
                variant="caption"
                className="text-texturina"
                sx={{ fontSize: { xs: 6, sm: 12 } }}
              >
                © | Privacy | Terms & Conditions
              </Typography>
            </Box>
          </Box>
        </Box>
    </div>
  )
}

export default Footer
