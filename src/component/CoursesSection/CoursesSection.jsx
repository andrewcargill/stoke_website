import React, { useMemo, useRef, useState } from "react";
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import { Element, Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionScrollMotion } from "../../hooks/useSectionScrollMotion";

const CoursesSection = () => {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const motionPreset = useSectionScrollMotion(ref);

  // Wireframe: 3 course options that reveal more info
  const options = useMemo(
    () => [
      {
        id: "beginner",
        title: "Beginner Course",
        teaser: "Start from zero — safe setup, basics, first rides.",
        details: [
          "Perfect if you’ve never wing foiled before.",
          "Learn safety, wind basics, gear handling, and first controlled rides.",
          "Goal: get you confident, stable, and smiling.",
        ],
      },
      {
        id: "progression",
        title: "Progression Coaching",
        teaser: "Level up — technique, control, transitions, confidence.",
        details: [
          "For riders who already get going and want to improve fast.",
          "Focus: stance, board control, upwind, speed management, turns/jibes.",
          "Goal: smoother riding and consistent progression.",
        ],
      },
      {
        id: "private",
        title: "Private Session",
        teaser: "1-to-1 coaching — flexible, focused, fastest results.",
        details: [
          "Tailored coaching based on your goals and current level.",
          "Great for quick breakthroughs or specific skills.",
          "Goal: maximum progress per session.",
        ],
      },
    ],
    [],
  );

  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  return (
    <Element name="our-courses" className="scroll-section" data-bg="dark">
      <motion.div ref={ref} className="courses-section">
        <Box className="courses-inner">
          {/* === TITLE === */}
          <motion.div
            className="courses-box left"
            style={isMobile ? motionPreset.mobile.title : motionPreset.desktop.title}
          >
            <Typography variant="h2" className="section-title">
              Our Courses
            </Typography>
          </motion.div>

          {/* === INTRO TEXT === */}
          <motion.div
            className="courses-text"
            style={isMobile ? motionPreset.mobile.text : motionPreset.desktop.text}
          >
            <Typography variant="body1" className="section-text">
              Choose the path that fits you. Start from zero, improve your riding, or go
              fully personalised. This section is a wireframe: simple, clear, and built
              for mobile-first “tap to reveal” course info.
            </Typography>

            {/* === OPTIONS (tap to reveal) === */}
            <Box className="courses-options" sx={{ mt: 3, display: "grid", gap: 1.25 }}>
              {options.map((opt) => {
                const isOpen = openId === opt.id;

                return (
                  <Box
                    key={opt.id}
                    className={`course-option ${isOpen ? "is-open" : ""}`}
                    sx={{
                      borderRadius: 2,
                      border: "1px solid rgba(255,255,255,0.12)",
                      overflow: "hidden",
                    }}
                  >
                    {/* Header row (always visible) */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        p: 2,
                      }}
                    >
                      <Box sx={{ minWidth: 0 }}>
                        <Typography variant="h6" className="section-text" sx={{ mb: 0.5 }}>
                          {opt.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="section-text"
                          sx={{ opacity: 0.85 }}
                        >
                          {opt.teaser}
                        </Typography>
                      </Box>

                      <Button
                        variant={isOpen ? "outlined" : "contained"}
                        size="small"
                        onClick={() => toggle(opt.id)}
                        sx={{
                          flexShrink: 0,
                          borderRadius: "999px",
                          textTransform: "none",
                          fontWeight: 700,
                          px: 2,
                        }}
                      >
                        {isOpen ? "Hide" : "Details"}
                      </Button>
                    </Box>

                    {/* Reveal area */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          style={{ overflow: "hidden" }}
                        >
                          <Box sx={{ px: 2, pb: 2 }}>
                            <Box
                              sx={{
                                pt: 1.5,
                                borderTop: "1px solid rgba(255,255,255,0.12)",
                              }}
                            >
                              {opt.details.map((line, idx) => (
                                <Typography
                                  key={idx}
                                  variant="body2"
                                  className="section-text"
                                  sx={{ opacity: 0.9, mb: idx === opt.details.length - 1 ? 0 : 0.75 }}
                                >
                                  • {line}
                                </Typography>
                              ))}

                              {/* Wireframe CTA spot (optional later) */}
                              <Box sx={{ mt: 1.5, display: "flex", gap: 1 }}>
                                <Button
                                  variant="text"
                                  size="small"
                                  sx={{ textTransform: "none", fontWeight: 700 }}
                                >
                                  View schedule
                                </Button>
                                <Button
                                  variant="text"
                                  size="small"
                                  sx={{ textTransform: "none", fontWeight: 700 }}
                                >
                                  Ask a question
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Box>
                );
              })}
            </Box>
          </motion.div>

          {/* === OPTIONAL RIGHT / HIGHLIGHT (keep if you want 3-column feel) === */}
          <motion.div
            className="courses-box right"
            style={isMobile ? motionPreset.mobile.image : motionPreset.desktop.image}
          >
            <Typography variant="body2" className="section-text">
              Group & Private Sessions • Kids & Adults • All Levels
            </Typography>
            {/* === COURSES CTA === */}
<Box
  className="courses-cta"
  sx={{
    mt: 4,
    display: "flex",
    
    justifyContent: isMobile ? "center" : "center",
  }}
>
  <ScrollLink to="contact" smooth duration={600} offset={-80}>
    <Button
      variant="contained"
      size="large"
      sx={{
        width: isMobile ? "100%" : "auto",
        borderRadius: "999px",
        textTransform: "none",
        fontWeight: 700,
        px: 3.5,
        py: 1.3,
      }}
    >
      Contact us to find your course
    </Button>
  </ScrollLink>
</Box>


          </motion.div>
        </Box>
      </motion.div>
    </Element>
  );
};

export default CoursesSection;
