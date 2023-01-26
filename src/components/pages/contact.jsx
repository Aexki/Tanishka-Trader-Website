import { useState } from "react";
import {
    Alert,
    Box,
    Button,
    Card,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
// import InputAdornment from "@mui/material/InputAdornment";

// import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import $ from "jquery";

export const Contact = () => {
    const [messageData, setMessageData] = useState({
        firstName: "",
        lastName: "",
        sendTo: "",
        message: "",
    });
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const setData = (e) => {
        const updatedData = { ...messageData };
        updatedData[e.target.name] = e.target.value;
        setMessageData(updatedData);
    };

    const sendMessage = async (e) => {
        e.preventDefault();

        $.post(
            "https://script.google.com/macros/s/AKfycbz78YtgOeWSpMfSIzWI4vASrOEO1YgJ1GHp1gIqPixTGJnD99x_6dO2TCxAVWy_RTqpPw/exec",
            messageData
        ).then((response) => {
            console.log(response);
            setMessage(response.message);
            setOpen(true);
        });
        document.getElementById("messageForm").reset();
    };

    return (
        <Box>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    {message}
                </Alert>
            </Snackbar>
            <Grid
                container
                sx={{
                    padding: {
                        xs: "100px 0 30px 0",
                        lg: "100px 100px 30px 100px",
                    },
                    backgroundColor: "rgb(247,248,252)",
                    justifyContent: "center",
                }}
            >
                <Grid
                    item
                    xs={12}
                    lg={6}
                    sx={{
                        textAlign: "center",
                        padding: { xs: "0 10px", lg: "0 100px" },
                    }}
                >
                    <Typography
                        variant={"h6"}
                        sx={{ color: "#d51b20", fontSize: "14px" }}
                    >
                        GOT A QUESTION ?
                    </Typography>
                    <Typography
                        variant={"h4"}
                        sx={{ fontWeight: "bold", margin: "20px 0 30px 0" }}
                    >
                        Contact Tanishka Traders
                    </Typography>
                    <Typography variant={"h5"} sx={{ fontSize: "18px" }}>
                        We’re here to help and answer any question you might
                        have. We look forward to hearing from you 🙂
                    </Typography>
                    <Card sx={{ padding: "30px 50px", margin: "50px 0" }}>
                        <Typography
                            mb={7}
                            sx={{ fontWeight: "bold", fontSize: "25px" }}
                        >
                            Contact Information
                        </Typography>
                        <Typography
                            my={3}
                            sx={{ display: "flex", textAlign: "left" }}
                        >
                            <LocationOnIcon sx={{ color: "black" }} />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>
                                Ground floor, Plot no. 653/915, Aurobindo
                                Colony, BJB Nagar Rajarani Area, Bhubaneswar,
                                Odisha. PIN - 751014
                            </span>
                        </Typography>
                        <Typography
                            my={3}
                            sx={{ display: "flex", textAlign: "left" }}
                        >
                            <PhoneIcon sx={{ color: "black" }} />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>+91 9793899313</span>
                        </Typography>
                        <Typography
                            my={3}
                            sx={{ display: "flex", textAlign: "left" }}
                        >
                            <MailIcon sx={{ color: "black" }} />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>tanishkatraders18@gmail.com</span>
                        </Typography>
                    </Card>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={6}
                    sx={{
                        textAlign: "center",
                        padding: { xs: "0 10px", lg: "0 50px 0 0" },
                    }}
                >
                    <Card sx={{ padding: "50px 0" }}>
                        <Typography
                            mb={6}
                            sx={{ fontWeight: "bold", fontSize: "25px" }}
                        >
                            Connect With Us
                        </Typography>
                        <Box
                            component="form"
                            id={"messageForm"}
                            autoComplete="off"
                            onSubmit={sendMessage}
                        >
                            <Grid
                                container
                                spacing={2}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: "0 50px",
                                }}
                            >
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        required
                                        variant="outlined"
                                        label="First Name"
                                        name="firstName"
                                        placeholder="Enter Your First Name"
                                        fullWidth
                                        // InputProps={{
                                        //   startAdornment: (
                                        //     <InputAdornment position="start">
                                        //       <DriveFileRenameOutlineIcon sx={{ color: "black" }} />
                                        //     </InputAdornment>
                                        //   ),
                                        // }}
                                        onChange={setData}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        required
                                        variant="outlined"
                                        label="Last Name"
                                        name="lastName"
                                        placeholder="Enter Your Last Name"
                                        fullWidth
                                        // InputProps={{
                                        //   startAdornment: (
                                        //     <InputAdornment position="start">
                                        //       <DriveFileRenameOutlineIcon sx={{ color: "black" }} />
                                        //     </InputAdornment>
                                        //   ),
                                        // }}
                                        onChange={setData}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        variant="outlined"
                                        label="Email Address"
                                        name="sendTo"
                                        placeholder="Enter Your Email Address"
                                        fullWidth
                                        // InputProps={{
                                        //   startAdornment: (
                                        //     <InputAdornment position="start">
                                        //       <EmailIcon sx={{ color: "black" }} />
                                        //     </InputAdornment>
                                        //   ),
                                        // }}
                                        onChange={setData}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        variant="outlined"
                                        label="Message"
                                        name="message"
                                        placeholder="Enter Your Message"
                                        multiline
                                        rows={5}
                                        fullWidth
                                        onChange={setData}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant={"contained"}
                                        fullWidth
                                        className={"contact-submit"}
                                        type="submit"
                                    >
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={6}
                    sx={{
                        textAlign: "center",
                        padding: { xs: "30px 10px", lg: "0 50px 0 0" },
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Connect Via Whatsapp
                    </Typography>
                    <Card
                        sx={{
                            padding: { xs: "10px 20px", lg: "20px 50px" },
                            backgroundColor: "rgb(44,205,71)",
                            cursor: "pointer",
                            margin: "30px 10px 0 10px",
                            "&:hover": { backgroundColor: "rgb(93,241,126)" },
                        }}
                    >
                        <a
                            href="https://wa.me/919793899313?text=Hi"
                            style={{ textDecoration: "none", color: "white" }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Typography
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontSize: { xs: "20px", lg: "30px" },
                                }}
                            >
                                <WhatsAppIcon
                                    sx={{
                                        fontSize: { xs: "30px", lg: "50px" },
                                    }}
                                />
                                &nbsp;&nbsp; +91 9793899313
                            </Typography>
                        </a>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};
