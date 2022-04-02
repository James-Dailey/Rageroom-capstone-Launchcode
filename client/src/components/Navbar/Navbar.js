/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  Typography,
 // Paper,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useNavigate, useLocation } from "react-router-dom";
import userImg from "../../assets/images/user.png";
import Signup from "../Signup/Signup";
import Chip from "@mui/material/Chip";
import UserContext from "../../context/userContext";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CardGiftcardTwoTone } from "@material-ui/icons";
import { ShoppingBagOutlined } from "@mui/icons-material";
//import Stripe from "../../components/Stripe/Stripe.js";
const navigationLinks = [{ name: "home", to: "/" }];

const useStyles = makeStyles({
  navBg: {
    backgroundColor: "#a20f2e !important",
    color: "white",
    border: "none",
    transition: "all 900ms ease-in-out !important",
  },
  checkAvt: {
    width: "70%",
    height: "auto",
    borderRadius: 0,
  },
  parentActive: {
    position: "relative",
  },
  childActive: {
    position: "absolute",
    backgroundColor: "black",
    borderRadius: "3px",
    width: "20px",
    height: "3px",
    bottom: -15,
  },
  active: {
    borderWidth: "20px",
    textAlign: "left",
    fontSize: "20px",
    letterSpacing: "0px",
    color: "#cDC143C",
    marginRight: "40px",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: "Poppins",
    "&:hover": { color: "#000" },
    "&:lastChild": { marginRight: "0" },
    "@media (max-width: 899.9px)": {
      color: "#000",
      fontWeight: "bold",
      fontSize: "15px",
      borderBottom: "2px solid #000",
      "&:hover": { color: "black" },
    },
    "@media (min-width: 1899.9px)": {
      marginRight: "58px",
    },
    "@media (min-width: 1200px) and (max-width: 1599.9px)": {
      fontSize: "16px",
      marginRight: "28px",
    },
    "@media (min-width: 900px) and (max-width: 1199.9px)": {
      fontSize: "12px",
      marginRight: "20px",
    },
  },
  nonActive: {
    textAlign: "left",
    fontSize: "20px",
    letterSpacing: "0px",
    color: "#000",
    marginRight: "40px",
    cursor: "pointer",
    fontWeight: "bold",
    fontFamily: "Poppins",
    textTransform: "capitalize",
    "&:lastChild": { marginRight: "0" },
    "@media (max-width: 899.9px)": {
      color: "#000",
      fontSize: "20px",
      fontWeight: "bold",
    },
    "@media (min-width: 1899.9px)": {
      marginRight: "58px",
    },
    "@media (min-width: 1200px) and (max-width: 1599.9px)": {
      fontSize: "16px",
      marginRight: "28px",
    },
    "@media (min-width: 900px) and (max-width: 1199.9px)": {
      fontSize: "14px",
      marginRight: "12px",
    },
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  let navigate = useNavigate();
  let location = useLocation();
  const s1 = useContext(UserContext);
  const [isActive, setActive] = React.useState(false);
  const [user, setUser] = React.useState();
 const history= useNavigate()
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("smash_user")));
  },[]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const openl = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("smash_user");
    navigate("/login");
    s1.update();
  };

  return (
    <>
      <LoadingSpinner active={isActive} />
      <AppBar
        className={classes.navBg}
        sx={{ padding: "1% 0 !important", position: "sticky" }}
      >
        <Toolbar sx={{ padding: "0 5% !important" }}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Hidden smDown>
              <Grid
                item
                md={2.5}
                sm={6}
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    px: { lg: 1, md: 1, sm: 2, xs: 2 },
                  }}
                >
                  {user !== null &&
                    navigationLinks.map((item, index) => {
                      return (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Link
                            onClick={() => {
                              navigate(item.to);
                            }}
                            variant="button"
                            sx={{
                              textAlign: "left",
                              fontSize: "16px",
                              letterSpacing: "0px",
                              color: "#000",
                              marginRight: "40px",
                              cursor: "pointer",
                              fontWeight: "bold",
                              fontFamily: "Poppins",
                              textTransform: "capitalize",
                            }}
                            underline="none"
                          >
                            <Box
                              display={"flex"}
                              justifyContent={"center"}
                              position="relative"
                            >
                              <Box
                                className={
                                  location?.pathname === item.to
                                    ? classes.childActive
                                    : ""
                                }
                              />
                              {item.name}
                            </Box>
                          </Link>
                        </Box>
                      );
                    })}
                </Box>
              </Grid>
              <Grid
                item
                md={6}
                sm={5}
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: {
                    xs: "end",
                    md: "end",
                  },
                  pl: { xs: "7%" },
                }}
              >
                {/* { user === null && (
                  <Box elevation={3} sx={{ color: "black" }}>
                    <Button
                      variant="outlined"
                      sx={{ textTransform: "capitalize", marginRight: 1 }}
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ textTransform: "capitalize" }}
                      onClick={() => setOpenDialog(true)}
                    >
                      Sign up
                    </Button>
                  </Box>
                )} */}
                {/* {user !== null && (
                  <Box display="flex">
                    <Avatar alt="user" src={userImg} />
                    <Chip
                      label="Logout"
                      sx={{ marginTop: 0.5, marginLeft: 1, cursor: "pointer" }}
                      onClick={handleLogout}
                    />
                  </Box>
                )}  */}
                {user === null ? (
                  <Box elevation={3} sx={{ color: "black" }}>
                    <Button
                      variant="outlined"
                      sx={{ textTransform: "capitalize", marginRight: 1 }}
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ textTransform: "capitalize" }}
                      onClick={() => setOpenDialog(true)}
                    >
                      Sign up
                    </Button>
                  </Box>
                ) : (
                  <Box display="flex">
                    <div>
                    <Button
                        aria-controls={openl ? "basic-menu" : undefined}
                        aria-expanded={openl ? "true" : undefined}
                        onClick={()=>history('/cart')}
                      >
                        <ShoppingBagOutlined/>
                        <span className="cart-count">{Object.keys(props?.cart||{}).length}</span>
                      </Button>
                      <Button
                        aria-controls={openl ? "basic-menu" : undefined}
                        aria-expanded={openl ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <Avatar src={userImg} />
                        <ArrowDropDownIcon />
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={openl}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  </Box>
                )}
              </Grid>
            </Hidden>

            {/* { Bar Icon } */}
            <Hidden smUp>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                {user === null ? (
                  <Box elevation={3} sx={{ color: "black" }}>
                    <Button
                      variant="outlined"
                      sx={{ textTransform: "capitalize", marginRight: 1 }}
                      onClick={() => navigate("/login")}
                    >
                     
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ textTransform: "capitalize" }}
                      onClick={() => setOpenDialog(true)}
                    >
                      Sign up
                    </Button>
                  </Box>
                ) : (
                  <Box display="flex">
                    <Avatar alt="user" src={userImg} />
                    <Chip
                      label="Logout"
                      sx={{ marginTop: 0.5, marginLeft: 1, cursor: "pointer" }}
                      onClick={handleLogout}
                    />
                  </Box>
                )}
                 {user === null && (
                  <Box elevation={3} sx={{ color: "black" }}>
                    <Button
                      variant="outlined"
                      sx={{ textTransform: "capitalize", marginRight: 1 }}
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ textTransform: "capitalize" }}
                      onClick={() => setOpenDialog(true)}
                    >
                      Sign up
                    </Button>
                  </Box>
                )}
                {user !== null && (
                  <Box display="flex">
                    <Avatar alt="user" src={userImg} />
                    <Chip
                      label="Logout"
                      sx={{ marginTop: 0.5, marginLeft: 1, cursor: "pointer" }}
                      onClick={handleLogout}
                    />
                  </Box>
                )} 
                {user !== null && (
                  <IconButton
                    onClick={() => setOpen(true)}
                    sx={{ paddingRight: 0, paddingLeft: "20px" }}
                  >
                    <MenuIcon
                      style={{ color: "#000", width: "1.2em", height: "2em" }}
                    />
                  </IconButton>
                )}
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>

        {/* Navbar for small screens */}
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div
            onClick={() => setOpen(false)}
            onKeyPress={() => setOpen(false)}
            role="button"
            tabIndex={0}
          >
            <IconButton sx={{ pt: 2, pb: 2, ml: -1 }}>
              <ChevronRightIcon sx={{ width: "2em" }} />
            </IconButton>
          </div>
          <Divider />
          <List>
            {navigationLinks.map((item, index) => (
              <ListItem key={index}>
                <Link
                  className={
                    location?.pathname === item.to
                      ? classes.active
                      : classes.nonActive
                  }
                  onClick={() => {
                    navigate(item.to);
                  }}
                  variant="button"
                  underline="none"
                  color="#8A8A99"
                >
                  <Typography variant="h7">{item.name}</Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
        <Signup openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </AppBar>
    </>
  );
};

export default Navbar;
