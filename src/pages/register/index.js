import { Box, Button, Typography, TextField, Grid } from "@mui/material";
import React, { useState } from "react";
import "../../styles/globalStyles.css";
import { Bolt } from "@mui/icons-material";
import BMSLiveSvg from "../../images/BMS LIVE.svg";
import WhiteLogo from "../../images/Bandland Logo White.svg";
import MainLogo from "../../images/Bandland Logo@3x.png";
import axios from "axios";
import AlertMessage from "../../common/AlertMessage";
import HeaderBase from "../../images/Header Base.png";
import MainBg from "../../images/BGOrange.svg";
import SideBorder from "../../images/Border.png";
import MidBanner from "../../images/Banner2.png";
import FooterBase from "../../images/Footer Base.png";
import RegisterBanner from "../../images/Register Banner.svg";

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
    >
      <img className="mainBaseStyle" src={MainBg} width={"1500px"} />
      <img className="pos-absolute sideBorder" src={SideBorder} height={'230%'} width={'90%'} />
      <img className="midBanner pos-absolute" src={MidBanner} width={'60%'}  />
      <img className="headerBaseStyle pos-absolute " src={HeaderBase} />
      <img className="pos-absolute mainLogo" src={MainLogo} />
      <img className="pos-absolute registerFooterBase" src={FooterBase} />
      <img className="pos-absolute registerBanner" src={RegisterBanner} />
      <Box
        className="headerBtn pos-absolute "
        display={"flex"}
        justifyContent={"center"}
      >
        <Button className="homeBtn texturinaFont">HOME</Button>
        <Bolt fontSize="large" sx={{ mt: 2 }} />
        <Button className="homeBtn texturinaFont">REGISTER</Button>
        <Bolt fontSize="large" sx={{ mt: 2 }} />
        <Button className="homeBtn texturinaFont">ABOUT</Button>
        <Bolt fontSize="large" sx={{ mt: 2 }} />
        <Button className="homeBtn texturinaFont">THE ARTISTS</Button>
        <Bolt fontSize="large" sx={{ mt: 2 }} />
        <Button className="homeBtn texturinaFont">TICKETS</Button>
        <Bolt fontSize="large" sx={{ mt: 2 }} />
        <Button className="homeBtn texturinaFont">fAQ</Button>
      </Box>

      <Box className="pos-absolute school">
        <Typography
          className="texturinaFont schoolDesc"
          color={"white"}
          variant="h6"
        >
          EMBASSY INTERNATIONAL RIDING SCHOOL
        </Typography>
      </Box>

      <Box className="pos-absolute midBannerHead">
        <Typography className="midHeading" sx={{ fontSize: 40 }}>
          PLEDGE ALLEGIANCE TO THE BAND!
        </Typography>
      </Box>

      <Typography
        className="texturinaFont pos-absolute midBannerDesc"
        color={"white"}
      >
        Join the inner circle to receive all festival updates, from artist
        lineup to tickets, schedule, guides & more. This one’s for you!
      </Typography>

      <form className="pos-absolute registerForm">
        <Grid container>
          <Grid
            item
            xs={6}
            display={"flex"}
            justifyContent={"end"}
            sx={{ mt: 3 }}
          >
            <Box className="registerBox">
              <Typography sx={{ p: 1 }} className="texturinaFont">
                Name:
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ mt: 3 }}>
            <TextField
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
            sx={{ mt: 3 }}
          >
            <Box className="registerBox">
              <Typography sx={{ p: 1 }} className="texturinaFont">
                Phone No:
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ mt: 3 }}>
            <TextField
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
            sx={{ mt: 3 }}
          >
            <Box className="registerBox">
              <Typography sx={{ p: 1 }} className="texturinaFont">
                Email ID:
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} sx={{ mt: 3 }}>
            <TextField
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
            sx={{ mt: 3 }}
          >
            <Box className="registerBox">
              <Typography sx={{ p: 1 }} className="texturinaFont">
                City:
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ mt: 3 }}>
            <TextField
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
            sx={{ mt: 3 }}
          >
            <Button
              variant="contained"
              className="texturinaFont"
              sx={{ backgroundColor: "#44C0A8" }}
              onClick={handleRegisterNow}
            >
              {" "}
              Register Now{" "}
            </Button>
          </Grid>
        </Grid>
      </form>

      <Box className="pos-absolute registerFooterBox">
        <img src={WhiteLogo} className="rotate" />

        <Box display={"flex"} justifyContent={"center"} sx={{ mt: 5 }}>
          <Button className="homeBtn texturinaFont">HOME</Button>
          <Bolt fontSize="large" sx={{ mt: 2 }} />
          <Button className="homeBtn texturinaFont">REGISTER</Button>
          <Bolt fontSize="large" sx={{ mt: 2 }} />
          <Button className="homeBtn texturinaFont">ABOUT</Button>
          <Bolt fontSize="large" sx={{ mt: 2 }} />
          <Button className="homeBtn texturinaFont">THE ARTISTS</Button>
          <Bolt fontSize="large" sx={{ mt: 2 }} />
          <Button className="homeBtn texturinaFont">TICKETS</Button>
          <Bolt fontSize="large" sx={{ mt: 2 }} />
          <Button className="homeBtn texturinaFont">fAQ</Button>
        </Box>

        <img src={BMSLiveSvg} className="rotate" style={{ marginTop: 45 }} />
        <Typography className="texturinaFont" sx={{ mt: 2 }}>
          © | Privacy | Terms & Conditions
        </Typography>
      </Box>

      <AlertMessage snackbar={snackbar} setSnackbar={setSnackbar} />
    </Box>
  );
};

export default Register;
