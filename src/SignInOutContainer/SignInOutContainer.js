import React, { useState } from "react";
import { Paper, Tabs, Tab, Typography, Box } from "@mui/material";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";

const SignInOutContainer = (props) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle = { width: 340, margin: "20px auto" };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel=${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper elevation={20} style={paperStyle}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="LOG IN" />
        <Tab label="SIGN UP" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Login
          setIsLoggedIn={props.setIsLoggedIn}
          handleChange={handleChange}
          setShowAuth={props.setShowAuth}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp
          setIsLoggedIn={props.setIsLoggedIn}
          setShowAuth={props.setShowAuth}
        />
      </TabPanel>
    </Paper>
  );
};

export default SignInOutContainer;
