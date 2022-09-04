import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        minWidth: props.width,
        height: props.height,
        backgroundImage: `url(${props.src})`,
        margin: '16px 0 16px 0',
        backgroundSize: 'cover',
        borderRadius: '6px'
      }}
    >
      <Button
        variant="contained"
        style={{
          backgroundColor: 'black',
          color: 'white'
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default CardItem;
