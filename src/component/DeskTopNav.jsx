
import React from "react";
import { Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const sections = [
  { id: "hero", title: "Stoke.se 🏴‍☠️💨" },
  { id: "what-we-do", title: "What We Do" },
  { id: "what-we-offer", title: "What We Offer" },
  { id: "our-courses", title: "Our Courses" },
  { id: "our-partners", title: "Partners" },
  { id: "where-we-are", title: "Where We Are" },
  { id: "contact", title: "How to Contact" },
];
// const sections = [
//   { id: "hero", title: "Stoke the Wind 🏴‍☠️💨" },
//   { id: "what-we-do", title: "What We Do" },
//   { id: "what-we-offer", title: "What We Offer" },
//   { id: "our-courses", title: "Our Courses" },
//   { id: "our-partners", title: "Our Partners" },
//   { id: "where-we-are", title: "Where We Are" },
//   { id: "contact", title: "How to Contact" },
// ];

const DesktopNav = () => {
  return (
    <Box
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
    </Box>
  );
};

export default DesktopNav;
