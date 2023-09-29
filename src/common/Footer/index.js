import React from "react";
import Stars from "../../images/Home/Stars.png";
import Foot from "../../images/Home/Foot.png";
import { Bolt } from "@mui/icons-material";
import WhiteLogo from "../../images/Bandland Logo White.svg";
import BMSLiveSvg from "../../images/BMS LIVE.svg";
import "../../styles/Home.css";
import { Box, Button, Typography } from "@mui/material";
import FooterBase from "../../images/Home/Footer.png";
import "./footer.css";
import { Link as RouteLink } from "react-router-dom";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <div
      className="pos-relative flex-center flex-col align-center  bottom-0 "
      style={{ width: "100vw" }}
    >
      <img
        className="pos-absolute bottom-0 z-index-1"
        src={Foot}
        style={{ width: "90%" }}
        alt="img"
      />
      <img
        className="pos-absolute bottom-2 z-index-1"
        src={Stars}
        style={{ width: "100%" }}
        alt="img"
      />
      <Box className="pos-relative z-index-4 bottom-0 ">
        <img
          src={FooterBase}
          className="footer mobileFooterHeight "
          width={"100%"}
          alt="img"
        />
        <Box
          className="pos-absolute  z-index-4 flex flex-col align-center"
          width={"100%"}
          sx={{ top: "26%" }}
        >
          <img src={WhiteLogo} className="rotate" width={"20%"} alt="img" />

          <Box
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
            className="flex align-center"
          >
            <Link to="/" component={RouteLink}>
              <Button
                className="font-modesto-condensed btn-text"
                sx={{
                  px: 0,
                  fontSize: { xs: "20px", sm: "40px" },
                  mt: { xs: -1, sm: 0 },
                }}
              >
                HOME
              </Button>
            </Link>
            <Bolt
              sx={{ px: 0, visibility: { xs: "hidden", sm: "visible" } }}
              fontSize="large"
            />
            <Link to="/register" component={RouteLink}>
              <Button
                className="font-modesto-condensed btn-text"
                sx={{
                  mt: { xs: -7, sm: 0 },
                  fontSize: { xs: "20px", sm: "40px" },
                }}
              >
                REGISTER
              </Button>
            </Link>
            <Bolt
              sx={{ px: 0, display: { xs: "none", sm: "block" } }}
              fontSize="large"
            />
            <Link
              to={"/about"}
              component={RouteLink}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Button
                className="font-modesto-condensed btn-text"
                sx={{
                  mt: { xs: -7, sm: 0 },
                  fontSize: { xs: "20px", sm: "40px" },
                }}
              >
                ABOUT
              </Button>
            </Link>
            <Bolt
              sx={{ px: 0, display: { xs: "none", sm: "block" } }}
              fontSize="large"
            />
            <Link
              to="/the-artists"
              component={RouteLink}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Button
                className="font-modesto-condensed btn-text"
                sx={{
                  mt: { xs: -7, sm: 0 },
                  fontSize: { xs: "20px", sm: "40px" },
                }}
              >
                THE ARTISTS
              </Button>
            </Link>
            <Bolt
              sx={{ px: 0, display: { xs: "none", sm: "block" } }}
              fontSize="large"
            />
            <Link
              to="/tickets"
              component={RouteLink}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Button
                className="font-modesto-condensed btn-text"
                sx={{
                  mt: { xs: -7, sm: 0 },
                  fontSize: { xs: "20px", sm: "40px" },
                }}
              >
                TICKETS
              </Button>
            </Link>
            <Bolt
              sx={{ px: 0, display: { xs: "none", sm: "block" } }}
              fontSize="large"
            />
            <Link
              to="faq"
              component={RouteLink}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Button
                className="font-modesto-condensed btn-text"
                sx={{
                  mt: { xs: -7, sm: 0 },
                  fontSize: { xs: "20px", sm: "40px" },
                }}
              >
                FAQ
              </Button>
            </Link>
          </Box>
          <img
            src={BMSLiveSvg}
            className="rotate live-logo footerBGImg"
            alt="img"
          />
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
  );
};

export default Footer;
