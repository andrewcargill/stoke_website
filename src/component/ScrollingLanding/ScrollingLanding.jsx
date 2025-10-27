import React, { useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Link as ScrollLink, Element } from "react-scroll";
import HeroSection from "../HeroSection/HeroSection";
import MobileNav from "../MobileNav"; // ✅
import "./ScrollingLanding90s.css";
import { motion, useScroll, useTransform } from "framer-motion";
import DesktopNav from "../DeskTopNav";


const sections = [
  { id: "hero", title: "Stoke the Wind 🏴‍☠️💨" },
  { id: "what-we-do", title: "What We Do" },
  { id: "what-we-offer", title: "What We Offer" },
  { id: "our-courses", title: "Our Courses" },
  { id: "our-partners", title: "Our Partners" },
  { id: "where-we-are", title: "Where We Are" },
  { id: "contact", title: "How to Contact" },
];


const ScrollLanding = () => {



 const AboutSection = () => {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // === DESKTOP/TABLET ===
  const boxLeftX = useTransform(scrollYProgress, [0, 0.3], [-200, 0]);
  const textX = useTransform(scrollYProgress, [5, 0.5], [100, 0]); // ⬅️ independent
  const boxRightX = useTransform(scrollYProgress, [0.4, 0.7], [200, 0]); // ⬅️ independent
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const taglineOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  // === MOBILE ===
  const mobileYTitle = useTransform(scrollYProgress, [0.00, 0.2], [-200, 0]);
  const mobileOpacityTitle = useTransform(scrollYProgress, [-1, 0.95], [0, 1]);
  const mobileYText = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  const mobileOpacityText = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
const mobileRotate = useTransform(scrollYProgress, [0.6, 0.8], [0, 360]);

const mobileFadeOut = useTransform(scrollYProgress, [0.95, 9.99], [1, 0]);

  const mobileYTagline = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);
  const mobileOpacityTagline = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);


  return (
    <Element name="what-we-do" className="scroll-section" data-bg="dark">
      <motion.div ref={ref} className="about-section">
        <Box className="about-inner">

          {/* === TITLE BOX === */}
          <motion.div
            className="about-box left"
            style={
              isMobile
                ? { y: mobileYTitle, opacity: mobileOpacityTitle }
                : { x: boxLeftX }
            }
          >
            <Typography variant="h2" className="section-title">
              About
            </Typography>
          </motion.div>

          {/* === CENTER TEXT === */}
          <motion.div
            className="about-text"
            style={
              isMobile
                ? { y: mobileYText, opacity: mobileOpacityText }
                : { x: textX, opacity: textOpacity } // ✅ now has x control
            
            }
          >
            <Typography variant="body1" className="section-text">
              Stoke.se delivers thrilling wing foiling lessons and events that
              connect you to the wind and water. We empower beginners and
              enthusiasts to ride with confidence, stoke, and style.
            </Typography>
          </motion.div>

          {/* === RIGHT BOX / TAGLINE === */}
          <motion.div
            className="about-box right"
            style={
              isMobile
                ? { y: mobileYTagline, opacity: mobileOpacityTagline, rotate: mobileRotate, opacity: mobileFadeOut }
                : { x: boxRightX, opacity: taglineOpacity } // ✅ now independent
            }
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



  
  return (
    <Box sx={{ overflowX: "hidden" }} className="scroll-landing">
      {/* === MOBILE NAV (tablet and below) === */}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <MobileNav />
      </Box>

      {/* === DESKTOP NAV (desktop and up) === */}
      {/* <Box
        component="nav"
        className="scroll-nav"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {sections.map((section) => (
          <ScrollLink
            key={section.id}
            to={section.id}
            smooth={true}
            duration={800}
            offset={-70}
            className="nav-link"
            spy={true}
            activeClass="active"
          >
            {section.title}
          </ScrollLink>
        ))}
      </Box> */}

      <DesktopNav />

   {/* === CONTENT === */}
{sections.map((section) =>
  section.id === "hero" ? (
    <HeroSection key={section.id} />
  ) : section.id === "what-we-do" ? (
    <AboutSection key={section.id} /> // ✅ renamed
  ) : (
    <Element
      key={section.id}
      name={section.id}
      className="scroll-section"
      data-bg={["what-we-offer", "contact"].includes(section.id) ? "light" : "dark"}
    >
      <Typography variant="h2" className="section-title">
        {section.title}
      </Typography>
      <Typography variant="body1" className="section-text">
        Test content for {section.title}
      </Typography>
    </Element>
  )
)}

    </Box>
  );
};

export default ScrollLanding;
