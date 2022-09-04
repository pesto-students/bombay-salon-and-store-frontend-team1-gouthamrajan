import {
  Button,
  Drawer,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

export default function Cart() {
  const [cartOpen, setcartOpen] = useState(false);

  return (
    <Box>
      <IconButton onClick={() => setcartOpen(true)}>
        <ShoppingCartIcon />
      </IconButton>
      <Drawer
        open={cartOpen}
        anchor="right"
        // PaperProps={{ style: { width: "40%" } }}
        PaperProps={{
          sx: { width: { xs: "100%", md: "40%" } },
        }}
        //onClick={() => setcartOpen(true)}
        onClose={() => setcartOpen(false)}
      >
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ position: "relative", m: 2 }}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "8%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <span>My Cart</span>
        </Typography>

        <Box
          sx={{
            height: 40,
            border: 1,
            borderColor: "#eee",
            backgroundColor: "#eee",
          }}
        >
        </Box>

        <Box sx={{ height: 200 }}></Box>

        <Box sx={{ border: 1, height: 60 }}></Box>

        <Box m={1} display="flex" justifyContent="center" alignItems="center">
          <Button
            variant="outlined"
            sx={{ mt: "20%", width: "50%", height: 50 }}
          >
            PROCEED CHECKOUT
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
