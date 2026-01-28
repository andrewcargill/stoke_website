import React, { useContext, useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Element, Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import imageMask from "../../media/wave-yellow-mask.svg";
import { SeasonContext } from "../../context/SeasonContext";
import image from "../../media/images/ocean.webp";

import Button from "@mui/material/Button";
import { useSectionScrollMotion } from "../../hooks/useSectionScrollMotion";

const AboutSection = () => {
  const { season, colors } = useContext(SeasonContext);

  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const motionPreset = useSectionScrollMotion(ref);

  if (!colors) return null;

  return (
    <Element
      name="what-we-do"
      className="scroll-section-about"
      data-bg="dark"
      style={{ backgroundColor: colors.bgOdd }}
    >
      <motion.div ref={ref} className="about-section">
        <Box className="about-inner">
          {/* LEFT COLUMN */}
          <Box className="about-col about-col-left">
            <motion.div
              className="about-box left"
              style={
                isMobile
                  ? motionPreset.mobile.title
                  : motionPreset.desktop.title
              }
            >
              <Typography
                variant="h2"
                className="section-title"
                gutterBottom
                style={{ color: colors.title }}
              >
                About
              </Typography>
            </motion.div>

            <motion.div
              className="about-text"
              style={
                isMobile ? motionPreset.mobile.text : motionPreset.desktop.text
              }
            >
              <Typography
                variant="body1"
                className="section-text"
                pb={2}
                style={{ color: colors.textOdd }}
              >
                {season === "summer"
                  ? "Stoke delivers thrilling wing foiling lessons and events that connect you to the wind and water. We empower beginners and enthusiasts to ride with confidence, stoke, and style."
                  : "Stoke brings you unforgettable snowboard adventures and winter experiences. Whether you're carving your first turns or chasing powder, we fuel your winter stoke with passion and skill."}
              </Typography>
            </motion.div>

            {/* Signoff / tagline */}
            {/* <motion.div
      className="about-signoff"
      style={isMobile ? { y: mobileYTagline, opacity: mobileOpacityTagline } : { opacity: taglineOpacity }}
    >
      <Typography variant="body2" className="section-text" style={{ color: colors.subText }}>
        Come ride with us 🌊💨
      </Typography>
    </motion.div> */}

            {/* Call to Action Button */}
            <motion.div
              className="about-cta"
              style={
                isMobile ? motionPreset.mobile.cta : motionPreset.desktop.cta
              }
            >
              <ScrollLink to="contact" smooth duration={600} offset={-80}>
                <Button
                  variant="contained"
                  size="large"
                  className="cta-button"
                  sx={{
                    mt: 2,
                    textTransform: "none",
                    fontWeight: 700,
                    borderRadius: "999px",
                    px: 3,
                    py: 1.2,
                    backgroundColor: colors.accent || colors.title,
                    color: colors.bgOdd,
                    "&:hover": {
                      backgroundColor: colors.title,
                    },
                  }}
                >
                  Contact us
                </Button>
              </ScrollLink>
            </motion.div>
          </Box>

          {/* RIGHT COLUMN (IMAGE) */}
          <Box className="about-col about-col-right">
            <motion.div
              className="about-image"
              style={
                isMobile
                  ? motionPreset.mobile.image
                  : motionPreset.desktop.image
              }
            >
              <img
                src={image}
                alt="Ocean background (placeholder)"
                loading="lazy"
              />
            </motion.div>
          </Box>
        </Box>
      </motion.div>

      <img src={imageMask} alt="wave mask" className="wave-transition" />
    </Element>
  );
};

export default AboutSection;
