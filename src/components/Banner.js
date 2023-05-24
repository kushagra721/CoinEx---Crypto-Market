import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import "../components/Banner.css";
import Corosel from "./Corosel";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <Container className="bannerContent">
          <div className="tagline">
            <Typography
              variant="h2"
              style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "Montserrat",
              }}
            >
              Crypto Tracker
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                color: "darkgrey",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
              }}
            >
              Get all the Info regarding your favorite Crypto Currency
            </Typography>
          </div>
         <Corosel/>
        </Container>
      </div>
    </>
  );
};

export default Banner;
