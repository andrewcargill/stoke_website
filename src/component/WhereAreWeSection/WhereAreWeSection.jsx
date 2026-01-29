import React, { useRef } from "react";
import { Box, Typography, useMediaQuery, Link } from "@mui/material";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useSectionScrollMotion } from "../../hooks/useSectionScrollMotion";

import location1 from "../../media/images/location2.jpg";

const WhereAreWeSection = () => {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const motionPreset = useSectionScrollMotion(ref);

  return (
    <Element name="where-we-are" className="scroll-section" data-bg="dark">
      <motion.div ref={ref} className="where-section">
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            px: isMobile ? 2 : 3,
            py: isMobile ? 6 : 10,
          }}
        >
          {/* === HEADER (explicit purpose) === */}
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 760,
              mx: "auto",
              mb: isMobile ? 3 : 5,
            }}
          >
            <motion.div
              style={isMobile ? motionPreset.mobile.title : motionPreset.desktop.title}
            >
              <Typography variant="h2" className="section-title">
                Where the courses take place
              </Typography>
            </motion.div>

            <motion.div
              style={isMobile ? motionPreset.mobile.text : motionPreset.desktop.text}
            >
              <Typography
                variant="body1"
                className="section-title"
                sx={{ mt: 1.5 }}
              >
                All Stoke courses take place in and around{" "}
                <strong>Umeå, Northern Sweden</strong>. We ride on open water with
                steady wind and plenty of space — ideal for both beginners and
                progression.
              </Typography>
            </motion.div>
          </Box>

          {/* === HERO IMAGE (single, intentional) === */}
          <motion.div
            style={isMobile ? motionPreset.mobile.image : motionPreset.desktop.image}
          >
            <Box
              sx={{
                width: "100%",
                aspectRatio: isMobile ? "4 / 3" : "16 / 7",
                borderRadius: 4,
                overflow: "hidden",
                mb: 2,
              }}
            >
              <img
                src={location1}
                alt="Course location near Umeå"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </motion.div>

          {/* === LOCATION UTILITY (quiet but useful) === */}
          <motion.div style={motionPreset.desktop.cta}>
            <Box
              sx={{
                textAlign: "center",
                opacity: 0.85,
              }}
            >
              <Typography variant="body2" className="section-title">
                📍 Umeå, Sweden ·{" "}
                <Link
                  href="https://maps.app.goo.gl/mkrhSRGnHTkcdtF17"
       
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  View on Google Maps
                </Link>
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Element>
  );
};

export default WhereAreWeSection;
