import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";

export const AboutUs = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div>
            <Box
                sx={{
                    minHeight: "100vh",
                    textAlign: "center",
                    backgroundImage: "url('/bg12.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translateX(-50%) translateY(-50%)",
                        width: "80%",
                        backgroundColor: "white",
                        padding: "50px",
                        margin: { xs: "40px 0 0 0", lg: 0 },
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: "Raleway",
                            fontWeight: "bold",
                            color: "#0ab4a4",
                        }}
                    >
                        About Us
                    </Typography>
                    <Typography
                        sx={{
                            padding: {
                                xs: "20px 0",
                                lg: "50px 0 50px 0",
                            },
                            fontFamily: "Raleway",
                            fontSize: { xs: 16, lg: 20 },
                            fontWeight: 1000,
                            color: "black",
                        }}
                    >
                        Incepted in the year 2016 at Surat (Gujarat, India), we
                        “Wellgreen Pillow Xpress” are a Partnership firm that is
                        an affluent manufacturer of a wide array of Bed Pillows,
                        Medical Pillow, Sofa Cushion and Bolster Pillow. We
                        provide these products as per the latest market trends
                        and deliver these at client’s premises within the
                        scheduled time frame. We have also selected a team of
                        devoted and capable professionals who helped us to run
                        the operation in a systematic and planned manner. Under
                        the supervision of “Mr. Jaydeep Sojitra” (Director), we
                        have gained huge success in this field. We have over the
                        years consistently raised the bar of perfection to
                        carved out a niche for our selves. As a result we have a
                        customer range that spreads across India.
                    </Typography>
                </Box>
            </Box>
            <Grid
                container
                sx={{
                    minHeight: "50vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: { xs: "100px 20px", lg: "100px 200px" },
                    backgroundColor: "rgb(247,247,247)",
                }}
            >
                <Grid
                    item
                    xs={12}
                    sx={{
                        flexDirection: "column",
                        backgroundPosition: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "50px 0",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "center",
                            color: "#0ab4a4",
                            fontFamily: "Raleway",
                            fontWeight: "bold",
                        }}
                    >
                        Our Core Values
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: "center",
                            margin: { xs: "50px 0", lg: "20px 0" },
                            fontFamily: "Raleway",
                            fontWeight: 1000,
                        }}
                    >
                        Our principles are the core of Tanishka Traders. They
                        help drive every decision we make and every interaction
                        we have with our clients.
                    </Typography>
                </Grid>
                <Grid
                    container
                    sx={{ width: "90%" }}
                    spacing={{ md: 10, xs: 0 }}
                >
                    <Grid item xs={12} lg={6}>
                        <Box
                            sx={{
                                color: "white",
                                backgroundColor: "rgb(8,94,180)",
                                padding: { md: "50px", xs: 0 },
                                width: "90%",
                                margin: { md: "20px", xs: "20px auto" },
                                height: "400px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    textAlign: "center",
                                    fontSize: { md: "40px", sm: "30px" },
                                    fontWeight: "bold",
                                }}
                            >
                                INGENUITY
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    textAlign: "center",
                                    margin: { xs: "50px 0", lg: "20px 0" },
                                    padding: "0 30px",
                                }}
                            >
                                We look for clever and creative solutions by
                                always asking, "Why is that?"
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                color: "white",
                                backgroundColor: "rgb(25,143,213)",
                                padding: { md: "50px", xs: 0 },
                                width: "90%",
                                margin: { md: "20px", xs: "20px auto" },
                                height: "200px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    textAlign: "center",
                                    fontSize: { md: "40px", sm: "30px" },
                                    fontWeight: "bold",
                                }}
                            >
                                TRANSPARENCY
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    textAlign: "center",
                                    margin: { xs: "50px 0", lg: "20px 0" },
                                    padding: "0 30px",
                                }}
                            >
                                We don't hide the secret sauce.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{ marginTop: { xs: 0, lg: "50px" } }}
                    >
                        <Box
                            sx={{
                                color: "white",
                                backgroundColor: "rgb(25,143,213)",
                                padding: { md: "50px", xs: 0 },
                                width: "90%",
                                margin: { md: "20px", xs: "20px auto" },
                                height: "200px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    textAlign: "center",
                                    fontSize: { md: "40px", sm: "30px" },
                                    fontWeight: "bold",
                                }}
                            >
                                PASSION
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    textAlign: "center",
                                    margin: { xs: "50px 0", lg: "20px 0" },
                                    padding: "0 30px",
                                }}
                            >
                                We're fired up to serve our clients.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                color: "white",
                                backgroundColor: "rgb(8,94,180)",
                                padding: { md: "50px", xs: 0 },
                                width: "90%",
                                margin: { md: "20px", xs: "20px auto" },
                                height: "400px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    textAlign: "center",
                                    fontSize: { md: "40px", sm: "30px" },
                                    fontWeight: "bold",
                                }}
                            >
                                PURPOSE
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    textAlign: "center",
                                    margin: { xs: "50px 0", lg: "20px 0" },
                                    padding: "0 30px",
                                }}
                            >
                                Nothing we do is random, but we leave room for
                                inspiration.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                sx={{
                    minHeight: "60vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: "50px 0",
                    padding: { xs: "0 20px", lg: "0 200px" },
                    backgroundColor: "white",
                }}
            >
                <Grid
                    item
                    xs={12}
                    sx={{
                        flexDirection: "column",
                        backgroundPosition: "center",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "20px 0 20px 0",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "center",
                            color: "#0ab4a4",
                            fontFamily: "Raleway",
                            fontWeight: "bold",
                        }}
                    >
                        Our Official Partners
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: "center",
                            padding: {
                                xs: 2,
                                lg: "20px 200px 0 200px",
                            },
                            fontFamily: "Raleway",
                            fontWeight: 1000,
                        }}
                    >
                        Successful Collaborations
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box
                        component={"img"}
                        height="120px"
                        width={matchDownMd ? "80%" : "70%"}
                        margin={{ xs: "5px 0", md: 0 }}
                        src="/logo/Wellgreen.webp"
                    ></Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box
                        component={"img"}
                        height="120px"
                        width={matchDownMd ? "80%" : "70%"}
                        margin={{ xs: "5px 0", md: 0 }}
                        src="/logo/welspun.png"
                    ></Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box
                        component={"img"}
                        height="120px"
                        width={matchDownMd ? "80%" : "70%"}
                        margin={{ xs: "5px 0", md: 0 }}
                        src="/logo/quickdry.png"
                    ></Box>
                </Grid>
            </Grid>
            <Box
                sx={{
                    textAlign: "center",
                    padding: "50px 0",
                    backgroundImage:
                        "linear-gradient(to right, blue , #0ab4a4)",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        margin: "0 0 30px 0",
                        color: "white",
                        fontFamily: "Raleway",
                        fontWeight: "bold",
                    }}
                >
                    Benefits To Connect With Tanishka Traders
                </Typography>
                <Grid
                    container
                    spacing={matchDownMd ? 2 : 10}
                    sx={{ padding: { xs: 0, lg: "0 200px" } }}
                >
                    <Grid item xs={12} lg={4}>
                        <Card
                            className={"box"}
                            sx={{
                                position: "relative",
                                overflow: "visible",
                                width: "320px",
                                height: "130px",
                                display: "flex",
                                marginX: "auto",
                                padding: "0 10px",
                            }}
                        >
                            <Box
                                component="img"
                                height="100px"
                                src="numbers/1.png"
                                alt=""
                                sx={{
                                    marginY: "auto",
                                    opacity: 0.9,
                                }}
                            ></Box>
                            <CardContent sx={{ marginY: "auto" }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: "Raleway",
                                        fontWeight: 1000,
                                    }}
                                >
                                    High-Quality Products
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Card
                            className={"box"}
                            sx={{
                                position: "relative",
                                overflow: "visible",
                                width: "320px",
                                height: "130px",
                                display: "flex",
                                marginX: "auto",
                                padding: "0 10px",
                            }}
                        >
                            <Box
                                component="img"
                                height="100px"
                                src="numbers/2.png"
                                alt=""
                                sx={{
                                    marginY: "auto",
                                    opacity: 0.9,
                                }}
                            ></Box>
                            <CardContent sx={{ marginY: "auto" }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: "Raleway",
                                        fontWeight: 1000,
                                    }}
                                >
                                    Skilled Team Of Professionals
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Card
                            className={"box"}
                            sx={{
                                position: "relative",
                                overflow: "visible",
                                width: "320px",
                                height: "130px",
                                display: "flex",
                                marginX: "auto",
                                padding: "0 10px",
                            }}
                        >
                            <Box
                                component="img"
                                height="100px"
                                src="numbers/3.png"
                                alt=""
                                sx={{
                                    marginY: "auto",
                                    opacity: 0.9,
                                }}
                            ></Box>
                            <CardContent sx={{ marginY: "auto" }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: "Raleway",
                                        fontWeight: 1000,
                                    }}
                                >
                                    Ethical Business Policies
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={matchDownMd ? 2 : 10}
                    sx={{
                        padding: { xs: 0, lg: "0 200px" },
                        marginTop: { xs: 0, lg: "0px" },
                    }}
                >
                    <Grid item xs={12} lg={4}>
                        <Card
                            className={"box"}
                            sx={{
                                position: "relative",
                                overflow: "visible",
                                width: "320px",
                                height: "130px",
                                display: "flex",
                                marginX: "auto",
                                padding: "0 10px",
                            }}
                        >
                            <Box
                                component="img"
                                height="100px"
                                src="numbers/4.png"
                                alt=""
                                sx={{
                                    marginY: "auto",
                                    opacity: 0.9,
                                }}
                            ></Box>
                            <CardContent sx={{ marginY: "auto" }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: "Raleway",
                                        fontWeight: 1000,
                                    }}
                                >
                                    Wide Distribution Network
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Card
                            className={"box"}
                            sx={{
                                position: "relative",
                                overflow: "visible",
                                width: "320px",
                                height: "130px",
                                display: "flex",
                                marginX: "auto",
                                padding: "0 10px",
                            }}
                        >
                            <Box
                                component="img"
                                height="100px"
                                src="numbers/5.png"
                                alt=""
                                sx={{
                                    marginY: "auto",
                                    opacity: 0.9,
                                }}
                            ></Box>
                            <CardContent sx={{ marginY: "auto" }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: "Raleway",
                                        fontWeight: 1000,
                                    }}
                                >
                                    Transparent Dealings
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Card
                            className={"box"}
                            sx={{
                                position: "relative",
                                overflow: "visible",
                                width: "320px",
                                height: "130px",
                                display: "flex",
                                marginX: "auto",
                                padding: "0 10px",
                            }}
                        >
                            <Box
                                component="img"
                                height="100px"
                                src="numbers/6.png"
                                alt=""
                                sx={{
                                    marginY: "auto",
                                    opacity: 0.9,
                                }}
                            ></Box>
                            <CardContent sx={{ marginY: "auto" }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: "Raleway",
                                        fontWeight: 1000,
                                    }}
                                >
                                    Customized Packaging
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};
