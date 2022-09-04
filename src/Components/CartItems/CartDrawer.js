import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";
import CartEmptyState from "./CartEmptyState";
import CartItems from "./CartItems";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";

function CartDrawer(props) {
  console.log(props);

  const [emptyCart, setEmptyCart] = useState(false);

  return (
    <>
      <div>
        <Drawer
          open={props.cartOpen}
          anchor="right"
          PaperProps={{
            sx: { width: { xs: "100%", md: "40%" } },
          }}
          onClose={() => {
            props.handleClose();
          }}
        >
          <Box
            className="drawer-header"
            sx={{
              height: "10%",
              width: "100%",
              //borderBottom: "1px solid",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 15px",
            }}
          >
            <IconButton>
              <ArrowBackIosIcon sx={{ color: "black" }} />
            </IconButton>
            <Typography variant="h4">MY CART</Typography>
            <Box></Box>
          </Box>
          <Box
            className="drawer-body"
            sx={{
              height: "100%",
            }}
          >
            {emptyCart ? <CartEmptyState /> : <CartItems />}
          </Box>
        </Drawer>
      </div>
    </>
  );
}

export default CartDrawer;
