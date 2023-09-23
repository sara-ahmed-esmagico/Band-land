import { Box, Button, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import "../../styles/globalStyles.css";
import { Bolt } from "@mui/icons-material";
import BMSLiveSvg from "../../images/BMS LIVE.svg";
import WhiteLogo from "../../images/Bandland Logo White.svg";
import MainLogo from "../../images/Bandland Logo@3x@2x.png";
import axios from "axios";
import AlertMessage from "../../common/AlertMessage";
import HeaderBase from "../../images/BaseHeader.svg";
// import MainBg from "../../images/BGOrange.svg";
import SideBorder from "../../images/Border.png";
// import MidBanner1 from "../../images/Banner1.png";
import MidBanner from "../../images/Banner2.png";
import FooterBase from "../../images/FooterBase.png";
import RegisterBanner from "../../images/Register Banner.svg";
import BorderLine from "../../images/Line.svg";

const Register = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleRegisterNow = () => {
    const data = {
      Name: formValues?.name,
      Phone: formValues?.phone,
      Email: formValues?.email,
      City: formValues?.city,
    };
    try {
      axios
        .post(
          "https://sheet.best/api/sheets/71d158a6-7d77-48b6-8296-caab074f402f",
          data
        )
        .then((response) => {
          console.log(response, "Adding Data to Sheet Best ");
          if (response?.status === 200) {
            setSnackbar({
              open: true,
              message: "You response has be recorded successfully!",
              severity: "success",
            });
          }
          setFormValues({
            name: "",
            phone: "",
            email: "",
            city: "",
          });
        });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Something went wrong!",
        severity: "error",
      });
    }

    console.log(formValues, " fv ");
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"coral"}
      className="register-page-container"
    >
      {/* <img className="mainBaseStyle" src={MainBg} width={"1500px"} /> */}
      <img className="pos-absolute registerSideBorder " src={SideBorder} />
      <img
        className="regMidBanner pos-absolute"
        src={MidBanner}
        width={"60%"}
      />
      <img className="regHeaderBaseStyle pos-absolute " src={HeaderBase} />
      <Box className="pos-absolute regMainLogoBox">
        <img className="regMainLogo" src={MainLogo} />
        <Typography className="regSchoolDesc" color={"white"}>
          EMBASSY INTERNATIONAL RIDING SCHOOL
        </Typography>
        <Typography className="regMidHeading">
          PLEDGE ALLEGIANCE TO THE BAND!
        </Typography>
        <Typography className="texturinaFont regMidHeadDesc" color={"white"}>
          Join the inner circle to receive all festival updates, from artist
          lineup to tickets, schedule, guides & more. This one’s for you!
        </Typography>
        <Box className={'regCenter'}>
          <img src={RegisterBanner} className="regBannerSize" />
          <form className="formStyle">
            <Grid container className="regBoxSize">
              <Grid
                item
                xs={6}
                display={"flex"}
                justifyContent={"end"}
                sx={{ mt: { sm: 1, md: 2, lg: 3 } }}
              >
                <Box className="registerBox">
                  <Typography
                    sx={{
                      p: { xs: 0, md: 1 },
                      textAlign: "start",
                      fontSize: { xs: "12px", sm: "15px", lg: "20px" },
                      height: "20px",
                    }}
                    className="texturinaFont"
                  >
                    Name:
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{ mt: { sm: 1, md: 2, lg: 3 } }}
                display={"flex"}
                justifyContent={"start"}
              >
                <input
                  className="registerTextfield"
                  size="small"
                  value={formValues?.name}
                  name="name"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid
                item
                xs={6}
                display={"flex"}
                justifyContent={"end"}
                sx={{ mt: { sm: 1, md: 2, lg: 3 } }}
              >
                <Box className="registerBox">
                  <Typography
                    sx={{
                      p: { xs: 0, md: 1 },

                      textAlign: "start",
                      fontSize: { xs: "12px", sm: "15px", lg: "20px" },
                      height: "20px",
                    }}
                    className="texturinaFont"
                  >
                    Phone No:
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{ mt: { sm: 1, md: 2, lg: 3 } }}
                display={"flex"}
                justifyContent={"start"}
              >
                <input
                  size="small"
                  className="registerTextfield"
                  value={formValues?.phone}
                  name="phone"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid
                item
                xs={6}
                display={"flex"}
                justifyContent={"end"}
                sx={{ mt: { sm: 1, md: 2, lg: 3 } }}
              >
                <Box className="registerBox">
                  <Typography
                    sx={{
                      p: { xs: 0, md: 1 },

                      textAlign: "start",
                      fontSize: { xs: "12px", sm: "15px", lg: "20px" },
                      height: "20px",
                    }}
                    className="texturinaFont"
                  >
                    Email ID:
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                xs={6}
                sx={{ mt: { sm: 1, md: 2, lg: 3 } }}
                display={"flex"}
                justifyContent={"start"}
              >
                <input
                  className="registerTextfield"
                  size="small"
                  value={formValues?.email}
                  name="email"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid
                item
                xs={6}
                display={"flex"}
                justifyContent={"end"}
                sx={{ mt: { sm: 1, md: 2, lg: 3 } }}
              >
                <Box className="registerBox">
                  <Typography
                    sx={{
                      p: { xs: 0, md: 1 },
                      textAlign: "start",
                      fontSize: { xs: "12px", sm: "15px", lg: "20px" },
                      height: "20px",
                    }}
                    className="texturinaFont"
                  >
                    City:
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{ mt: { sm: 1, md: 2, lg: 3 } }}
                display={"flex"}
                justifyContent={"start"}
              >
                <input
                  className="registerTextfield"
                  size="small"
                  value={formValues?.city}
                  name="city"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                sx={{ mt: { xs: 1, sm: 3, md: 5 } }}
              >
                <Button
                  size="small"
                  variant="contained"
                  className="texturinaFont"
                  sx={{
                    backgroundColor: "#44C0A8",
                    height: { xs: "22px",sm: "40px", lg: "60px" },
                  }}
                  onClick={handleRegisterNow}
                >
                  {" "}
                  Register Now{" "}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
      <img className="pos-absolute registerFooterBase" src={FooterBase} />
      <img className="pos-absolute borderLine" src={BorderLine} />
      <Box
        className="regHeaderBtn pos-absolute"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button href="/" className="homeBtn texturinaFont">
          HOME
        </Button>
        <Bolt className="boltBtn" />
        <Button href="/register" className="homeBtn texturinaFont">
          REGISTER
        </Button>
      </Box>

      <Box className="pos-absolute registerFooterBox">
        <img src={WhiteLogo} className="rotate logoSize" />

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className={"mt--5"}
        >
          <Button href="/" className="regHomeBtn">
            HOME
          </Button>
          <Bolt className="boltBtn" />
          <Button href="/register" className="regHomeBtn">
            REGISTER
          </Button>
        </Box>
        <img src={BMSLiveSvg} className="rotate BMSLogo" />
        <Box sx={{ mt: { xs: 0, sm: 2 } }}>
          <Typography
            variant="caption"
            sx={{ fontFamily: "Texturina", fontSize: { xs: 6, sm: 12 } }}
          >
            © | Privacy | Terms & Conditions
          </Typography>
        </Box>
      </Box>

      <AlertMessage snackbar={snackbar} setSnackbar={setSnackbar} />
    </Box>
  );
};

export default Register;
