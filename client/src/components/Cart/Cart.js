/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  Typography,
  Paper,
  Button,
  Container,
  Table,
  TableHead,
  TableRow,
  TableContainer,
  TableBody,
  TableCell,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { loadStripe } from "@stripe/stripe-js";
// import cartoon7 from "../../assets/images/cartoon7.jpg";
// import cartoon8 from "../../assets/images/cartoon8.jpg";
// import cartoon9 from "../../assets/images/cartoon9.jpeg";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";

const Cart = (props) => {
  console.log(props);
  const [product, setProduct] = useState({
    name: "Products",
    price: 12,
    description: "This is a sample  list products",
  });

  useEffect(() => {
    setProduct({ ...product, price: calculateTotal() });
  }, [props.cart]);
  async function handleToken(token, addresses) {
    const response = await axios.post("http://localhost:8000/checkout", {
      token,
      product: product,
    });

    console.log(response.status);

    if (response.status === 200) {
      alert("Success! Check email for details");
    } else {
      alert("Something went wrong");
    }
  }
  const calculateTotal = () => {
    let total = 0;
    Object.keys(props.cart || {}).map((key, index) => {
      total +=
        parseFloat(props.items[key].price?.replace("$", "")) *
        props.cart[key].count;
    });
    return total.toFixed(2);
  };

  return (
    <Container className="p-5">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(props.cart || {}).map((key, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">#{index + 1}</TableCell>

                <TableCell component="th" scope="row">
                  <img src={props.items[key].img} width="100px" />
                </TableCell>
                <TableCell component="th" scope="row">
                  {props.items[key].title}
                </TableCell>

                <TableCell component="th" scope="row">
                  {props.items[key].price}
                  {" x "}
                  {props.cart[key].count}
                </TableCell>

                <TableCell align="left">{props.cart[key].count}</TableCell>
              </TableRow>
            ))}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left"></TableCell>

              <TableCell component="th" scope="row"></TableCell>
              <TableCell component="th" scope="row"></TableCell>

              <TableCell component="th" scope="row">
                Total: ${calculateTotal()}
              </TableCell>

              <TableCell align="left"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <hr />
      <div className="form-group container text-center">
        <StripeCheckout
          className="center"
          stripeKey="pk_test_JTYjJnkleR80a5sndukOEEzD"
          token={handleToken}
          amount={product.price * 100}
          name="All The Rage Products"
          billingAddress
          shippingAddress
        />
      </div>
    </Container>
  );
};

export default Cart;
