import React, { useContext, useEffect, useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Element } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";
import imageMask from "../../media/wave-yellow-mask.svg";
import { SeasonContext } from "../../context/SeasonContext";


const AboutSection = () => {


const { season, colors } = useContext(SeasonContext);

  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    console.log("AboutSection colors:", colors.bgOdd);
  }, [colors]);



  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const boxLeftX = useTransform(scrollYProgress, [0, 0.3], [-200, 0]);
  const textX = useTransform(scrollYProgress, [0.1, 0.5], [100, 0]);
  const boxRightX = useTransform(scrollYProgress, [0.4, 0.7], [200, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const taglineOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  const mobileYTitle = useTransform(scrollYProgress, [0.0, 0.2], [-200, 0]);
  const mobileOpacityTitle = useTransform(scrollYProgress, [-1, 0.3], [0, 1]);
  const mobileYText = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  const mobileOpacityText = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const mobileRotate = useTransform(scrollYProgress, [0.6, 0.8], [0, 360]);
  const mobileFadeOut = useTransform(scrollYProgress, [0.95, 9.99], [1, 0]);
  const mobileYTagline = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);
  const mobileOpacityTagline = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);

  return (
    <Element name="what-we-do" className="scroll-section-about" data-bg="dark" style={{backgroundColor: colors.bgOdd }}>
      <motion.div ref={ref} className="about-section">
        <Box className="about-inner" >
          {/* === LEFT / TITLE === */}
          <motion.div
            className="about-box left"
           style={{
 
  ...(isMobile
    ? { y: mobileYTitle, opacity: mobileOpacityTitle }
    : { x: boxLeftX })
}}

          >
            <Typography variant="h2" className="section-title" style={{ color: colors.title}}>
              About
            </Typography>
          </motion.div>

          {/* === CENTER TEXT === */}
          <motion.div
            className="about-text"
            style={
              isMobile
                ? { y: mobileYText, opacity: mobileOpacityText }
                : { x: textX, opacity: textOpacity }
            }
          >
           <Typography
  variant="body1"
  className="section-text"
  pb={2}
  style={{ color: colors.textOdd }}
>
  {season === "summer" ? (
    "Stoke delivers thrilling wing foiling lessons and events that connect you to the wind and water. We empower beginners and enthusiasts to ride with confidence, stoke, and style."
  ) : (
    "Stoke brings you unforgettable snowboard adventures and winter experiences. Whether you're carving your first turns or chasing powder, we fuel your winter stoke with passion and skill."
  )}
</Typography>

          </motion.div>

          {/* === RIGHT BOX / TAGLINE === */}
          <motion.div
            className="about-box right"
            style={
              isMobile
                ? {
                    y: mobileYTagline,
                    opacity: mobileOpacityTagline,
                    rotate: mobileRotate,
                    opacity: mobileFadeOut,
                  }
                : { x: boxRightX, opacity: taglineOpacity }
            }
          >
            <Typography variant="body2" className="section-text" style={{ color: colors.subText }}>
              Come ride with us 🌊💨
            </Typography>
          </motion.div>
        </Box>
      </motion.div>

      <img src={imageMask} alt="wave mask" className="wave-transition" />
    </Element>
  );
};

export default AboutSection;
