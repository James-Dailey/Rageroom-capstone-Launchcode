/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
//import ListItemText from "@mui/material/ListItemText";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

const useStyles = makeStyles({
  root: {
    background: "#DC143d",
    width: "100%",
  },
  title: {
    color: "#DC143C",
    fontWeight: "bold",
    fontSize: "40px !important",
    "@media (max-width: 600px)": {
      fontSize: "20px !important",
    },
  },
  listhead: {
    color: "#DC143C",
    fontWeight: "bold !important",
    "@media (max-width: 600px)": {
      fontSize: "10px !important",
    },
  },

  listItm: {
    color: "#000",
    cursor: "pointer",
    paddingBottom: "2% !important",
    fontSize: "14px !important",

    "@media (min-width: 970px) and (max-width:980px)": {
      fontSize: "14px !important",
      marginRight: "12px !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "10px !important",
      marginRight: "12px !important",
    },
    "@media (max-width: 400px)": {
      fontSize: "8px !important",
    },
  },
  icons: {
    minWidth: "40px !important",
    color: "#8A8A8A",
  },
});

function Footer() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      sx={{
        pt: { xs: 3, md: 0.5 }, mt: { xs: 0, lg: 0 },
         width: "96%",
        height: '3rem',
        textAlign: 'center'
      }}
    >
      { <Box pr={"6.6%"} pl={"6.6%"}> 
      { <Box
          component="div"
          sx={{
            height: "1px",
            mt: { lg: 10, xs: 5, md: 8 },
             backgroundColor: "black",
            width: "96%",
          }}
        >
        </Box> }
      © Copyright 2022 All The Rage

      {<Grid
          container
          sx={{
            mt: { lg: 8, xs: 4, md: 6 },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            xl={5}
            sx={{ pr: { lg: 4, xs: 1 }, pl: { lg: 4, xs: 0 } }}
          >
            <Typography className={classes.title}> About Us</Typography>
            <Typography
              className={classes.listItm}
              // variant="h6"
              sx={{ mb: { xs: 4 } }}
            >
              All The Rage is a mobile rage room, we bring all the necessary tools, breakable objects, and more. You can customize your experience to your desires (within limitations). We will set up your room and break it down when your experience is over. Book your experience today!           </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={2} xl={2}>
            <Typography className={classes.listhead} sx={{ pb: { lg: 3 } }}>
              Quick links
            </Typography>
            <List>
              <ListItem disablePadding>
                <Typography
                  variant="h2"
                  className={classes.listItm}
                >
                  Contact Us
                </Typography>
              </ListItem>

              <ListItem disablePadding>
                <Typography className={classes.listItm}>Work for Rage!</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={2} xl={2}>
            <Typography className={classes.listhead} sx={{ pb: { lg: 3 } }}>
              Legal
            </Typography>
            <List>
              <ListItem disablePadding>
                <Typography className={classes.listItm}>
                  Privacy Policy
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <Typography className={classes.listItm}>
                  Terms & Conditions
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            sx={{ mt: { xs: 3, sm: 0 } }}
            xs={6}
            sm={4}
            md={4}
            lg={2}
            xl={2}
          >
            <Typography className={classes.listhead} sx={{ pb: { lg: 3 } }}>
              Contact us
            </Typography>
            <List>
              <ListItem sx={{ pb: "3% !important" }} disablePadding>
                <ListItemIcon className={classes.icons}>
                  <CallIcon sx={{ fill: "gray" }} />
                </ListItemIcon>
                <Typography className={classes.listItm}>
                  816-555-1234
                </Typography>
              </ListItem>
              <ListItem sx={{ pb: "3% !important" }} disablePadding>
                <ListItemIcon className={classes.icons}>
                  <EmailIcon sx={{ fill: "gray" }} />
                </ListItemIcon>
                <Typography
                  className={classes.listItm}
                  sx={{ wordBreak: { xs: "break-all", md: "keep-all" } }}
                >
                 alltherage@gmail.com
                </Typography>
              </ListItem>
             
              <ListItem sx={{ mt: 7 }}>
                <Box display="flex" justifyContent={"flex-end"} pb={4}>
                  <Box
                    display="flex"
                    justifyContent={"flex-start"}
                    sx={{ ml: { lg: "-12px" } }}
                  >
                    <InstagramIcon
                      sx={{
                        fill: "#FF6347",
                        mr: 1,
                        cursor: "pointer",
                      }}
                    />
                    <TwitterIcon
                      sx={{ fill: "#43C6DB", mr: 1, cursor: "pointer" }}
                    />
                    <FacebookIcon
                      sx={{
                        fill: "#357EC7",
                        mr: 1,
                        cursor: "pointer",
                      }}
                    />
                  </Box>
                </Box>
              </ListItem>
            </List>
          </Grid>
        </Grid> }
    </Box>
}</Box >
  );
}

export default Footer;
