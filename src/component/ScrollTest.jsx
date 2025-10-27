import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";

export default function ScrollTest() {
  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "60px",
    backgroundColor: "#fff",
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  };

  const linkStyle = {
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
  };

  const sectionStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    scrollMarginTop: "80px", // avoids nav overlap
    padding: "20px",
  };

  return (
    <div>
      {/* Fixed Nav */}
      <nav style={navStyle}>
        <ScrollLink to="hero" smooth={true} duration={500} offset={-60} style={linkStyle}>
          Hero
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} offset={-60} style={linkStyle}>
          About
        </ScrollLink>
      </nav>

      {/* Sections */}
      <Element name="hero" style={{ ...sectionStyle, backgroundColor: "#90caf9" }}>
        <h1>Hero Section</h1>
      </Element>

      <Element name="about" style={{ ...sectionStyle, backgroundColor: "#ffcc80" }}>
        <h1>About Section</h1>
        <p>This section scrolls into view.</p>
      </Element>
    </div>
  );
}
