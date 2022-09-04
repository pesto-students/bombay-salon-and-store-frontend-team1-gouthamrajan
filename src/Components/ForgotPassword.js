import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Grid, Paper, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import * as Yup from "yup";

const ForgotPassword = () => {
  const paperStyle = {
    padding: 20,
    height: "75vh",
    width: 300,
    margin: "0 auto",
  };
  const AvatarStyle = { backgroundColor: "purple" };
  const btnstyle = { margin: "10px 0" };
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
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
    console.log(props);
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={AvatarStyle}>
            <ContentCutIcon />
          </Avatar>
          <h2>Forgot Password</h2>
          <h4>Enter the email address you used to login</h4>
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
              <Button
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
                style={btnstyle}
                disabled={props.isSubmitting}
              >
                SUBMIT
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default ForgotPassword;
