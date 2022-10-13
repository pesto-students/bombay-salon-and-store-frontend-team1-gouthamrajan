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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SelectTime() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Box>
        <IconButton onClick={() => setCartOpen(true)}>
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
          onClose={() => setCartOpen(false)}
        >
          <Box
            className="drawer-body"
            sx={{
              height: "100%",
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
              <Typography variant="h4">Availability</Typography>
              <Box></Box>
            </Box>

            <Box className="drawer-content">
              {/* <CartEmptyState /> */}

              <Box
                sx={{
                  height: 40,
                  //border: 1,
                  borderColor: "#d3d3d3",
                  backgroundColor: "#d3d3d3",
                }}
              >
                Select a Time with Ramesh
              </Box>

              <Box sx={{ height: 50 }}>
                You can choose a time for your Appointement
              </Box>
              <Box>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Morning </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <Button>10:00</Button>
                      <Button>10:30</Button>
                      <Button>11:00</Button>
                      <Button>11:30</Button>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Afternoon</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <Button>12:00</Button>
                      <Button>12:30</Button>
                      <Button>1:00</Button>
                      <Button>1:30</Button>
                      <Button>2:00</Button>
                      <Button>2:30</Button>
                      <Button>3:00</Button>
                      <Button>3:30</Button>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>Evening </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <Button>5:00</Button>
                      <Button>5:30</Button>
                      <Button>6:00</Button>
                      <Button>6:30</Button>
                      <Button>7:00</Button>
                      <Button>7:30</Button>
                      <Button>8:00</Button>
                      <Button>8:30</Button>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>

              <Box
                sx={{
                  mt: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black !important",
                }}
              >
                <Button
                  variant="outlined"
                  backgroundColor="#000"
                  sx={{ mt: "3%", width: "250px", height: 40 }}
                >
                  Checkout
                </Button>
                <Button
                  variant="outlined"
                  backgroundColor="#000"
                  sx={{ mt: "3%", width: "250px", height: 40 }}
                >
                  Change date
                </Button>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
