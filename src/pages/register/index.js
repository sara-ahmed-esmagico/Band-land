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

    console.log(name, value, "m");
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

          // setFormValues({
          //   name: "",
          //   phone: "",
          //   email: "",
          //   city: "",
          // })
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
      <img className="headerBaseStyle" src={HeaderBase} />
      <Box display={"flex"} justifyContent={"center"}>
        <Button className="homeBtn texturinaFont">HOME</Button>
        <Bolt fontSize="large" sx={{ mt: 2 }} />
        <Button className="homeBtn texturinaFont">REGISTER</Button>
      </Box>

      <Typography className="texturinaFont">PRESENTS</Typography>
      <img src={MainLogo} />

      <Typography className="texturinaFont">
        PLEDGE ALLEGIANCE TO THE BAND!
      </Typography>
      <Typography className="texturinaFont">
        Join the inner circle to receive all festival updates, from artist
        lineup to tickets, schedule, guides & more. This one’s for you!
      </Typography>
      <Typography className="midHeading">BE A CITIZEN OF BANDLAND!</Typography>
      <Typography className="texturinaFont" sx={{ fontWeight: 600 }}>
        Pass on the mic. Grab the stand. Take the stage.
      </Typography>

      <form className="form-group">
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

      <img src={WhiteLogo} className="rotate" />

      <Box display={"flex"} justifyContent={"center"}>
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

      <img src={BMSLiveSvg} className="rotate" />
      <Typography className="texturinaFont">
        © | Privacy | Terms & Conditions
      </Typography>

      <AlertMessage snackbar={snackbar} setSnackbar={setSnackbar} />
    </Box>
  );
};

export default Register;
