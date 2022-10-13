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
  const [cartCount, setCartCount] = useState(0)

  const fetchCart = () => {
    axios.get("/app/cart").then((response) => {
      setCartCount(response.data.cart.products.length);
    });
  };

  useEffect(() => {
    fetchCart()
  }, [])



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

  useEffect(() => {
    
  axios.get('/app/booking')
  .then((response)=>{
    console.log(response)
  })
  }, [])
  

  return (
    <>
      <Header
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        showAuth={showAuth}
        setShowAuth={setShowAuth}
        isLoggedIn={isLoggedIn}
        cartCount={cartCount}
        fetchCart={fetchCart}
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
          fetchCart,
          cartCount
        }}
      />
      <Footer />
    </>
  );
};

export default Layout;
