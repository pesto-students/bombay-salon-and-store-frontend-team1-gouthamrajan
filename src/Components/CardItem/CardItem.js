import { Button } from "@mui/material";
import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../config/axiosConfig";

const CardItem = (props) => {
  const { setShowAuth, isLoggedIn, setIsCartOpen, fetchCart } = useOutletContext();

  return (
    <div
      style={{
        minWidth: props.width,
        boxShadow: '0 0 10px lightgrey',
        borderRadius: '4px'
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          height: props.height,
          backgroundImage: `url(${props.src})`,
          margin: "0px 0 5px 0",
          backgroundSize: "cover",
          borderRadius: "6px",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "black",
            color: "white",
          }}
          onClick={() => {
            if (!isLoggedIn) {
              setShowAuth(true);
            } else {

              axios
                .post("/app/cart", {
                  operation: "ADD_TO_CART",
                  product_id: props.productId,
                })
                .then((response) => {
                  fetchCart()
                  setIsCartOpen(true);
                  toast.success("Added to cart");
                });
            }

            // let cart = localStorage.getItem("cart")
            //   ? JSON.parse(localStorage.getItem("cart"))
            //   : [];

            // cart.push({
            //   productId: props.productId,
            //   src: props.src,
            //   name: props.label,
            // });
            // localStorage.setItem("cart", JSON.stringify(cart));
          }}
        >
          Add to cart
        </Button>
      </div>

      <div
        style={{
          fontWeight: 700
        }}
      >
        {props.label}
      </div>
    </div>
  );
};

export default CardItem;
