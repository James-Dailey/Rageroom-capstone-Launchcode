/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  Typography,
  Paper,
  Button,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";



import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";



const Home = (props) => {

  
  return (
    <Container>

       
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        paddingTop={6}
        paddingBottom={6}
      >
        {props?.items.map((item,index) => {
          return (
            <Grid item xs={12} sm={6} md={3} className="item-box" onClick={()=>props.handleAddCard(index)}>
              <Card
                sx={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  "&:hover": {
                    transition: "0.2s",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <div>
                <CardMedia
                  component="img"
                  height="250"
                  image={item.img}
                  alt="rage"
                />
                <h4 className="px-2">{item.title}</h4>
                <h5 className="px-2">{item.price}</h5>
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Home;
