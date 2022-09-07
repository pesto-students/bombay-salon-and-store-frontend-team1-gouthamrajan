import { Button, Dialog, DialogContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import SignInOutContainer from "../../SignInOutContainer/SignInOutContainer";
import Header from "../Header/Header";
import axios from "../../config/axiosConfig";

const Layout = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("/app/user/session")
      .then((response) => {
        console.log(response.data);
        setIsLoggedIn(true);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  }, []);

  return (
    <>
      <Header
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        showAuth={showAuth}
        setShowAuth={setShowAuth}
        isLoggedIn={isLoggedIn}
      />

      <Dialog
        open={showAuth}
        onClose={() => {
          setShowAuth(false);
        }}
      >
        {/* <Button
          onClick={() => {
            localStorage.setItem("userType", "guest");
            setShowAuth(false);
          }}
        >
          Continue as guest
        </Button> */}
        <DialogContent>
          <SignInOutContainer
            setShowAuth={setShowAuth}
            setIsLoggedIn={setIsLoggedIn}
          />
        </DialogContent>
      </Dialog>
      <Outlet
        context={{
          setShowAuth,
          isLoggedIn,
          setIsCartOpen,
        }}
      />
      <Footer />
    </>
  );
};

export default Layout;
