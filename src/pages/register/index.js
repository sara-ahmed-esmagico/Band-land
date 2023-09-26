import { Box, Typography, Grid, input } from "@mui/material";
import React, { useState } from "react";
import "../../styles/globalStyles.css";
import axios from "axios";
import AlertMessage from "../../common/AlertMessage";
import "../../styles/Register.css";
import Footer from "../../common/Footer";
import TextBanner from "../../images/Home/Text Banner.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../common/Header";
import MidBanner from "../../images/Banner1.png";
import MidBanner2 from "../../images/Banner2.png";

const Register = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isScreenXtraSmall = useMediaQuery(theme.breakpoints.up("xs"));
  let windowWidth = document.documentElement.clientWidth;
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

  const handleTextInputChange = (e) => {
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

  };
  return (
    <>
      <Header
        banner2={true}
        mobileCss={"mobileViewBannerRegister"}
        midBanner={windowWidth < 700 ? MidBanner : MidBanner2}
        bandLandContainer={"bandLandRegisterContainer"}
      />
      <Box className="pos-absolute top-5 relative-top flex-center flex-col align-center text-center registerTop  ">
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "50px", lg: "70px" },
            mt: 50,
            zIndex: 2,
          }}
          className="text-shadow text-stroke font-modesto-condensed"
          color={"white"}
          width={{ xs: "75%", sm: "100%" }}
        >
          PLEDGE ALLEGIANCE TO THE BAND!
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "10px", sm: "20px", lg: "30px" } }}
          className="font-texturina"
          color={"white"}
          width={{ xs: "70%", sm: "75%", lg: "50%" }}
        >
          Join the inner circle to receive all festival updates, from artist
          lineup to tickets, schedule, guides & more. This one’s for you!
        </Typography>
        <Box className={"pos-relative flex-center align-center z-index-4"}>
          <img
            className="form-background"
            src={TextBanner}
            style={{ marginTop: 30 }}
          />
          <form className="pos-absolute form-width">
            <Grid container>
              <Grid item xs={5}>
                <Typography
                  backgroundColor="white"
                  className="flex border font-texturina"
                >
                  Name:
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <input
                  style={{ width: "100%", height: "28px" }}
                  className="border"
                  size="small"
                  value={formValues?.name}
                  name="name"
                  onChange={handleTextInputChange}
                />
              </Grid>
              <Grid item xs={5} sx={{ mt: { xs: 2 } }}>
                <Typography
                  backgroundColor="white"
                  className="flex border font-texturina"
                >
                  Phone No:
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ mt: { xs: 2 } }}>
                <input
                  style={{ width: "100%", height: "28px" }}
                  value={formValues?.phone}
                  name="phone"
                  className="border"
                  onChange={handleTextInputChange}
                />
              </Grid>
              <Grid item xs={5} sx={{ mt: { xs: 2 } }}>
                <Typography
                  backgroundColor="white"
                  className="flex border font-texturina"
                >
                  Email ID:
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ mt: { xs: 2 } }}>
                <input
                  style={{ width: "100%", height: "28px" }}
                  value={formValues?.email}
                  name="email"
                  onChange={handleTextInputChange}
                />
              </Grid>
              <Grid item xs={5} sx={{ mt: { xs: 2 } }}>
                <Typography
                  backgroundColor="white"
                  className="flex border font-texturina"
                >
                  City:
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ mt: { xs: 2 } }}>
                <input
                  style={{ width: "100%", height: "28px" }}
                  value={formValues?.city}
                  name="city"
                  onChange={handleTextInputChange}
                />
              </Grid>
              <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                <button
                  className="font-modesto-condensed text-stroke"
                  style={{
                    backgroundColor: "#44C0A8",
                    fontSize: "30px",
                    color: "#fffde7",
                    marginTop: "12px",
                  }}
                  onClick={handleRegisterNow}
                >
                  {" "}
                  Register Now{" "}
                </button>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Footer />

        <AlertMessage snackbar={snackbar} setSnackbar={setSnackbar} />
      </Box>
    </>
  );
};

export default Register;
