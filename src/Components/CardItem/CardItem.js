import { Button } from "@mui/material";
import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../config/axiosConfig";

const CardItem = (props) => {
  const { setShowAuth, isLoggedIn, setIsCartOpen } = useOutletContext();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        minWidth: props.width,
        height: props.height,
        backgroundImage: `url(${props.src})`,
        margin: "16px 0 16px 0",
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
            setIsCartOpen(true);
            axios
              .post("/app/cart", {
                operation: "ADD_TO_CART",
                product_id: props.productId,
              })
              .then((response) => {
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
  );
};

export default CardItem;
