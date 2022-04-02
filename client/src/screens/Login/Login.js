import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Login from "../../components/Login/Login";
import Footer from "../../components/Footer/Footer";

const Index = (props) => {
  return (
    <>
      <Navbar cart={props?.cart||{}}/>
      <Login />
      <Footer />
    </>
  );
};

export default Index;
