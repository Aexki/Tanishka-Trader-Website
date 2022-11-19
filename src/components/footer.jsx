import React from "react";
import { Box, Card, Typography, Grid } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";

import security from "../assets/icons/security.png";
import shield from "../assets/icons/shield.png";
import helpDesk from "../assets/icons/help-desk.png";
import cashlessPayment from "../assets/icons/cashless-payment.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Link } from "react-router-dom";

export const Footer = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div style={{ marginTop: "50px" }}>
            <Grid
                container
                sx={{
                    padding: { xs: 0, lg: "0 176px" },
                }}
                spacing={2}
            >
                <Grid
                    item
                    xs={12}
                    lg={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Card
                        className={"box-footer"}
                        sx={{
                            height: "150px",
                            width: "250px",
                            padding: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            textAlign: "center",
                            borderRadius: 0,
                        }}
                    >
                        <img
                            src={security}
                            alt="security"
                            width={"70px"}
                            height={"70px"}
                            style={{ margin: "10px 0" }}
                        />
                        <Typography sx={{ margin: "10px 0", fontSize: "16px" }}>
                            <b>100% SECURE PAYMENTS</b>
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            Moving your card details to a much more secure
                            place.
                        </Typography>
                    </Card>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Card
                        className={"box-footer"}
                        sx={{
                            height: "150px",
                            width: "250px",
                            padding: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            textAlign: "center",
                            borderRadius: 0,
                        }}
                    >
                        <img
                            src={shield}
                            alt="shield"
                            width={"70px"}
                            height={"70px"}
                            style={{ margin: "10px 0" }}
                        />
                        <Typography sx={{ margin: "10px 0", fontSize: "16px" }}>
                            <b>TRUSTPAY</b>
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            100% Payment Protection. Easy Return Policy.
                        </Typography>
                    </Card>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Card
                        className={"box-footer"}
                        sx={{
                            height: "150px",
                            width: "250px",
                            padding: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            textAlign: "center",
                            borderRadius: 0,
                        }}
                    >
                        <img
                            src={helpDesk}
                            alt="helpDesk"
                            width={"70px"}
                            height={"70px"}
                            style={{ margin: "10px 0" }}
                        />
                        <Typography sx={{ margin: "10px 0", fontSize: "16px" }}>
                            <b>HELP CENTER</b>
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            Got a question? Look no further. Submit your query
                            here.
                        </Typography>
                    </Card>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={3}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Card
                        className={"box-footer"}
                        sx={{
                            height: "150px",
                            width: "250px",
                            padding: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            textAlign: "center",
                            borderRadius: 0,
                        }}
                    >
                        <img
                            src={cashlessPayment}
                            alt="cashlessPayment"
                            width={"70px"}
                            height={"70px"}
                            style={{ margin: "10px 0" }}
                        />
                        <Typography sx={{ margin: "10px 0", fontSize: "16px" }}>
                            <b>SHOP ON THE GO</b>
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                            Download the app and get exciting app only offers at
                            your fingertip.
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
            <Grid
                container
                sx={{
                    padding: { xs: 0, lg: "30px 180px 50px 180px" },
                    borderTop: "2px solid #f7f7f7",
                    borderBottom: "2px solid #f7f7f7",
                    textAlign: { xs: "center", lg: "left" },
                }}
            >
                <Grid item xs={12} lg={4}>
                    <Box
                        component={"img"}
                        src="/logo.png"
                        alt="ttLogo"
                        sx={{
                            width: "200px",
                            margin: {
                                xs: "50px 0 10px 0",
                                md: "60px 0 30px 0",
                            },
                        }}
                    />
                    <Box>
                        <FacebookIcon
                            sx={{
                                fontSize: "30px",
                                cursor: "pointer",
                                margin: "10px",
                            }}
                        />
                        <YouTubeIcon
                            sx={{
                                fontSize: "30px",
                                cursor: "pointer",
                                margin: "10px",
                            }}
                        />
                        <TwitterIcon
                            sx={{
                                fontSize: "30px",
                                cursor: "pointer",
                                margin: "10px",
                            }}
                        />
                        <RedditIcon
                            sx={{
                                fontSize: "30px",
                                cursor: "pointer",
                                margin: "10px",
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={2} className={"footer"}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: "16px",
                            margin: { xs: "30px", lg: "40px 0" },
                        }}
                    >
                        NAVIGATE
                    </Typography>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/category">Category</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </Grid>
                <Grid item xs={12} lg={3} className={"footer"}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: "16px",
                            margin: { xs: "30px", lg: "40px 0" },
                        }}
                    >
                        POLICY INFO
                    </Typography>
                    <li>
                        <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/">Terms of Use</Link>
                    </li>
                    <li>
                        <Link to="/">Report Abuse and Takedown Policy</Link>
                    </li>
                    <li>
                        <Link to="/">FAQ</Link>
                    </li>
                </Grid>

                <Grid item xs={12} lg={3}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: "16px",
                            margin: { xs: "30px", lg: "40px 0" },
                        }}
                    >
                        SUBSCRIBE
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", lg: "left" },
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="subscribeEmail"
                            style={{
                                padding: matchDownMd
                                    ? "10px 10px"
                                    : "10px 15px",
                            }}
                        />
                        <button
                            type="submit"
                            className="subscribeSubmit"
                            style={{ padding: "10px 10px" }}
                        >
                            SUBSCRIBE
                        </button>
                    </Box>
                    <Typography
                        sx={{
                            fontSize: "12px",
                            margin: "20px 0",
                            color: "rgb(129, 129, 129)",
                        }}
                    >
                        Register now to get updates on promotions and coupons.
                        Or{" "}
                        <span
                            onClick={() => {
                                alert(
                                    "App currently under development, will be available soon."
                                );
                            }}
                            style={{
                                textDecoration: "none",
                                color: "blue",
                                cursor: "pointer",
                            }}
                        >
                            Download App
                        </span>
                    </Typography>
                </Grid>
            </Grid>
            <div className="copyright">
                <p>
                    © Tanishka Traders 2022. All Rights Reserved | Designed by
                    Aexki Web Solutions.
                </p>
            </div>
        </div>
    );
};
