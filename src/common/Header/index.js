import { Box, Typography } from "@mui/material";
import React from "react";
import Foot from "../../images/Home/Foot.png";
import HeaderBase from "../../images/BaseHeader.svg";
import SideBorder from "../../images/Home/SideLeaves.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import MidBanner from "../../images/Banner.png";
import MainLogo from "../../images/Bandland Logo@3x@2x.png";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("xs"));

  return (
    <div  className="full-screen-background flex-center flex-col align-center pos-relative ">
      <img
        className="pos-fixed top-0 rotate"
        src={Foot}
        style={{ width: "100%" }}
      />
      <img
        src={HeaderBase}
        width={"100%"}
        className="pos-fixed top-0 z-index-4"
      />
      <Box className="flex-center flex-col align-center pos-relative ">
        <img
          src={MidBanner}
          className="z-index-3 banner-width"
        />
        <Box className="flex-center flex-col align-center pos-absolute top-5">
          <img src={MainLogo} className="relative-width" />
          <Typography
            className="font-texturina font-relative flex-center align-center "
            width={"100%"}
            color={"white"}
          >
            EMBASSY INTERNATIONAL RIDING SCHOOL
          </Typography>
        </Box>
      </Box>
      <img
        className="pos-fixed top-0 z-index-2"
        src={SideBorder}
        width={"100%"}
      />
    </div>
  );
};

export default Header;
