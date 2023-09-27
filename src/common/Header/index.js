import { Box, Button, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
import Foot from "../../images/Home/Foot.png";
import HeaderBase from "../../images/Header Base.png";
import SideBorder from "../../images/Home/SideBorder.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import MainLogo from "../../images/Bandland Logo@3x@2x.png";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Bolt } from "@mui/icons-material";
import "./header.css";
import Hamburger from "../Hamburger";

const Header = ({ mobileCss, midBanner, bandLandContainer }) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isScreenXtraSmall = useMediaQuery(theme.breakpoints.up("xs"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="full-screen-background flex-center flex-col align-center pos-relative ">
      <img
        className="pos-fixed top-0 rotate"
        src={Foot}
        style={{ width: "100%" }}
      />

      <img src={HeaderBase} className="pos-fixed top-0 z-index-5 header-base" />
      <Box className="pos-fixed top-0 z-index-5">
        {isScreenXtraSmall ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ height: "40px", visibility: { xs: "visible", sm: "hidden" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        ) : (
          ""
        )}
        {isSmallScreen ? (
          <Box
            className="flex-center align-center"
            sx={{ mt: { sm: -6, lg: -5 } }}
          >
            <Button
              href="/"
              className="font-modesto-condensed btn-text"
              sx={{
                fontSize: { xs: "20px", sm: "40px", lg: "50px" },
              }}
            >
              HOME
            </Button>
            <Bolt fontSize="large" />
            <Button
              href="/register"
              className="font-modesto-condensed btn-text"
              sx={{
                fontSize: { xs: "20px", sm: "40px", lg: "50px" },
              }}
            >
              REGISTER
            </Button>
          </Box>
        ) : (
          ""
        )}
      </Box>

      <Box className="flex-center flex-col align-center pos-relative ">
        <img
          src={midBanner}
          className={`z-index-3 banner-width banner-width-desktop mobile ${mobileCss}`}
        />
        <Box
          className={`flex-center flex-col align-center pos-absolute ${bandLandContainer}`}
        >
          <img src={MainLogo} className="relative-width" />
          <Typography
            className="font-texturina font-relative flex-center align-center "
            width={"100%"}
            color={"white"}
            style={{zIndex:"2"}}
          >
            EMBASSY INTERNATIONAL RIDING SCHOOL
          </Typography>
        </Box>
      </Box>
      <img
        className="top-0 z-index-2"
        style={{ position: isMediumScreen ? "fixed" : "absolute" }}
        src={SideBorder}
        width={"100%"}
      />
      <Drawer
        anchor="right" // Change to 'left' for a left-side menu
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
      >
        {/* Add your menu content here */}
        <div className="hamburger" style={{ width: "100vw", height: "100%" }}>
          <Hamburger handleDrawerToggle={handleDrawerToggle} />{" "}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
