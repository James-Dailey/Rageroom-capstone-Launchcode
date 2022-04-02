/* eslint-disable no-unused-vars */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import { AuthAPI } from "../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Signup = (props) => {
  const navigate = useNavigate();
  const [isActive, setActive] = React.useState(false);
  const handleDialogClose = () => {
    props.setOpenDialog(false);
  };

  const handleDialogCancel = () => {
    props.setOpenDialog(false);
    formik.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .required("name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("email is required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone number is required"),
    password: yup
      .string()
      .required("password is required")
      .min(5, "password should at-least 5 characters"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const onSubmit = (values, { resetForm }) => {
    handleDialogClose();
    setActive(true);

    AuthAPI.signup(values).then((res) => {
      if (res?.status === 201) {
        console.log(res?.data, "response");
      }
      const user = res?.data;
      if (user?.status === "success") {
        navigate("/login");
        resetForm();
      }
      setActive(false);
    });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <>
      <LoadingSpinner active={isActive} />
      <Dialog open={props.openDialog} onClose={handleDialogClose}>
        <Box component="form" onSubmit={formik.handleSubmit}>
          <DialogTitle color={"blue"}>Sign Up</DialogTitle>
          <DialogContent>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              xs={12}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  align="left"
                  variant="body2"
                  sx={{ fontSize: "15px" }}
                  pb={1}
                >
                  Name
                </Typography>
                <TextField
                  id="outlined-basic"
                  size="small"
                  sx={{
                    width: "100%",
                    ".MuiInputBase-input": { fontFamily: "Poppins" },
                  }}
                  placeholder="Enter Name"
                  name="name"
                  {...formik.getFieldProps("name")}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  align="left"
                  variant="body2"
                  sx={{ fontSize: "15px" }}
                  pb={1}
                >
                  Telephone
                </Typography>
                <TextField
                  id="outlined-basic"
                  size="small"
                  sx={{
                    width: "100%",
                    ".MuiInputBase-input": { fontFamily: "Poppins" },
                  }}
                  placeholder="Enter Telephone"
                  name="phone"
                  {...formik.getFieldProps("phone")}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  align="left"
                  variant="body2"
                  sx={{ fontSize: "15px" }}
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
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  align="left"
                  variant="body2"
                  sx={{ fontSize: "15px" }}
                  pb={1}
                >
                  Confirm Password
                </Typography>
                <TextField
                  id="outlined-basic"
                  size="small"
                  sx={{
                    width: "100%",
                    ".MuiInputBase-input": { fontFamily: "Poppins" },
                  }}
                  placeholder="Enter Password"
                  name="passwordConfirmation"
                  type="password"
                  {...formik.getFieldProps("passwordConfirmation")}
                  error={
                    formik.touched.passwordConfirmation &&
                    Boolean(formik.errors.passwordConfirmation)
                  }
                  helperText={
                    formik.touched.passwordConfirmation &&
                    formik.errors.passwordConfirmation
                  }
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogCancel}>Cancel</Button>
            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default Signup;
