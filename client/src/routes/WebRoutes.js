import React, { lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import cartoon1 from "../assets/images/image1.jpg";
import cartoon2 from "../assets/images/image2.jpg";
import cartoon3 from "../assets/images/image3.jpg";
import cartoon4 from "../assets/images/image4.jpg";
import cartoon5 from "../assets/images/image5.jpg";
import cartoon6 from "../assets/images/image6.png";

const Home = lazy(() => import("../screens/Home/Home"));
const Cart = lazy(() => import("../screens/Cart/Cart"));
const About = lazy(() => import("../screens/About/About"));
const Login = lazy(() => import("../screens/Login/Login"));

export default function AppRoutes() {

  const items = [
    {
      img: cartoon1,
      title:"Mildly Annoyed Package: 1 hour, M-Th",
      price:"$200.00"
    },
    {
      img: cartoon2,
      title:"Slightly Perturbed Package: 2 Hours, M-Th ",
      price:"$300.00"
    },
    {
      img: cartoon3,
      title:"Weekend Warrior: 1 Hour, Fri-Sat",
      price:"$375.00"
    },
    {
      img: cartoon4,
      title:"Anger Management Package 2.5 Hours, Fri-Sat",
      price:"$450.00"
    },
    {
      img: cartoon5,
      title:"Custom Package, call for details",
      price:"$0.00"
    },
    {
      img: cartoon6,
      title:"T-Shirt",
      price:"$20.00"
    },
   
  ];
  const [cart,setCart]=useState({})

  const handleAddCard=(index)=>{

    const carts={...cart};

    console.log(carts,index)
    if(carts[index]){
      carts[index].count+=1
      console.log("yes")
    }else{
      carts[index]={};
      carts[index].count=1
    }
    console.log(carts)
    setCart(carts)

  }
  console.log(cart)
  return (
    <React.Suspense>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <ProtectedRoute>
                <Home items={items} cart={cart} handleAddCard={handleAddCard}  />
              </ProtectedRoute>
            </>
          }
        />
          <Route
          exact
          path="/cart"
          element={
            <>
              <ProtectedRoute>
                <Cart items={items} cart={cart} handleAddCard={handleAddCard}  />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route exact path="/login" cart={cart} element={<Login />} />
      </Routes>
    </React.Suspense>
  );
}
