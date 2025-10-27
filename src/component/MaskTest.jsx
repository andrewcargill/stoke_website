// src/components/MaskTest.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import surfImage from "../media/images/stoke_rider.webp"; // Replace with any image

const MaskTest = () => {
  return (
<Box
  sx={{
    width: 400,
    height: 400,
    backgroundImage: `linear-gradient(135deg, #000000, #000000), url(${surfImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

  }}
  className="move-main"
>
<Box
  className="masked-image"
  sx={{
    backgroundImage: `url(${surfImage})`,
  }}
/>



     
 

      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          bottom: 40,
          color: "white",
          fontWeight: "bold",
        }}
      >
        Masked Surf Element 🌊
      </Typography>
    </Box>
    
  );
};

export default MaskTest;
