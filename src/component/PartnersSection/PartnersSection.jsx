import React, { useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Element } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";

const PartnersSection = () => {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // === DESKTOP/TABLET ===
  const boxLeftX = useTransform(scrollYProgress, [0, 0.3], [-200, 0]);
  const boxRightX = useTransform(scrollYProgress, [0.4, 0.7], [200, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  // === MOBILE ===
  const mobileYTitle = useTransform(scrollYProgress, [0.0, 0.2], [-200, 0]);
  const mobileOpacityTitle = useTransform(scrollYProgress, [-1, 0.3], [0, 1]);
  const mobileYText = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  const mobileOpacityText = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);

  return (
    <Element name="our-partners" className="scroll-section" data-bg="light">
      <motion.div ref={ref} className="partners-section">
        <Box className="partners-inner">
          {/* === TITLE === */}
          <motion.div
            className="partners-box left"
            style={
              isMobile
                ? { y: mobileYTitle, opacity: mobileOpacityTitle }
                : { x: boxLeftX }
            }
          >
            <Typography variant="h2" className="section-title">
              Our Partners
            </Typography>
          </motion.div>

          {/* === CONTENT === */}
          <motion.div
            className="partners-text"
            style={
              isMobile
                ? { y: mobileYText, opacity: mobileOpacityText }
                : { opacity: textOpacity }
            }
          >
            <Typography variant="body1" className="section-text">
              We proudly collaborate with premium brands and passionate people
              who help bring Stoke.se to life — from gear manufacturers to local
              legends and community sponsors.
            </Typography>
          </motion.div>

          {/* === FEATURE / LOGO SLOT (placeholder) === */}
          <motion.div
            className="partners-box right"
            style={
              isMobile
                ? { opacity: mobileOpacityText }
                : { x: boxRightX, opacity: textOpacity }
            }
          >
            <Typography variant="body2" className="section-text">
              Core Equipment | Local Businesses | Global Brands
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Element>
  );
};

export default PartnersSection;
