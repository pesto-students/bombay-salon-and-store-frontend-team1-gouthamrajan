import { Button, IconButton, AppBar, Box, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useOutletContext } from "react-router-dom";
import Logo from "../../assets/image/tbss.png";
import PersonIcon from "@mui/icons-material/Person";
import CartAkash from "../Cart/CartAkash";
import axios from "../../config/axiosConfig";

export default function Header(props) {
  const links = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Book Now",
      link: "/book-now",
    },
    {
      label: "Shop Now",
      link: "/shop-now",
    },
  ];
  const [isDrawwerOpen, setisDrawwerOpen] = useState(false);
  const [navBarBlack, setnavBarBlack] = useState(false);
  const [cartOpen, setcartOpen] = useState(false);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  useEffect(() => {
    const changeNavBgcolor = () => {
      if (window.scrollY >= 50) {
        setnavBarBlack(true);
      } else {
        setnavBarBlack(false);
      }
    };
    document.addEventListener("scroll", changeNavBgcolor);
    return () => {
      document.removeEventListener("scroll", changeNavBgcolor);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CartAkash
        setIsCartOpen={props.setIsCartOpen}
        isCartOpen={props.isCartOpen}
        fetchCart={props.fetchCart}
      />
      <AppBar
        style={{ backgroundColor: navBarBlack ? "black" : "white" }}
        position="fixed"
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            {/* <div
                        className={styles.menu_icon_conta}
                        >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Menu />
                        </IconButton>
                        </div> */}
            <Link to="/">
              <img src={Logo} height={40} />
            </Link>
          </div>

          <div>
            {/* {links.map((data) => (
                            <Button
                                style={{ color: navBarBlack ? 'white' : 'black' }}
                                LinkComponent={Link}
                                to={data.link}
                            >
                                  {data.label}
                            </Button>
                        ))} */}

            <IconButton
              onClick={() => {
                if (!props.isLoggedIn) {
                  props.setShowAuth(true);
                }
              }}
            >
              <PersonIcon
                style={{
                  color: navBarBlack ? "white" : "black",
                  fontSize: "30px",
                }}
              />
            </IconButton>

            <IconButton
              onClick={() => {
                if (!props.isLoggedIn) {
                  props.setShowAuth(true);
                } else {
                  props.setIsCartOpen(!props.isCartOpen);
                }
              }}
              aria-label="cart"
            >
              <StyledBadge badgeContent={props.cartCount} color="secondary">
                <ShoppingCartIcon
                  style={{ color: navBarBlack ? "white" : "black" }}
                />
              </StyledBadge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
