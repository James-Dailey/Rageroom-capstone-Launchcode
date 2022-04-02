import React from "react";
import { Box } from "@mui/material";
import { FlapperSpinner } from "react-spinners-kit";

const Loader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlapperSpinner size={100} color="#323232" />
    </Box>
  );
};

export default Loader;
