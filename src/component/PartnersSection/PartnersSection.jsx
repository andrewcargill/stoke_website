import React, { useContext, useMemo, useRef, useState } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionScrollMotion } from "../../hooks/useSectionScrollMotion";
import { SeasonContext } from "../../context/SeasonContext";

import partnerLogo from "../../media/images/ocean.webp";
import AboveYouLogo from "../../media/logos/above_you_logo.png";
import KBCLogo from "../../media/logos/kbc_logo.webp";

const PartnersSection = () => {
  const [openPartnerId, setOpenPartnerId] = useState(null);

  const { colors } = useContext(SeasonContext);

  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const motionPreset = useSectionScrollMotion(ref);

  const togglePartner = (id) => {
    setOpenPartnerId((prev) => (prev === id ? null : id));
  };

  const partners = useMemo(
    () => [
      {
        id: "partner-1",
        name: "Above You, Umeå",
        blurb:
          "Wetsuits, helmets and accessories for your water adventures.",
        url: "https://www.aboveyou.se",
        logo: AboveYouLogo,
      },
      {
        id: "partner-2",
        name: "Kiteboard Center",
        blurb:
          "Equipment and expertise for your kiteboarding needs.",
        url: "https://kiteboardcenter.se/en/home/",
        logo: KBCLogo,
      },
    ],
    [],
  );

  if (!colors) return null;

  return (
    <Element
      name="our-partners"
      className="scroll-section"
      data-bg="light"
      style={{ backgroundColor: colors.bgEven }}
    >
      <motion.div ref={ref} className="partners-section">
        <Box
          className="partners-inner"
          sx={{
            maxWidth: 1100,
            mx: "auto",
            px: isMobile ? 2 : 3,
            py: isMobile ? 6 : 8,
          }}
        >
          {/* === HEADER (centered on desktop) === */}
          <Box
            className="partners-header"
            sx={{
              textAlign: isMobile ? "center" : "center",
              mb: isMobile ? 3 : 5,
              maxWidth: 820,
              mx: "auto",
            }}
          >
            <motion.div
              className="partners-title"
              style={
                isMobile
                  ? motionPreset.mobile.title
                  : motionPreset.desktop.title
              }
            >
              <Typography
                variant="h2"
                className="section-title"
                sx={{ color: colors.title }}
              >
                Partners
              </Typography>
            </motion.div>

            <motion.div
              className="partners-intro"
              style={
                isMobile ? motionPreset.mobile.text : motionPreset.desktop.text
              }
            >
              <Typography
                variant="body1"
                className="section-title"
                sx={{
                  color: colors.textEven,
                  mt: 1.5,
                  lineHeight: 1.7,
                }}
              >
                Stoke is built with a small circle of people we genuinely trust
                — local businesses and brands that share the same values:
                quality, safety, and good vibes on the water.
              </Typography>
            </motion.div>
          </Box>
          {/* === CARDS (simple & stable) === */}
<motion.div
  className="partners-grid"
  style={isMobile ? motionPreset.mobile.cta : motionPreset.desktop.cta}
>
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(360px, 520px))",
      gap: isMobile ? 2 : 3,
      justifyContent: "center",
      alignItems: "stretch",
    }}
  >
    {partners.map((p) => (
      <Box
        key={p.id}
        className="partner-card"
        sx={{
          borderRadius: 3,
          border: "1px solid rgba(0,0,0,0.10)",
          backgroundColor: "rgba(255,255,255,0.60)",
          overflow: "hidden",
          boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header: logo + name */}
        <Box
          sx={{
            p: 2.5,
            display: "flex",
            alignItems: "center",
            gap: 2.5,
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            backgroundColor: "rgba(255,255,255,0.45)",
          }}
        >
          <Box
            sx={{
              width: isMobile ? 72 : 88,
              height: isMobile ? 72 : 88,
              borderRadius: 3,
              overflow: "hidden",
              flexShrink: 0,
              // border: "1px solid rgba(0,0,0,0.10)",
              // backgroundColor: "rgba(255,255,255,0.85)",
            }}
          >
            <img
              src={p.logo}
              alt={`${p.name} logo`}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              loading="lazy"
            />
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                color: "rgba(20,25,28,0.95)",
                lineHeight: 1.15,
              }}
            >
              {p.name}
            </Typography>

            <Typography
              variant="body2"
              sx={{ opacity: 0.75, color: "rgba(20,25,28,0.85)" }}
            >
              Trusted Stoke partner
            </Typography>
          </Box>
        </Box>

        {/* Body: short description */}
        <Box sx={{ p: 2.5, flexGrow: 1 }}>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(20,25,28,0.88)",
              lineHeight: 1.7,
            }}
          >
            {p.blurb}
          </Typography>
        </Box>

        {/* Footer: single CTA */}
        <Box sx={{ p: 2.5, pt: 0 }}>
          <Button
            variant="contained"
            onClick={() => window.open(p.url, "_blank", "noopener,noreferrer")}
            sx={{
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: 900,
              px: 3.25,
              backgroundColor: colors.title,
              color: colors.bgEven,
              "&:hover": { backgroundColor: colors.subText },
            }}
          >
            Visit website
          </Button>
        </Box>
      </Box>
    ))}
  </Box>
</motion.div>

        </Box>

        
      </motion.div>

     

    </Element>
  );
};

export default PartnersSection;
