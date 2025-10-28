import React, { useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Element } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";

const CoursesSection = () => {
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
    <Element name="our-courses" className="scroll-section" data-bg="dark">
      <motion.div ref={ref} className="courses-section">
        <Box className="courses-inner">
          {/* === LEFT / TITLE === */}
          <motion.div
            className="courses-box left"
            style={
              isMobile
                ? { y: mobileYTitle, opacity: mobileOpacityTitle }
                : { x: boxLeftX }
            }
          >
            <Typography variant="h2" className="section-title">
              Our Courses
            </Typography>
          </motion.div>

          {/* === CENTER TEXT === */}
          <motion.div
            className="courses-text"
            style={
              isMobile
                ? { y: mobileYText, opacity: mobileOpacityText }
                : { x: textX, opacity: textOpacity }
            }
          >
            <Typography variant="body1" className="section-text">
              Choose from beginner to advanced courses, tailored to your
              skill level. Stoke.se offers flexible coaching sessions for
              all ages, wind conditions, and riding goals.
            </Typography>
          </motion.div>

          {/* === RIGHT BOX / HIGHLIGHT === */}
          <motion.div
            className="courses-box right"
            style={
              isMobile
                ? { opacity: mobileOpacityText }
                : { x: boxRightX, opacity: textOpacity }
            }
          >
            <Typography variant="body2" className="section-text">
              Group & Private Sessions | Kids & Adults | All Levels
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Element>
  );
};

export default CoursesSection;
