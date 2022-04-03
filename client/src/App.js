/* eslint-disable no-unused-vars */
import Router from "./routes/index";
import defaultTheme from "./themes/defaultTheme";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useSelector } from 'react-redux'
import { ThemeProvider } from "@mui/material/styles";
import './App.css';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function App() {

    // const clientSecret = getClientSecret();
    // const options = {
    //     // passing the client secret obtained from the server
    //     clientSecret: clientSecret,
    // };

  return (
    <><div className="App">
      {/* <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements> */}
    </div><>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <ToastContainer
            position="top-right"
            autoClose={6000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Slide} />
        </ThemeProvider>
      </></>
  );
};

export default App;
