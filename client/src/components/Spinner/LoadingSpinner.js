import React from "react";
//import LoadingOverlay from 'react-loading-overlay';
//import PulseLoader from 'react-spinners/PulseLoader';
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function LoadingSpinner({ active }) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={active}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default LoadingSpinner;
