import { Box, Button, Typography, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import "../../styles/globalStyles.css";
import axios from "axios";
import AlertMessage from "../../common/AlertMessage";
import "../../styles/Register.css";
import Footer from "../../common/Footer";
import TextBanner from "../../images/Home/Text Banner.png";

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
    <Box className="pos-absolute top-5 relative-top flex-center flex-col align-center text-center ">
      <Typography
        sx={{ fontSize: { xs: "30px", sm: "50px", lg: "70px" } }}
        className="text-shadow font-modesto-condensed"
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
        <form className="pos-absolute form-width" style={{ marginTop: 10 }}>
          <Grid container>
            <Grid item xs={6} sx={{ mt: 1 }}>
              <Typography
                backgroundColor="white"
                className="flex border font-texturina"
              >
                Name:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                className="border"
                size="small"
                value={formValues?.name}
                name="name"
                onChange={handleTextInputChange}
                sx={{ mt: { xs: 1 }, backgroundColor: "white " }}
              />
            </Grid>
            <Grid item xs={6} sx={{ mt: 1 }}>
              <Typography
                backgroundColor="white"
                className="flex border font-texturina"
              >
                Phone No:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                value={formValues?.phone}
                name="phone"
                className="border"
                onChange={handleTextInputChange}
                sx={{ mt: { xs: 1 }, backgroundColor: "white " }}
              />
            </Grid>
            <Grid item xs={6} sx={{ mt: 1 }}>
              <Typography
                backgroundColor="white"
                className="flex border font-texturina"
              >
                Email ID:
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                className="border"
                size="small"
                value={formValues?.email}
                name="email"
                onChange={handleTextInputChange}
                sx={{ mt: { xs: 1 }, backgroundColor: "white " }}
              />
            </Grid>
            <Grid item xs={6} sx={{ mt: 1 }}>
              <Typography
                backgroundColor="white"
                className="flex border font-texturina"
              >
                City:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                className="border"
                size="small"
                value={formValues?.city}
                name="city"
                onChange={handleTextInputChange}
                sx={{ mt: { xs: 1 }, backgroundColor: "white " }}
              />
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"center"}>
              <Button
                size="small"
                variant="contained"
                className="font-texturina"
                sx={{
                  backgroundColor: "#44C0A8",
                  mt: { xs: 3, sm: 2 },
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
      <Footer />

      <AlertMessage snackbar={snackbar} setSnackbar={setSnackbar} />
    </Box>
  );
};

export default Register;
