import React, { useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Link as ScrollLink, Element } from "react-scroll";
import HeroSection from "../HeroSection/HeroSection";
import MobileNav from "../MobileNav";
import "./ScrollingLanding90s.css";
import { motion, useScroll, useTransform } from "framer-motion";
import DesktopNav from "../DeskTopNav";
import imageMask from "../../media/wave-yellow-mask.svg";
import AboutSection from "../AboutSection/AboutSection";
import WhatWeOfferSection from "../WhatWeOfferSection/WhatWeOfferSection";
import CoursesSection from "../CoursesSection/CoursesSection";
import PartnersSection from "../PartnersSection/PartnersSection";
import FAQSection from "../FAQSection/FAQSection";
import ContactSection from "../ContactSection/ContactSection";
import SeasonToggle from "../SeasonToggle";

const sections = [
  { id: "hero", title: "Stoke the Wind 🏴‍☠️💨" },
  { id: "what-we-do", title: "What We Do" },
  { id: "what-we-offer", title: "What We Offer" },
  { id: "our-courses", title: "Our Courses" },
  { id: "our-partners", title: "Our Partners" },
  { id: "FAQ", title: "Frequently Asked Questions" },
  { id: "contact", title: "How to Contact" },
];

const ScrollLanding = () => {
  return (
    <Box sx={{ overflowX: "hidden" }} className="scroll-landing">
      {/* === MOBILE NAV (tablet and below) === */}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <MobileNav />
      </Box>

      <DesktopNav />
      <SeasonToggle />

      {/* === CONTENT === */}
      {sections.map((section) =>
        section.id === "hero" ? (
          <HeroSection key={section.id} />
        ) : section.id === "what-we-do" ? (
          <AboutSection key={section.id} />
        ) : section.id === "what-we-offer" ? (
          <WhatWeOfferSection key={section.id} />
        ) : section.id === "our-courses" ? (
          <CoursesSection key={section.id} />
        ) : section.id === "our-partners" ? (
          <PartnersSection key={section.id} />
        ) : section.id === "FAQ" ? (
          <FAQSection key={section.id} />
        ) : section.id === "contact" ? (
          <ContactSection key={section.id} />
        ) : (
          <Element
            key={section.id}
            name={section.id}
            className="scroll-section"
            data-bg={["contact"].includes(section.id) ? "light" : "dark"}
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
