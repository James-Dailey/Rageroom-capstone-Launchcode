import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import { AuthAPI } from "../../api";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";

const Login = () => {
  const navigate = useNavigate();
  const [isActive, setActive] = React.useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("email is required"),

    password: yup
      .string()
      .required("password is required")
      .min(5, "password should at-least 5 characters"),
  });

  const onSubmit = (values, { resetForm }) => {
    setActive(true);
    // console.log([data.name, data.email, data.phone, data.password], "data");
    // debugger;
    AuthAPI.login(values).then((res) => {
      console.log(values, "........");
      if (res?.status === 200) {
        console.log(res?.data, "response");
        localStorage.setItem("smash_user", JSON.stringify(res?.data?.data));
      }
      let user = localStorage.getItem("smash_user");
      if (user) {
        resetForm();
        navigate("/");
      }
      setActive(false);
    });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <>
      <LoadingSpinner active={isActive} />
      <Grid
        height="86vh"
        container
        xs={12}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10} sm={6} md={4} align="center">
          <Box
            onSubmit={formik.handleSubmit}
            component="form"
            sx={{
              padding: 3,
              borderRadius: 8,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              backgroundColor: "white",
            }}
          >
            <LockOpenIcon fontSize="large" />
            <Typography variant="h5" color="primary">
              Login
            </Typography>

            <Typography
              align="left"
              variant="body2"
              sx={{ fontSize: "15px" }}
              pb={1}
            >
              Email
            </Typography>
            <TextField
              id="outlined-basic"
              size="small"
              sx={{
                width: "100%",
                ".MuiInputBase-input": { fontFamily: "Poppins" },
              }}
              placeholder="abc@gmail.com"
              name="email"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <Typography
              align="left"
              variant="body2"
              sx={{ fontSize: "15px", paddingTop: 1 }}
              pb={1}
            >
              Password
            </Typography>
            <TextField
              id="outlined-basic"
              size="small"
              sx={{
                width: "100%",
                ".MuiInputBase-input": { fontFamily: "Poppins" },
              }}
              placeholder="Enter Password"
              name="password"
              type="password"
              {...formik.getFieldProps("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
