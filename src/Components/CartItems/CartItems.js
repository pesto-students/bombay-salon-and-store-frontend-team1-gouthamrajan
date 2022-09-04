import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function CartItems() {
  const Products = [
    {
      id: 1,
      name: "Hair Cut",
      duration: "50mins",
      price: "300",
      description:
        "Collagen production is stimulated via LED and hydrating mask to treat scarring and stretch marks.",
      image_url: require("../../assets/beard.png"),
      category: "service",
    },
  ];
  return (
    <div>
      <Box className="drawer-content">
        <Box
          sx={{
            height: 40,
            //border: 1,
            borderColor: "#eee",
            backgroundColor: "#eee",
          }}
        >
          grey box
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              mt: "3%",
              height: 200,
              //borderBottom: "1px solid",
            }}
          >
            cart summary
          </Box>
          <Box>
            <Button> Remove </Button>
          </Box>
        </Box>

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
      </Box>
    </div>
  );
}
