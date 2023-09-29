import { Box, Button, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import Foot from "../../images/Home/Foot.png";
import HeaderBase from "../../images/Header Base.png";
import SideBorder from "../../images/Home/SideBorder.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Bolt } from "@mui/icons-material";
import "./header.css";
import Hamburger from "../Hamburger";
import { useLocation, Link } from "react-router-dom";
import ReactGA from "react-ga";

const Header = ({ mobileCss, midBanner }) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isScreenXtraSmall = useMediaQuery(theme.breakpoints.up("xs"));

  const { pathname } = useLocation();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="full-screen-background flex-center flex-col align-center pos-relative ">
      <img
        className="pos-fixed top-0 rotate"
        src={Foot}
        alt="img"
        style={{ width: "100%" }}
      />

      <img
        src={HeaderBase}
        className={`pos-fixed top-0 z-index-5 header-base`}
        alt="img"
      />
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
            className="flex-center align-center navWidth"
            sx={{ mt: { sm: -5, lg: -3 } }}
          >
            <Link to={"/"}>
              <Button
                className={`font-modesto-condensed btn-text`}
                sx={{
                  fontSize: { xs: "20px", sm: "30px", lg: "40px" },
                }}
                style={{ color: pathname === "/" && "white" }}
              >
                HOME
              </Button>
            </Link>
            <Bolt fontSize="large" />
            <Link to={"/register"}>
              <Button
                className={`font-modesto-condensed btn-text`}
                sx={{
                  fontSize: { xs: "20px", sm: "30px", lg: "40px" },
                }}
                style={{ color: pathname === "/register" && "white" }}
              >
                REGISTER
              </Button>
            </Link>

            <Bolt fontSize="large" />
            <Link to={"/about"}>
              <Button
                className={`font-modesto-condensed btn-text ${
                  pathname === "/about" && "navActive"
                } `}
                sx={{
                  fontSize: { xs: "20px", sm: "30px", lg: "40px" },
                }}
                style={{ color: pathname === "/about" && "white" }}
              >
                ABOUT
              </Button>
            </Link>
            <Bolt fontSize="large" />
            <Link to="/the-artists">
              <Button
                className={`font-modesto-condensed btn-text ${
                  pathname === "/the-artists" && "navActive"
                } `}
                sx={{
                  fontSize: { xs: "20px", sm: "30px", lg: "40px" },
                }}
                style={{ color: pathname === "/the-artists" && "white" }}
              >
                THE ARTISTS
              </Button>
            </Link>
            <Bolt fontSize="large" />
            <Link to="/tickets">
              <Button
                className="font-modesto-condensed btn-text"
                sx={{
                  fontSize: { xs: "20px", sm: "30px", lg: "40px" },
                }}
                style={{ color: pathname === "/tickets" && "white" }}
              >
                TICKETS
              </Button>
            </Link>
            <Bolt fontSize="large" />
            <Link to="/faq">
              <Button
                className={`font-modesto-condensed btn-text `}
                sx={{
                  fontSize: { xs: "20px", sm: "30px", lg: "40px" },
                }}
                style={{ color: pathname === "/faq" && "white" }}
              >
                FAQ
              </Button>
            </Link>
          </Box>
        ) : (
          ""
        )}
      </Box>

      <Box className="flex-center flex-col align-center pos-relative marginNegative">
        <img
          src={midBanner}
          className={`z-index-3 banner-width banner-width-desktop mobile ${mobileCss}`}
          alt="img"
        />
      </Box>
      <img
        className="top-0 z-index-2"
        style={{ position: isMediumScreen ? "fixed" : "absolute" }}
        src={SideBorder}
        width={"100%"}
        alt="img"
      />
      <Drawer
        anchor="right" // Change to 'left' for a left-side menu
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
      >
        {/* Add your menu content here */}
        <div className="hamburger" style={{ width: "100vw", height: "140%" }}>
          <Hamburger handleDrawerToggle={handleDrawerToggle} />{" "}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
