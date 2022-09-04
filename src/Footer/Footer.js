import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div
      className={styles.footer}
    >
      <div
        style={{
          width: '200px',
          textAlign: 'center'
        }}
      >
        <Typography>
          Colaba Causeway, Bombay, India, 400005 987 654 321
        </Typography>
      </div>

      <div>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <IconButton sx={{ color: "#fff" }}>
              <InstagramIcon sx={{ margin: "0px 10px" }} />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <FacebookIcon sx={{ margin: "0px 10px" }} />
            </IconButton>
          </div>

          <div>
            <Button
              style={{
                backgroundColor: 'white',
                color: 'black',
                margin: 6
              }}
            >
              ABOUT US
            </Button>
            <Button
              style={{
                backgroundColor: 'white',
                color: 'black',
                margin: 6
              }}
            >
              CONTACT US
            </Button>
            <Button
              style={{
                backgroundColor: 'white',
                color: 'black',
                margin: 6
              }}
            >
              FAQ
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{
          width: '200px',
          textAlign: 'center'
        }}
      >
        <Typography>© 2022 A New You Salon All Rights Reserved.</Typography>
      </div>
    </div>
  );
}
