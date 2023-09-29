import { Box, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import "../../styles/globalStyles.css";
import AlertMessage from "../../common/AlertMessage";
import "../../styles/Register.css";
import Footer from "../../common/Footer";
import TextBanner from "../../images/Home/Text Banner.png";
import Header from "../../common/Header";
import MidBanner2 from "../../images/testBanner.svg";
import { Token } from "../../common/Credential/credential";

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

  const handleTextInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const isValid = (data) => {
    if (
      data.name.trim() !== "" &&
      data.primary_email.trim() !== "" &&
      data.city.trim() !== "" &&
      data.primary_phoneNo.trim !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  // mobile no format +91-XXXXXXXXXX
  const isMobileNoValid = (mobileNumber) => {
    const pattern = /^\+91-\d{10}$/;
    if (!pattern.test(mobileNumber)) {
      setSnackbar({
        open: true,
        message: "Mobile No should be in +91-XXXXXXXXXX Format",
        severity: "error",
      });
      return false;
    } else {
      return true;
    }
  };

  const handleRegisterNow = (e) => {
    e.preventDefault();

    const data = {
      name: formValues?.name,
      primary_phoneNo: formValues?.phone,
      primary_email: formValues?.email,
      city: formValues?.city,
      i_agree_to_the_terms_and_conditions_: true,
    };

    if (isValid(data)) {
      if (isMobileNoValid(data.primary_phoneNo)) {
        try {
          fetch(
            "https://regsystem.bookmyshow.com/usersubmission/ET00370953?formType=Presales",
            {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                Authorization: "Bearer " + Token,
                "Content-Type": "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then((response) => {
              if (response?.status === 200) {
                setSnackbar({
                  open: true,
                  message: "You response has be recorded successfully!",
                  severity: "success",
                });
                setFormValues({
                  name: "",
                  phone: "",
                  email: "",
                  city: "",
                });
              } else {
                setSnackbar({
                  open: true,
                  message: "Something went wrong!",
                  severity: "error",
                });
              }
            });
        } catch (error) {
          setSnackbar({
            open: true,
            message: "Something went wrong!",
            severity: "error",
          });
        }
      }
    } else {
      setSnackbar({
        open: true,
        message: "All Fields are required!",
        severity: "error",
      });
    }
  };

  return (
    <>
      <Header
        banner2={true}
        mobileCss={"mobileViewBannerRegister"}
        midBanner={MidBanner2}
      />
      <Box className="pos-absolute top-5 relative-top flex-center flex-col align-center text-center registerTop  ">
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "50px", lg: "70px" },
            mt: { xs: 35, sm: 50 },
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
            alt="img"
          />
          <form
            className="pos-absolute form-width"
            onSubmit={handleRegisterNow}
          >
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
                  type="email"
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
                    cursor: "pointer",
                  }}
                  type="submit"
                >
                  {" "}
                  Register Now{" "}
                </button>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Box style={{ backgroundColor: "coral" }}>
          <Footer />
        </Box>

        <AlertMessage snackbar={snackbar} setSnackbar={setSnackbar} />
      </Box>
    </>
  );
};

export default Register;
