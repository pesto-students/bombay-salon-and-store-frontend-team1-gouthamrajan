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
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Close, DeleteForever } from "@mui/icons-material";
import axios from "../../config/axiosConfig";
import { toast } from "react-toastify";
import { format } from "date-fns";

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

export default function Cartmain(props) {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentType, setPaymentType] = useState("prepaid");
  const [cartType, setCartType] = useState("");
  const [stylistId, setStylistId] = useState("");
  const [stylist, setStylist] = useState([]);
  const [scheduleTime, setScheduleTime] = useState(new Date());

  const handleChange = (event) => {
    setStylistId(event.target.value);
  };

  const fetchCart = () => {
    setIsLoading(true);
    axios.get("/app/cart").then((response) => {
      setIsLoading(false);
      setCartItems(response.data.cart.products);
      setCartType(response.data.cart.products[0].details.type);
    });
  };

  const fetchStylist = () => {
    setIsLoading(true);
    axios.get("/app/booking/stylists").then((response) => {
      setStylist(response.data.stylists);
    });
  };

  useEffect(() => {
    fetchCart();
    fetchStylist();
  }, [props.isCartOpen]);

  const handlePayment = async () => {
    console.log("test");
    const result = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!result) {
      alert("Something went wrong. Please contact admin");
      return;
    }
    let data = {};

    if (cartType == "product") {
      data["product_id"] = cartItems[0].id;
    } else {
      data["service_provider"] = stylistId;
      data["service_id"] = cartItems[0].id;
      data["date"] = format(new Date(scheduleTime), "yyyy-MM-dd");
      data["time_slot"] = format(new Date(scheduleTime), "HH:mm a");
    }
    console.log(data);
    axios
      .post(`/app/${cartType == "product" ? "order" : "booking"}/create`, data)
      .then((result) => {
        const options = {
          key: "rzp_test_niMBCI16HQQN1F",
          currency: "INR",
          amount: result.data._order.amount.toString(),
          order_id: result.data._order.id,
          // amount: (
          //   cartItems.reduce(
          //     (partialSum, a) => partialSum + parseInt(a.details.price),
          //     0
          //   ) * 100
          // ).toString(),
          // order_id: result.data.id,
          name: "TBSS",
          image: "/images/tbss.png",
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
            props.setIsCartOpen(false);
            const field = cartType === "product" ? "order" : "booking";
            navigate(`/order-placed/${cartType}/${result.data[field].id}`);
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
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "100%",
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
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img height={65} src={data.details?.image_url} />

                  <IconButton
                    style={{
                      position: "absolute",
                      top: "-7px",
                      right: 0,
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
                          props.fetchCart();
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

        {cartType == "service" && (
          <>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Stylist
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={stylistId}
                onChange={handleChange}
                label="Stylist"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {stylist.map((data) => (
                  <MenuItem value={data.id}>{data.name}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <div
              style={{
                marginTop: "20px",
              }}
            >
              <TextField
                id="datetime-local"
                type="datetime-local"
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
                value={scheduleTime}
                onChange={(event) => setScheduleTime(event.target.value)}
              />
            </div>
          </>
        )}

        <div
          style={{
            width: "100%",
            maxWidth: "300px",
            margin: "20px auto",
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
