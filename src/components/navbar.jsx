import React, { Fragment, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { Home } from "./pages/home";
import HomeIcon from "@mui/icons-material/Home";
import { AboutUs } from "./pages/aboutUs";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Category } from "./pages/category";
import CategoryIcon from "@mui/icons-material/Category";
import { Product } from "./pages/product";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Contact } from "./pages/contact";
import {
//   BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "About Us", path: "/about", icon: <PeopleAltIcon /> },
  { name: "Category", path: "/category", icon: <CategoryIcon /> },
  { name: "Contact", path: "/contact", icon: <PhoneInTalkIcon /> },
];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const NavBar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ my: 2 }} fontFamily={"Poiret One"}>
        TANISHKA
      </Typography>
      <Divider />
      <List>
        {navItems.map((page) => (
          <Link
            to={page.path}
            style={{ textDecoration: "none", color: "black" }}
            key={page.name}
          >
            <ListItem key={page.name} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={page.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    const anchor = document.querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  }, [location]);

  return (
    <Fragment>
      <HideOnScroll {...props}>
        <AppBar sx={{ boxShadow: "24px 31px 43px -18px rgb(68, 67, 67)" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                color: "black",
                height: "20px",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
            >
              <Box
                component={"img"}
                src="/logo.png"
                alt="ttLogo"
                sx={{
                  width: "200px",
                  margin: { xs: "20px", md: "20px 0 0 200px" },
                }}
              />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
                paddingRight: "100px",
              }}
            >
              {navItems.map((page) => (
                <Link
                  to={page.path}
                  style={{
                    textDecoration: "none",
                    underLine: "none",
                    my: 2,
                    color: "#0ab4a4",
                    display: "flex",
                  }}
                  key={page.path}
                >
                  <MenuItem key={page.name}>
                    {/* {page.icon} */}
                    &nbsp;
                    <Typography sx={{ marginTop: "2px" }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#d51b20",
                  fontFamily: "Raleway",
                  margin: "15px 20px",
                  borderRadius: 0,
                }}
                className={"navbarExplore"}
                href={"/category"}
                target={"_blank"}
              >
                Explore
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/product/:category/:item" element={<Product />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Box>
    </Fragment>
  );
};

export default NavBar;
