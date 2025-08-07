import React from "react";
import { Box, Typography } from "@mui/material";
import StokeLogo from "../component/StokeLogo";
import stokeRider from "../media/images/stoke_rider.png";
import HomePageMailingList from "../component/HomePageMailingList";

const HomePage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        pt: { xs: 6, md: 8 },
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {/* Logo */}
      <Typography
        variant="h1"
        gutterBottom
        className="logo-water"
        sx={{ display: "inline-block", fontWeight: "bold", textAlign: "center" }}
      >
        <StokeLogo size={2} />
      </Typography>

      {/* Rider animation */}
      <Box
        component="img"
        src={stokeRider}
        alt="Wing foiling silhouette"
        className="rider-pass"
        sx={{
          height: { xs: 100, sm: 105, md: 120, lg: 160 },
          width: "auto",
          flexShrink: 0,
        }}
      />

      {/* Under construction */}
      <Box mt={4} sx={{ width: "100%", maxWidth: 600 }}>
        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
          🏗️ Our new site is under construction
        </Typography>
      </Box>
      <Box mt={4} sx={{ width: "100%", maxWidth: 600 }}>
        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
         <HomePageMailingList />
        </Typography>
      </Box>


    </Box>
  );
};

export default HomePage;
