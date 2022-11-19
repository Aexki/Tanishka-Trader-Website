import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import {
    Box,
    Card,
    capitalize,
    Grid,
    Tooltip,
    Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { productDetails } from "../../assets/productDetails";

const steps = [
    {
        index: 1,
        label: "Customer Centricity",
        description: `Our customers are at the core of our beliefs.
      They inspire us to go the extra mile and create products that are of the highest quality and best in the world.`,
        imgPath: "/slide1.jpg",
    },
    {
        index: 2,
        label: "Technology and Innovation",
        description:
            "Our world-class technology creates solutions that result in efficiency and brings more value to our customers.",
        imgPath: "/slide2.jpg",
    },
    {
        index: 3,
        label: "Collaboration",
        description:
            "Through collaborations, we deliver unique and innovative experiences to our customers.",
        imgPath: "/slide3.jpeg",
    },
    {
        index: 4,
        label: "Inclusive Growth",
        description:
            "We are socially aware and believe in educating, empowering, and creating a sustainable environment.",
        imgPath: "/slide4.jpg",
    },
];

export const Product = () => {
    const theme = useTheme();
    const { category, item } = useParams();
    const [activeStep, setActiveStep] = useState(0);
    const [currentColor, setCurrentColor] = useState(
        productDetails[category][item] &&
            productDetails[category][item].color[0]
    );

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    useEffect(() => {
        if (
            document.getElementsByClassName(`color-${currentColor}`).length !==
            0
        ) {
            document.getElementsByClassName(
                `color-${currentColor}`
            )[0].style.border = "2px solid black";
        }
    }, [currentColor]);

    return (
        <Box
            sx={{
                margin: { xs: "70px 0", lg: "100px 0" },
                padding: { xs: 0, lg: "0 100px" },
            }}
        >
            <Grid container>
                <Grid
                    item
                    xs={12}
                    lg={6}
                    sx={{ padding: { xs: "0 10px", lg: "0 20px" } }}
                >
                    {/* <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          > */}
                    <Box>
                        <ImageListItem>
                            <img
                                style={{
                                    width: "100%",
                                    height: "400px",
                                }}
                                src={`/products/${item}/${currentColor}.jpeg`}
                                alt={currentColor}
                            />
                        </ImageListItem>
                    </Box>
                    {/* </SwipeableViews> */}
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={6}
                    sx={{ padding: { xs: "20px", lg: "0 100px" } }}
                >
                    <Box className={"product-description"}>
                        <Typography variant={"h6"} sx={{ fontSize: "14px" }}>
                            {category === "homeAndLiving"
                                ? "Home And Living"
                                : category === "childCare"
                                ? "Child Care"
                                : "Hotel Amenities"}
                        </Typography>
                        <Typography variant={"h4"} sx={{ fontWeight: "bold" }}>
                            {capitalize(item)}
                        </Typography>
                        <Typography
                            variant={"h6"}
                            sx={{
                                margin: "30px 0 0 0",
                                fontSize: "18px",
                                fontWeight: "bold",
                            }}
                        >
                            Description
                        </Typography>
                        <Typography variant={"h6"} sx={{ fontSize: "12px" }}>
                            {productDetails[category][item] &&
                                productDetails[category][item].description}
                        </Typography>
                    </Box>
                    <Box className={"product-description"}>
                        <Typography
                            variant={"h6"}
                            sx={{
                                fontSize: "14px",
                                margin: "10px 0",
                                fontWeight: "bold",
                            }}
                        >
                            Available colors :
                        </Typography>
                        <Grid container>
                            {productDetails[category][item] &&
                                productDetails[category][item].color.map(
                                    (color) => (
                                        <Grid
                                            item
                                            key={color}
                                            className={`color-${color}`}
                                            sx={{
                                                padding: "1px",
                                                borderRadius: "5px",
                                                border: "2px solid white",
                                            }}
                                        >
                                            <Tooltip title={capitalize(color)}>
                                                <Card
                                                    sx={{
                                                        backgroundColor: color,
                                                        height: "40px",
                                                        width: "40px",
                                                        margin: "5px",
                                                        border: "1px solid black",
                                                    }}
                                                    onClick={() => {
                                                        if (
                                                            currentColor !==
                                                            color
                                                        ) {
                                                            document.getElementsByClassName(
                                                                `color-${currentColor}`
                                                            )[0].style.border =
                                                                "2px solid white";
                                                            setCurrentColor(
                                                                color
                                                            );
                                                        }
                                                    }}
                                                    className={`color-card`}
                                                ></Card>
                                            </Tooltip>
                                        </Grid>
                                    )
                                )}
                            <br />
                        </Grid>
                        <Box>
                            <Typography
                                variant={"h6"}
                                sx={{
                                    margin: "40px 0 10px 0",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                }}
                            >
                                Status :
                            </Typography>
                            <Typography
                                variant={"h6"}
                                sx={{ fontSize: "14px", margin: "10px 0" }}
                            >
                                {productDetails[category][item] &&
                                productDetails[category][item].status
                                    ? "Currently available in stocks."
                                    : "Currently unavailable."}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
