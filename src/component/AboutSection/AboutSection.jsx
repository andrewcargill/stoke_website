// components/AboutSection/AboutSection.jsx

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Element } from "react-scroll";
import "./AboutSection.css";

const AboutSection = () => {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  // ✅ Scroll tracking relative to the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // triggers as section enters and exits view
  });

  // ✅ Transforms based on scrollYProgress (0 to 1)
  const boxLeftX = useTransform(scrollYProgress, [0.1, 0.4], [-100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const boxRightX = useTransform(scrollYProgress, [0.4, 0.6], [100, 0]);

  return (
    <Element name="what-we-do" className="scroll-section" data-bg="dark">
      <motion.div ref={ref} className="about-section">
        <Box className="about-inner">
          {/* === LEFT BOX (Title) === */}
          <motion.div
            className="about-box left"
            style={isMobile ? {} : { x: boxLeftX }}
          >
            <Typography variant="h2" className="section-title">
              About
            </Typography>
          </motion.div>

          {/* === CENTER TEXT === */}
          <motion.div
            className="about-text"
            style={isMobile ? {} : { opacity: textOpacity }}
          >
            <Typography variant="body1" className="section-text">
              Stoke.se delivers thrilling wing foiling lessons and events that connect you to the wind and water. We empower beginners and enthusiasts to ride with confidence, stoke, and style.
            </Typography>
          </motion.div>

          {/* === RIGHT BOX (Tagline) === */}
          <motion.div
            className="about-box right"
            style={isMobile ? {} : { x: boxRightX }}
          >
            <Typography variant="body2" className="section-text">
              Come ride with us 🌊💨
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Element>
  );
};

export default AboutSection;
