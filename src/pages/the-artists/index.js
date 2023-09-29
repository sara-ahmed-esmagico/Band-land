import React from "react";
import "../../styles/Home.css";
import { Box, Typography } from "@mui/material";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Banner from "../../images/testBanner.svg";
import "../../styles/ticket.css";
import artistGreen from "../../images/artistGreen.png";
import artistOrange from "../../images/artistOrange.png";
import artistYellow from "../../images/artistYellow.png";
import artistBlue from "../../images/artistBlue.png";
import TextBanner from "../../images/Home/Text Banner.png";
import "../../styles/artist.css";

const Artists = () => {
  return (
    <>
      <Header mobileCss={"mobileViewBannerArtist"} midBanner={Banner} />

      <Box className="pos-absolute top-5 relative-top flex-center flex-col align-center text-center artistTop ">
       <Box className='scrollBox'>
       <Box className="pos-relative artistGrid ">
          <Box className="gridBox">
            <Box className="artistImage">
              <img src={artistGreen} alt="img" />
            </Box>
            <Box className="artistTextContainer">
              <img
                className="artistTextBannerLeft pos-absolute"
                src={TextBanner}
                alt="img"
              />
              <Typography className="pos-relative artistText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet enim gravida velit fringilla gravida vel in nulla.
                Pellentesque elementum ligula eget tellus accumsan dignissim.
                Cras lacinia velit quis mollis tempus. Nullam e get bibendum
                lectus. Sed iaculis erat quis odio sollicitudin, in tincidunt
                nunc tempus.
              </Typography>
            </Box>
          </Box>

          <Box className="gridBox">
            <Box className="artistImage">
              <img src={artistOrange} alt="img" />
            </Box>
            <Box className="artistTextContainer">
              <img
                className="artistTextBannerRight pos-absolute"
                src={TextBanner}
                alt="img"
              />
              <Typography className="pos-relative artistText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet enim gravida velit fringilla gravida vel in nulla.
                Pellentesque elementum ligula eget tellus accumsan dignissim.
                Cras lacinia velit quis mollis tempus. Nullam e get bibendum
                lectus. Sed iaculis erat quis odio sollicitudin, in tincidunt
                nunc tempus.
              </Typography>
            </Box>
          </Box>
          <Box className="gridBox">
            <Box className="artistImage">
              <img src={artistYellow} alt="img" />
            </Box>
            <Box className="artistTextContainer">
              <img
                className="artistTextBannerLeft pos-absolute"
                src={TextBanner}
                alt="img"
              />
              <Typography className="pos-relative artistText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet enim gravida velit fringilla gravida vel in nulla.
                Pellentesque elementum ligula eget tellus accumsan dignissim.
                Cras lacinia velit quis mollis tempus. Nullam e get bibendum
                lectus. Sed iaculis erat quis odio sollicitudin, in tincidunt
                nunc tempus.
              </Typography>
            </Box>
          </Box>

          <Box className="gridBox">
            <Box className="artistImage">
              <img src={artistGreen} alt="img" />
            </Box>
            <Box className="artistTextContainer">
              <img
                className="artistTextBannerRight pos-absolute"
                src={TextBanner}
                alt="img"
              />
              <Typography className="pos-relative artistText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet enim gravida velit fringilla gravida vel in nulla.
                Pellentesque elementum ligula eget tellus accumsan dignissim.
                Cras lacinia velit quis mollis tempus. Nullam e get bibendum
                lectus. Sed iaculis erat quis odio sollicitudin, in tincidunt
                nunc tempus.
              </Typography>
            </Box>
          </Box>
          <Box className="gridBox">
            <Box className="artistImage">
              <img src={artistBlue} alt="img" />
            </Box>
            <Box className="artistTextContainer">
              <img
                className="artistTextBannerLeft pos-absolute"
                src={TextBanner}
                alt="img"
              />
              <Typography className="pos-relative artistText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet enim gravida velit fringilla gravida vel in nulla.
                Pellentesque elementum ligula eget tellus accumsan dignissim.
                Cras lacinia velit quis mollis tempus. Nullam e get bibendum
                lectus. Sed iaculis erat quis odio sollicitudin, in tincidunt
                nunc tempus.
              </Typography>
            </Box>
          </Box>

          <Box className="gridBox">
            <Box className="artistImage">
              <img src={artistYellow} alt="img" />
            </Box>
            <Box className="artistTextContainer">
              <img
                className="artistTextBannerRight pos-absolute"
                src={TextBanner}
                alt="img"
              />
              <Typography className="pos-relative artistText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet enim gravida velit fringilla gravida vel in nulla.
                Pellentesque elementum ligula eget tellus accumsan dignissim.
                Cras lacinia velit quis mollis tempus. Nullam e get bibendum
                lectus. Sed iaculis erat quis odio sollicitudin, in tincidunt
                nunc tempus.
              </Typography>
            </Box>
          </Box>
          <Box className="gridBox">
            <Box className="artistImage">
              <img src={artistOrange} alt="img" />
            </Box>
            <Box className="artistTextContainer">
              <img
                className="artistTextBannerLeft pos-absolute"
                src={TextBanner}
                alt="img"
              />
              <Typography className="pos-relative artistText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet enim gravida velit fringilla gravida vel in nulla.
                Pellentesque elementum ligula eget tellus accumsan dignissim.
                Cras lacinia velit quis mollis tempus. Nullam e get bibendum
                lectus. Sed iaculis erat quis odio sollicitudin, in tincidunt
                nunc tempus.
              </Typography>
            </Box>
          </Box>

          <Box className="gridBox">
            <Box className="artistImage">
              <img src={artistBlue} alt="img" />
            </Box>
            <Box className="artistTextContainer">
              <img
                className="artistTextBannerRight pos-absolute"
                src={TextBanner}
                alt="img"
              />
              <Typography className="pos-relative artistText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet enim gravida velit fringilla gravida vel in nulla.
                Pellentesque elementum ligula eget tellus accumsan dignissim.
                Cras lacinia velit quis mollis tempus. Nullam e get bibendum
                lectus. Sed iaculis erat quis odio sollicitudin, in tincidunt
                nunc tempus.
              </Typography>
            </Box>
          </Box>
          <Box className="gridBox">
            <Box className="artistImage">
              <img src={artistGreen} alt="img" />
            </Box>
            <Box className="artistTextContainer">
              <img
                className="artistTextBannerLeft pos-absolute"
                src={TextBanner}
                alt="img"
              />
              <Typography className="pos-relative artistText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet enim gravida velit fringilla gravida vel in nulla.
                Pellentesque elementum ligula eget tellus accumsan dignissim.
                Cras lacinia velit quis mollis tempus. Nullam e get bibendum
                lectus. Sed iaculis erat quis odio sollicitudin, in tincidunt
                nunc tempus.
              </Typography>
            </Box>
          </Box>

          <Box className="gridBox">
            <Box className="artistImage">
              <img src={artistOrange} alt="img" />
            </Box>
            <Box className="artistTextContainer">
              <img
                className="artistTextBannerRight pos-absolute"
                src={TextBanner}
                alt="img"
              />
              <Typography className="pos-relative artistText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet enim gravida velit fringilla gravida vel in nulla.
                Pellentesque elementum ligula eget tellus accumsan dignissim.
                Cras lacinia velit quis mollis tempus. Nullam e get bibendum
                lectus. Sed iaculis erat quis odio sollicitudin, in tincidunt
                nunc tempus.
              </Typography>
            </Box>
          </Box>
          <Box className="gridBox">
            <Box className="artistImage">
              <img src={artistYellow} alt="img" />
            </Box>
            <Box className="artistTextContainer">
              <img
                className="artistTextBannerLeft pos-absolute"
                src={TextBanner}
                alt="img"
              />
              <Typography className="pos-relative artistText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet enim gravida velit fringilla gravida vel in nulla.
                Pellentesque elementum ligula eget tellus accumsan dignissim.
                Cras lacinia velit quis mollis tempus. Nullam e get bibendum
                lectus. Sed iaculis erat quis odio sollicitudin, in tincidunt
                nunc tempus.
              </Typography>
            </Box>
          </Box>

          <Box className="gridBox">
            <Box className="artistImage">
              <img src={artistGreen} alt="img" />
            </Box>
            <Box className="artistTextContainer">
              <img
                className="artistTextBannerRight pos-absolute"
                src={TextBanner}
                alt="img"
              />
              <Typography className="pos-relative artistText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet enim gravida velit fringilla gravida vel in nulla.
                Pellentesque elementum ligula eget tellus accumsan dignissim.
                Cras lacinia velit quis mollis tempus. Nullam e get bibendum
                lectus. Sed iaculis erat quis odio sollicitudin, in tincidunt
                nunc tempus.
              </Typography>
            </Box>
          </Box>
        </Box>
       </Box>

        <Box
          sx={{ mt: { xs: 5, lg: 10 } }}
          className="pos-relative flex-center flex-col align-center"
          style={{ backgroundColor: "coral" }}
        >
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Artists;
