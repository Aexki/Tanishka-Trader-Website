import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import SwipeableViews from "react-swipeable-views";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

const steps = [
  {
    index: 1,
    label: "Customer Centricity",
    description: `Our customers are at the core of our beliefs.
      They inspire us to go the extra mile and create products that are of the highest quality and best in the world.`,
    imgPath: "slide1.jpg",
  },
  {
    index: 2,
    label: "Technology and Innovation",
    description:
      "Our world-class technology creates solutions that result in efficiency and brings more value to our customers.",
    imgPath: "slide2.jpg",
  },
  {
    index: 3,
    label: "Collaboration",
    description:
      "Through collaborations, we deliver unique and innovative experiences to our customers.",
    imgPath: "slide3.jpeg",
  },
  {
    index: 4,
    label: "Inclusive Growth",
    description:
      "We are socially aware and believe in educating, empowering, and creating a sustainable environment.",
    imgPath: "slide4.jpg",
  },
];

export const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box style={{ marginTop: "0" }}>
      <Grid container>
        <img
          src="bg2.jpg"
          alt="background"
          style={{
            width: "100%",
            minHeight: "100vh",
            position: "absolute",
            zIndex: -5,
          }}
        />
        <Grid item xs={0} lg={6}></Grid>
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              minHeight: { xs: "80vh", md: "70vh" },
              margin: { xs: "50px 0 0 0", md: "80px 0 0 50px" },
              padding: { xs: "0 0 10px 0" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexFlow: "column",
            }}
          >
            <Typography
              fontFamily={"Poiret One"}
              variant="h3"
              textAlign={"center"}
            >
              Welcome to <br /> Tanishka Traders
            </Typography>
            <Typography
              fontFamily={"Raleway"}
              variant="h6"
              sx={{ margin: "30px 0 0 0", fontWeight: 500 }}
            >
              Experience the Best in Class
            </Typography>
            <Typography
              fontFamily={"Raleway"}
              sx={{ margin: "30px 0 0 0", fontWeight: 1000 }}
              textAlign={"center"}
            >
              Tanishka Traders is leading the distribution of all
              <br />
              household amenities in Odisha.
            </Typography>
            <Link
              to={"/category"}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  margin: "50px 0 0 0",
                  borderRadius: 0,
                  backgroundColor: "#d51b20",
                  fontFamily: "Raleway",
                }}
                className={"navbarExplore"}
              >
                Explore
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          margin: "120px 0 00px 0",
          paddingTop: "50px",
          backgroundColor: "white",
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{ textAlign: "center", margin: "20px 0" }}
        >
          <img
            src="247Service.png"
            alt="onTimeDelivery"
            width={"200px"}
            height={"200px"}
          />
          <Typography
            fontFamily={"Raleway"}
            textAlign={"center"}
            sx={{ margin: "10px 0", fontWeight: 1000 }}
          >
            <b>24 HOUR CUSTOMER SUPPORT</b>
          </Typography>
          <Typography
            fontFamily={"Raleway"}
            textAlign={"center"}
            sx={{ fontWeight: 500 }}
          >
            24/7 Customer support for
            <br /> our Valuable Client
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ textAlign: "center", margin: "20px 0" }}
        >
          <img
            src="bestQualityUpdated.png"
            alt="bestQuality"
            width={"200px"}
            height={"200px"}
          />
          <Typography
            fontFamily={"Raleway"}
            textAlign={"center"}
            sx={{ margin: "10px 0", fontWeight: 1000 }}
          >
            <b>BEST QUALITY</b>
          </Typography>
          <Typography
            fontFamily={"Raleway"}
            textAlign={"center"}
            sx={{ fontWeight: 500 }}
          >
            We Provide Best Quality of Household
            <br /> amenities with Best Rate.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{ textAlign: "center", margin: "20px 0" }}
        >
          <img
            src="onTimeDelivery.png"
            alt="onTimeDelivery"
            width={"200px"}
            height={"200px"}
          />
          <Typography
            fontFamily={"Raleway"}
            textAlign={"center"}
            sx={{ margin: "10px 0", fontWeight: 1000 }}
          >
            <b>ON-TIME DELIVERY</b>
          </Typography>
          <Typography
            fontFamily={"Raleway"}
            textAlign={"center"}
            sx={{ fontWeight: 500 }}
          >
            We have the largest distributor and Dealer
            <br /> network to supply products
            <br /> in Global Market.
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <img
          src="bg.jpg"
          alt="background"
          style={{
            width: "100%",
            minHeight: "100vh",
            position: "absolute",
            zIndex: -5,
          }}
        />
        <Grid container>
          <Grid item xs={1} lg={2}></Grid>
          <Grid item xs={10} lg={4}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255)",
                minHeight: "70vh",
                margin: { xs: "30px 0 30px 0", md: "150px 0 0 50px" },
                display: "flex",
                justifyContent: "center",
                flexFlow: "column",
              }}
            >
              <Typography
                fontFamily={"Raleway"}
                variant="h4"
                sx={{
                  padding: { xs: "30px 0 0 0", md: "0 0 0 50px" },
                  textAlign: { xs: "center", md: "left" },
                  fontWeight: "bold",
                }}
              >
                About Us
              </Typography>
              <Typography
                fontFamily={"Raleway"}
                sx={{
                  padding: "30px 50px 0 50px",
                  fontSize: "14px",
                  fontWeight: 1000,
                  wordWrap: "normal",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Incepted in the year 2016 at Surat (Gujarat, India), we
                "Wellgreen Pillow Xpress" are a Partnership firm that is an
                affluent manufacturer of a wide array of Bed Pillows, Medical
                Pillow, Sofa Cushion, Bolster and Bedsheet. We provide these
                products as per the latest market trends and deliver these at
                the client's premises within the scheduled time frame. We have
                also selected a team of devoted and capable professionals who
                help us to run the operation in a systematic and planned manner.
                Under the supervision of Mr. Jaydeep Sojitra and Mr. Amit
                Vaishnav, we have gained huge success in this field.
                Consistently over the years, we have raised the bar of
                perfection to carved out a niche for ourselves. As a result, we
                have a wide range of customer that spreads across Globe.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          margin: "100px 0 0px 0",
          padding: "50px 0",
          backgroundColor: "#c4d6f2",
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{ textAlign: "center", padding: "10px 50px" }}
        >
          <Card sx={{ minHeight: "250px", paddingTop: "20px" }}>
            <img
              src="icons/targetIcon.png"
              alt="bestQuality"
              width={"70px"}
              height={"70px"}
            />
            <Typography
              fontFamily={"Raleway"}
              textAlign={"center"}
              sx={{ margin: "10px 0" }}
            >
              <b>MISSION</b>
            </Typography>
            <ul>
              <li>
                <Typography
                  fontFamily={"Raleway"}
                  textAlign={"left"}
                  sx={{ fontWeight: 1000 }}
                >
                  Our Company is committed to making people's morning an
                  energy-efficient and prosperous.
                </Typography>
              </li>
            </ul>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ textAlign: "center", padding: "10px 50px" }}
        >
          <Card sx={{ minHeight: "250px", paddingTop: "20px" }}>
            <img
              src="icons/handshakeIcon.png"
              alt="onTimeDelivery"
              width={"70px"}
              height={"70px"}
            />
            <Typography
              fontFamily={"Raleway"}
              textAlign={"center"}
              sx={{ margin: "10px 0" }}
            >
              <b>CORE VALUE</b>
            </Typography>
            <ul>
              <li>
                <Typography
                  fontFamily={"Raleway"}
                  textAlign={"left"}
                  sx={{ fontWeight: 1000 }}
                >
                  Integrity and commitment towards perfection.
                </Typography>
              </li>
            </ul>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ textAlign: "center", padding: "10px 50px" }}
        >
          <Card sx={{ minHeight: "250px", paddingTop: "20px" }}>
            <img
              src="icons/eyeIcon.png"
              alt="bestQuality"
              width={"70px"}
              height={"70px"}
            />
            <Typography
              fontFamily={"Raleway"}
              textAlign={"center"}
              sx={{ margin: "10px 0" }}
            >
              <b>VISION</b>
            </Typography>
            <ul>
              <Typography
                fontFamily={"Raleway"}
                textAlign={"left"}
                sx={{ fontWeight: 1000 }}
              >
                <li>
                  In the year 2025, the Company has established
                  <br /> an International level brand.
                </li>
                <li>In the year 2027 complete Mission Evergreen.</li>
              </Typography>
            </ul>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          minHeight: "60vh",
          padding: { sx: 0, md: "50px 100px 0 100px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Grid item xs={12} md={3}>
          <Typography
            fontFamily={"Raleway"}
            variant="h3"
            textAlign={{ xs: "center", md: "left" }}
          >
            <b>Our Guiding</b>
          </Typography>
          <Typography
            fontFamily={"Raleway"}
            variant="h4"
            textAlign={{ xs: "center", md: "left" }}
          >
            Principles
          </Typography>
          <Typography
            fontFamily={"Raleway"}
            sx={{
              fontSize: "16px",
              padding: { xs: "30px 0", md: "10px 20px 0 0" },
            }}
            textAlign={{ xs: "center", md: "left" }}
          >
            We take pride in providing the best to our stakeholders. These Four
            Principles, define and direct Welspun to create a better future.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{ padding: { xs: "0 0 0 50px", md: "0" } }}
        >
          <Stepper nonLinear activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step
                key={step.label}
                onClick={() => setActiveStep(index)}
                sx={{
                  cursor: "pointer",
                }}
              >
                <StepLabel>{step.label}</StepLabel>
                <br />
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: "0 20px" }}>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {steps.map((step, index) => (
              <div key={index}>
                <ImageListItem key={index}>
                  <img
                    style={{
                      width: "100%",
                      height: "400px",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                  <ImageListItemBar
                    title={step.label}
                    subtitle={step.description}
                  />
                </ImageListItem>
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            variant="dots"
            steps={4}
            position="static"
            activeStep={activeStep}
            sx={{ flexGrow: 1, visibility: { xs: "none", md: "hidden" } }}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === 3}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};
