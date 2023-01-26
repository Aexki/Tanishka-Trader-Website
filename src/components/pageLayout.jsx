import React from "react";
import Box from "@mui/material/Box";
import NavBar from "./navbar";
import { Chat } from "./chat";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Fade from "@mui/material/Fade";
import { Footer } from "./footer";

import { BrowserRouter as Router } from "react-router-dom";

function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor"
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: "center",
                behavior: "smooth",
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{
                    position: "fixed",
                    bottom: 120,
                    right: { xs: 16, md: 25 },
                }}
            >
                {children}
            </Box>
        </Fade>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export const PageLayout = (props) => {
    return (
        <Router>
            <Toolbar id="back-to-top-anchor" sx={{ height: 0 }} />
            <NavBar />
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <ArrowUpwardIcon />
                </Fab>
            </ScrollTop>
            {/* <Chat /> */}
            <Footer />
        </Router>
    );
};
