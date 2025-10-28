import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typography, Button, Box, useMediaQuery } from "@mui/material";
import { Link as ScrollLink, Element } from "react-scroll";
import surfImage from "../../media/images/stoke_rider.webp";
import snowImage from "../../media/images/snowboarder.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const isMobile = useMediaQuery("(max-width:768px)");

  // === Desktop / Tablet Parallax ===
  const yBg = useTransform(scrollY, [0, 300], [0, 30]);
  const yMid = useTransform(scrollY, [0, 300], [0, -80]);
  const yFg = useTransform(scrollY, [0, 300], [0, -120]);
  const opacityTitle = useTransform(scrollY, [0, 200], [1, 0.7]);
  const scaleTitle = useTransform(scrollY, [0, 200], [1, 0.95]);

  // === Mobile Pan ===
  const bgX = useTransform(scrollY, [0, 600], ["80%", "0%"]);

  // === Mobile text motion ===
  const mobileY = useTransform(scrollY, [0, 200], [0, 200]);   // moves down
  const mobileOpacity = useTransform(scrollY, [0, 600], [1, 0]); // fades out

  return (
    <Element name="hero" className="hero-element">
      <motion.div
        className="parallax-hero"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        {/* === BACKGROUND LAYER === */}
        {!isMobile && <motion.div className="parallax-bg" style={{ y: yBg }} />}

        {/* === MIDGROUND IMAGE === */}
        <motion.div
          className="parallax-mid"
          style={isMobile ? { backgroundPosition: bgX } : { y: yMid }}
        />

        {/* === FOREGROUND TEXT === */}
        <motion.div
          className="parallax-fg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1, ease: "easeOut" }}
          style={
            isMobile
              ? { y: mobileY, opacity: mobileOpacity }
              : { y: yFg, opacity: opacityTitle, scale: scaleTitle } 
          }
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="h2" className="parallax-title">
              STOKE.SE
            </Typography>
            <Typography variant="h5" className="parallax-subtitle" gutterBottom>
              Västerbottens Wingfoil
            </Typography>
            <ScrollLink to="what-we-do" smooth duration={800}>
              <Button variant="outlined" className="parallax-button">
                Explore
              </Button>
            </ScrollLink>
          </Box>
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default HeroSection;
