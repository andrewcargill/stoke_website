import React, { useRef, useState } from "react";
import { Box, Typography, TextField, Button, useMediaQuery } from "@mui/material";
import { Element } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactSection = () => {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  // === SCROLL ANIMATION ===
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(scrollYProgress, [0, 0.3], [-150, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const formOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const formY = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);

  // === FORM STATE ===
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: integrate Mailgun / Firestore submission later
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <Element name="contact" className="scroll-section" data-bg="light">
      <motion.div ref={ref} className="contact-section">
        <Box className="contact-inner" sx={{ maxWidth: 600, margin: "0 auto" }}>
          {/* === TITLE === */}
          <motion.div
            className="contact-title"
            style={
              isMobile
                ? { opacity: titleOpacity }
                : { x: titleX, opacity: titleOpacity }
            }
          >
            <Typography variant="h2" className="section-title">
              Get in Touch
            </Typography>
          </motion.div>

          {/* === PHONE NUMBER === */}
          <motion.div
            style={{ opacity: formOpacity, y: formY }}
            className="contact-phone"
          >
            <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
              📞 Call us at: <strong>+46 70 123 45 67</strong>
            </Typography>
          </motion.div>

          {/* === CONTACT FORM === */}
          <motion.form
            onSubmit={handleSubmit}
            style={{ opacity: formOpacity, y: formY }}
          >
            <TextField
              label="Name"
              name="name"
              fullWidth
              required
              margin="normal"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              margin="normal"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Message"
              name="message"
              fullWidth
              required
              multiline
              rows={4}
              margin="normal"
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </motion.form>
        </Box>
      </motion.div>
    </Element>
  );
};

export default ContactSection;
