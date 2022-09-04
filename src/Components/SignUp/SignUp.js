import { Grid, Paper, TextField, Button, FormHelperText } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
// import { useDispatch, useSelector } from "react-redux";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import { postSignup } from "../redux";
import FormLabel from "@mui/material/FormLabel";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const paperStyle = { padding: "20px", width: 300, margin: "0 auto" };
  // const login = useSelector((state) => state.postLogin);
  // const dispatch = useDispatch();
  const headerstyle = { margin: 10 };
  const AvatarStyle = { backgroundColor: "purple" };
  const emailStyle = { margin: "10px 0" };
  const pwdStyle = { margin: "10px 0" };
  const btnStyle = { margin: "10px 0" };
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").required("Required"),
    email: Yup.string().email("Enter Valid Email").required("Required"),
    phone: Yup.number().typeError("Enter Valid PhoneNo").required("Required"),
    password: Yup.string().min(3, "Too Short").required("Required"),
    gender: Yup.string().oneOf(["male", "female"]).required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Password not matching"
    ),
  });

  const onSubmit = (values, props) => {
    console.log(values);
    // dispatch(postSignup(values));
    props.resetForm();
    props.setSubmitting(false);
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={AvatarStyle}>
            <ContentCutIcon />
          </Avatar>
          <h2 style={headerstyle}>SIGNUP</h2>
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
                label="Name"
                variant="outlined"
                placeholder="Enter Name"
                name="name"
                fullWidth
                required
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                placeholder="Enter Email"
                name="email"
                fullWidth
                required
                style={emailStyle}
                helperText={<ErrorMessage name="email" />}
              />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <Field
                  as={RadioGroup}
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="gender"
                  defaultValue="female"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </Field>
              </FormControl>
              <FormHelperText>
                <ErrorMessage name="gender" />
              </FormHelperText>
              <Field
                as={TextField}
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                placeholder="Enter Number"
                name="phone"
                fullWidth
                required
                helperText={<ErrorMessage name="phone" />}
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
                type="password"
                style={pwdStyle}
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                id="outlined-basic"
                label=" Confirm Password"
                variant="outlined"
                placeholder="Confirm Password"
                name="confirmPassword"
                fullWidth
                required
                type="password"
                helperText={<ErrorMessage name="confirmPassword" />}
              />
              <Button
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
                style={btnStyle}
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "SIGN UP"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;
