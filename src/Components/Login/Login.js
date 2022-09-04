import * as React from "react";
// import { postLogin } from "../redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
// import { useDispatch, useSelector } from "react-redux";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login({ handleChange }) {
  // const login = useSelector((state) => state.postLogin);
  // const dispatch = useDispatch();

  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: "55vh",
    width: 300,
    margin: "0 auto",
  };
  const AvatarStyle = { backgroundColor: "purple" };
  const btnstyle = { margin: "10px 0" };
  const userstyle = { margin: "10px 0" };
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter valid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    // dispatch(postLogin(values));
    props.setSubmitting(false);
    console.log(props);
  };
  // useEffect(() => {
  //   if (login.isLogedIn) {
  //     navigate("/");
  //   }
  // }, [login]);

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={AvatarStyle}>
            <ContentCutIcon />
          </Avatar>
          <h2>LOG IN</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                id="outlined-basic"
                label="Email"
                name="email"
                variant="outlined"
                placeholder="Enter Email"
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                id="outlined-basic"
                label="Password"
                name="password"
                variant="outlined"
                placeholder="Enter Password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
                type="password"
                style={userstyle}
              />
              <Button
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
                style={btnstyle}
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "LOG IN"}
              </Button>
            </Form>
          )}
        </Formik>

        {/* <Typography>
          <Link href="#">Forgot Password</Link>
        </Typography>
        <Typography>
          Do You Have an Account?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            {" "}
          </Link>
        </Typography> */}
      </Paper>
    </Grid>
  );
}

export default Login;
