import {
  Button,
  Divider,
  Drawer,
  IconButton,
  Paper,
  Box,
  Typography,
  CircularProgress,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React, { useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Close, DeleteForever } from "@mui/icons-material";
import axios from "../../config/axiosConfig";
import { toast } from "react-toastify";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function CartAkash(props) {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentType, setPaymentType] = useState("prepaid");

  const fetchCart = () => {
    setIsLoading(true);
    axios.get("/app/cart").then((response) => {
      setIsLoading(false);
      setCartItems(response.data.cart.products);
    });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handlePayment = async () => {
    const result = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!result) {
      alert("Something went wrong. Please contact admin");
      return;
    }

    axios
      .post("/app/order/create", {
        product_id: cartItems[0].id,
      })
      .then((result) => {
        const options = {
          key: "rzp_test_niMBCI16HQQN1F",
          currency: "INR",
          amount: (
            cartItems.reduce(
              (partialSum, a) => partialSum + parseInt(a.details.price),
              0
            ) * 100
          ).toString(),
          order_id: result.data.id,
          name: "The Gifttown",
          image: "/images/gifttown.png",
          // notes: {
          //   email: profile.data.email,
          //   index: index,
          //   paymentType: paymentType,
          //   promo: promo,
          // },
          // prefill: {
          //   name: profile.data.firstName + " " + profile.data.lastName,
          //   email: profile.data.email,
          // },
          handler: (response) => {
            navigate(`/order-placed/${result.data.id}`);
            // dispatch(postOrderProduct(index, paymentType, promo))
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      });
  };

  return (
    <Drawer
      open={props.isCartOpen}
      anchor="right"
      PaperProps={{
        sx: {
          width: { xs: "100%", md: "40%" },
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        },
      }}
      onClose={() => props.setIsCartOpen(false)}
    >
      <Box
        sx={{
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
            onClick={() => props.setIsCartOpen(false)}
          >
            <Close sx={{ color: "black", fontSize: "14px" }} />
          </IconButton>

          <div
            style={{
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            MY CART
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormControl>
            {/* <FormLabel>Payment Type</FormLabel> */}
            <RadioGroup
              row
              value={paymentType}
              onChange={(event) => {
                setPaymentType(event.target.value);
              }}
            >
              <FormControlLabel
                value="prepaid"
                control={<Radio />}
                label="Prepaid"
              />
              {/* <FormControlLabel value="cod" control={<Radio />} label="COD" /> */}
            </RadioGroup>
          </FormControl>
        </div>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLoading && <CircularProgress size={14} />}
          {cartItems.map((data) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid lightgray",
                  maxWidth: "300px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <img height={65} src={data.details?.image_url} />

                  <IconButton
                    style={{
                      position: "absolute",
                      top: "-7px",
                      left: "50px",
                      padding: 0,
                      color: "red",
                    }}
                    onClick={() => {
                      axios
                        .post("/app/cart", {
                          operation: "REMOVE_FROM_CART",
                          product_id: data.id,
                        })
                        .then((response) => {
                          fetchCart();
                          toast.success("Removed from cart");
                        });
                    }}
                  >
                    <DeleteForever />
                  </IconButton>

                  <div
                    style={{
                      fontWeight: 600,
                      marginLeft: "15px",
                    }}
                  >
                    {data.details?.name}
                  </div>
                </div>

                <div
                  style={{
                    fontWeight: 600,
                  }}
                >
                  ₹ {data.details?.price}
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "300px",
            margin: "10px auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontWeight: 600,
            }}
          >
            Total
          </div>
          <div>
            ₹
            {cartItems.reduce(
              (partialSum, a) => partialSum + parseInt(a.details?.price),
              0
            )}
          </div>
        </div>

        <div>
          <Button variant="contained" onClick={() => handlePayment()}>
            Checkout
          </Button>

          <Button
            variant="contained"
            onClick={() => props.setIsCartOpen(false)}
          >
            Continue shopping
          </Button>
        </div>

        {/* <Box className="drawer-content">
          <Box sx={{ border: 1, height: 50 }}> Cart Subtotal </Box>

          <Box
            m={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box> Would you like particylar stylist </Box>
            <Box sx={{ mt: 2 }}>
              <select>
                <option valuse="no">No preference</option>
                <option valuse="a">Ramesh</option>
                <option valuse="b">Suresh</option>
              </select>
            </Box>
          </Box>

          <Box
            m={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              m={1}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="outlined"
                backgroundColor="#000"
                sx={{ mt: "3%", width: "250px", height: 40 }}
                onClick={() => navigate("search-availability")}
              >
                Search availability
              </Button>

              <Button
                variant="outlined"
                sx={{ mt: "5%", width: "250px", height: 40 }}
              >
                continue shopping
              </Button>
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Drawer>
  );
}
