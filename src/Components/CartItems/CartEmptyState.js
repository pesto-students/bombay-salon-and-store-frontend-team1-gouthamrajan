import {
  Button,
  Divider,
  Drawer,
  IconButton,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

export default function CartEmptyState() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Box className="drawer-content">
      <Box
        m={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Box sx={{ height: "50%" }}> empty cart image </Box> */}

        <Box>Please add any services or products in your cart</Box>

        <Button variant="outlined" sx={{ mt: "3%", width: "45%", height: 40 }}>
          continue shopping
        </Button>
      </Box>
    </Box>
  );
}
