import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Close,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import "../../styles/Home.css";
import WhiteLogo from "../../images/Bandland Logo White.svg";
import { Box, Button } from "@mui/material";
import Stars from "../../images/Home/Stars.png";
import Foot from "../../images/Home/Foot.png";

const HamburgerButton = (props) => {
  const { handleDrawerToggle } = props;
  return (
    <div className="pos-relative flex-center flex-col align-center">
      <img
        className="pos-fixed top-0 rotate"
        src={Foot}
        style={{ width: "100%" }}
      />

      <IconButton sx={{mt:2}} onClick={handleDrawerToggle}>
        <Close fontSize="large" sx={{color: '#fffde7'}} />
      </IconButton>
      <img
        src={WhiteLogo}
        className="rotate"
        width={"80%"}
        style={{ marginTop: 50 }}
      />

      <Button
        href="/"
        className="font-modesto-condensed btn-text"
        sx={{
          fontSize: 60,
          color: "#fffde7 !important",
          mt: 5,
        }}
      >
        HOME
      </Button>
      <Button
        href="/register"
        className="font-modesto-condensed btn-text"
        sx={{
          fontSize: 60,
          color: "#fffde7 !important",
          mt: -5,
        }}
      >
        REGISTER
      </Button>
      <Box className="flex-center z-index-2" sx={{ mt: 5 }}>
        <IconButton>
          <Instagram fontSize="large" sx={{ color: "#fffde7" }} />
        </IconButton>
        <IconButton>
          <Facebook fontSize="large" sx={{ color: "#fffde7" }} />
        </IconButton>
        <IconButton>
          <Twitter fontSize="large" sx={{ color: "#fffde7" }} />
        </IconButton>
        <IconButton>
          <YouTube fontSize="large" sx={{ color: "#fffde7" }} />
        </IconButton>
      </Box>

      <img
        className="pos-fixed z-index-1" 
        src={Stars}
        style={{ width: "150%", bottom: '-10%' }}
      />
    </div>
  );
};

export default HamburgerButton;
