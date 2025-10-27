import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typography, Box } from "@mui/material";
import surfImage from "../media/images/stoke_rider.webp";

const ParallaxHero = () => {
  const { scrollY } = useScroll();

  // === Parallax layers ===
  const yBg = useTransform(scrollY, [0, 300], [0, -50]);
  const yMid = useTransform(scrollY, [0, 300], [0, -100]);
  const yFg = useTransform(scrollY, [0, 300], [0, -200]);

  // === Next section reveal ===
  const opacityNext = useTransform(scrollY, [100, 400], [0, 1]);
  const yNext = useTransform(scrollY, [100, 400], [50, 0]);

  // === “Ride the Flow” content zoom ===
  const scaleBox = useTransform(scrollY, [150, 400], [0.9, 1]);
  const opacityBox = useTransform(scrollY, [150, 400], [0, 1]);

  // === Spinning square rotation ===
  const rotateSquare = useTransform(scrollY, [700, 900], [-180, 0]);
// const rotateSquare = useTransform(scrollY, [0, 700, 900, 1100], [0, 0, 180, 360]);
const xSquare = useTransform(scrollY, [700, 900], [0, 100]);

  // ✨ Fade in "Start" text
  const opacityStart = useTransform(scrollY, [900, 1000], [0, 1]); // starts after spin begins
  const yStart = useTransform(scrollY, [950, 1100], [30, 0]); // slides up gently
  const scaleStart = useTransform(scrollY, [600, 750], [0.8, 1]);




  return (
    <div className="page-wrapper">
      {/* === HERO SECTION === */}
      <div className="parallax-container">
        <motion.div className="parallax-bg" style={{ y: yBg }} />
        <motion.img
          src={surfImage}
          alt="Wing foilers"
          className="parallax-mid"
          style={{ y: yMid }}
        />
        <motion.div className="parallax-fg" style={{ y: yFg }}>
          <Typography variant="h2" className="parallax-title">
            Stoke the Wind 🏴‍☠️💨
          </Typography>
        </motion.div>
      </div>

      {/* === NEXT SECTION === */}
      <motion.div
        className="next-section"
        style={{
          opacity: opacityNext,
          y: yNext,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Spinning square */}
          {/* <motion.div
            className="spinning-square"
            style={{
              rotate: rotateSquare,
                x: xSquare,
            }}
          /> */}

          {/* 🌀 Spinning box with fading text inside */}
          <motion.div
            className="spinning-square"
            style={{
              width: 150,
              height: 150,
              background: "linear-gradient(135deg, #4facfe, #00f2fe)",
              borderRadius: 16,
              rotate: rotateSquare,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              position: "relative",
              x: xSquare,
            }}
          >
            {/* ✨ Text inside */}
            <motion.div
              style={{
                opacity: opacityStart,
                scale: scaleStart,
                position: "absolute",
              }}
            >
              <Typography variant="h4">Start</Typography>
            </motion.div>
          </motion.div>

          {/* “Ride the Flow” content box */}
          <motion.div
            className="content-box"
            style={{
              scale: scaleBox,
              opacity: opacityBox,
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Typography variant="h3" sx={{ mb: 2 }}>
              Ride the Flow
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600 }}>
              Discover the thrill of foiling. From the first glide to mastering
              the wind, Stoke brings the sea closer to you.
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </div>
  );
};

export default ParallaxHero;
