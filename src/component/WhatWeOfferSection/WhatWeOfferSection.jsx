import React, { useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Element } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";

const WhatWeOfferSection = () => {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // === DESKTOP/TABLET ===
  const boxLeftX = useTransform(scrollYProgress, [0, 0.3], [-200, 0]);
  const boxRightX = useTransform(scrollYProgress, [0.4, 0.7], [200, 0]);
  const textX = useTransform(scrollYProgress, [0.1, 0.5], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  // === MOBILE ===
  const mobileYTitle = useTransform(scrollYProgress, [0.0, 0.2], [-200, 0]);
  const mobileOpacityTitle = useTransform(scrollYProgress, [-1, 0.3], [0, 1]);
  const mobileYText = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  const mobileOpacityText = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);

  return (
    <Element name="what-we-offer" className="scroll-section" data-bg="light">
      <motion.div ref={ref} className="offer-section">
        <Box className="offer-inner">
          {/* === TITLE BOX === */}
          <motion.div
            className="offer-box left"
            style={
              isMobile
                ? { y: mobileYTitle, opacity: mobileOpacityTitle }
                : { x: boxLeftX }
            }
          >
            <Typography variant="h2" className="section-title offer-title">
              What We Offer
            </Typography>
          </motion.div>

          {/* === CENTER TEXT === */}
          <motion.div
            className="offer-text"
            style={
              isMobile
                ? { y: mobileYText, opacity: mobileOpacityText }
                : { x: textX, opacity: textOpacity }
            }
          >
            <Typography variant="body1" color="black" className="section-text">
              We provide lessons, equipment rentals, and wing foiling
              experiences for all levels. Whether you're just starting out or
              looking to advance, we’ve got a session for you.
            </Typography>
          </motion.div>

          {/* === RIGHT BOX / FEATURE HIGHLIGHT === */}
          <motion.div
            className="offer-box right"
            style={
              isMobile
                ? { opacity: mobileOpacityText }
                : { x: boxRightX, opacity: textOpacity }
            }
          >
            <Typography variant="body2" className="section-text">
              Rentals | Lessons | Stoke
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Element>
  );
};

export default WhatWeOfferSection;
