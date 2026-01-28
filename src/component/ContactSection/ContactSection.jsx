import React, { useMemo, useRef, useState, useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  Snackbar,
  Alert,
  Stack,
} from "@mui/material";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useSectionScrollMotion } from "../../hooks/useSectionScrollMotion";
import { SeasonContext } from "../../context/SeasonContext";

const ContactSection = () => {
  const { colors } = useContext(SeasonContext);

  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const motionPreset = useSectionScrollMotion(ref);

  // === FORM STATE ===
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ open: false, severity: "success", message: "" });

  // Placeholder: set these to your real values later
  const phoneDisplay = "+46 70 123 45 67";
  const mailTo = "info@stoke.se";

  const errors = useMemo(() => {
    const next = { name: "", email: "", message: "" };

    if (!formData.name.trim()) next.name = "Please enter your name.";
    if (!formData.email.trim()) next.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim()))
      next.email = "Please enter a valid email address.";

    if (!formData.message.trim()) next.message = "Tell us what you’re looking for.";
    else if (formData.message.trim().length < 10)
      next.message = "A little more detail helps (at least 10 characters).";

    return next;
  }, [formData]);

  const hasErrors = !!(errors.name || errors.email || errors.message);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });
    if (hasErrors) {
      setToast({
        open: true,
        severity: "error",
        message: "Please fix the highlighted fields before sending.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      // TODO: Replace with your real submission (Mailgun / Firestore / Cloud Function)
      console.log("Contact form submitted:", formData);
      await new Promise((r) => setTimeout(r, 500));

      setFormData({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });

      setToast({
        open: true,
        severity: "success",
        message: "Thanks! Message sent — we’ll get back to you soon.",
      });
    } catch (err) {
      console.error(err);
      setToast({
        open: true,
        severity: "error",
        message: "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Guard if colors not ready yet
  if (!colors || !colors.forms) return null;

  const f = colors.forms;

  // === TextField styling using seasonColors.forms ===
  const fieldSx = {
    "& .MuiInputLabel-root": { color: f.label },
    "& .MuiInputLabel-root.Mui-focused": { color: f.fieldBorderFocus },

    "& .MuiInputBase-input": { color: f.input },
    "& .MuiInputBase-root textarea": { color: f.input },

    "& input::placeholder": { color: f.placeholder },

    "& .MuiOutlinedInput-root": {
      backgroundColor: f.fieldBg,
      borderRadius: 2,
    },

    "& .MuiOutlinedInput-notchedOutline": { borderColor: f.fieldBorder },
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: f.fieldBorderHover },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: f.fieldBorderFocus,
    },

    "& .MuiFormHelperText-root": { color: f.helper, marginLeft: 0 },
    "& .MuiFormHelperText-root.Mui-error": { color: f.error },

    // Autofill (Chrome)
    "& input:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 1000px ${f.fieldBg} inset`,
      WebkitTextFillColor: f.input,
      caretColor: f.input,
      borderRadius: "inherit",
    },
  };

  return (
    <Element name="contact" className="scroll-section" data-bg="dark">
      <motion.div
        ref={ref}
        className="contact-section"
        style={{ backgroundColor: colors.bgEven }}
      >
        <Box
          className="contact-inner"
          sx={{
            maxWidth: 720,
            mx: "auto",
            px: isMobile ? 2 : 3,
            py: isMobile ? 6 : 8,
          }}
        >
          {/* === TITLE === */}
          <motion.div
            className="contact-title"
            style={isMobile ? motionPreset.mobile.title : motionPreset.desktop.title}
          >
            <Typography
              variant="h2"
              className="section-title"
              sx={{ mb: 1, color: colors.title }}
            >
              Get in touch
            </Typography>

            <Typography
              variant="body1"
              className="section-text"
              sx={{ opacity: 0.95, color: colors.textOdd }}
            >
              Tell us what you want to learn and your preferred dates. We’ll reply with a
              simple plan.
            </Typography>
          </motion.div>

          {/* === QUICK CONTACT === */}
          <motion.div
            className="contact-quick"
            style={isMobile ? motionPreset.mobile.text : motionPreset.desktop.text}
          >
            <Box
              sx={{
                mt: 3,
                mb: 3,
                p: 2,
                borderRadius: 2,
                border: `1px solid ${f.border}`,
                backgroundColor: f.surface,
              }}
            >
              <Stack
                direction={isMobile ? "column" : "row"}
                spacing={1.25}
                alignItems={isMobile ? "stretch" : "center"}
                justifyContent="space-between"
              >
                <Box>
                  <Typography variant="body2" sx={{ color: f.helper, mb: 0.25 }}>
                    Prefer direct contact?
                  </Typography>
                  <Typography variant="body1" sx={{ color: f.input }}>
                    📞 {phoneDisplay} &nbsp;·&nbsp; ✉️ {mailTo}
                  </Typography>
                </Box>

                <Stack direction="row" spacing={1} justifyContent="flex-end">
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderRadius: "999px",
                      textTransform: "none",
                      fontWeight: 700,
                      borderColor: f.fieldBorder,
                      color: f.input,
                      "&:hover": { borderColor: f.fieldBorderHover },
                    }}
                    onClick={() =>
                      window.open(`tel:${phoneDisplay.replace(/\s/g, "")}`, "_self")
                    }
                  >
                    Call
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderRadius: "999px",
                      textTransform: "none",
                      fontWeight: 700,
                      borderColor: f.fieldBorder,
                      color: f.input,
                      "&:hover": { borderColor: f.fieldBorderHover },
                    }}
                    onClick={() => window.open(`mailto:${mailTo}`, "_self")}
                  >
                    Email
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </motion.div>

          {/* === FORM === */}
          <motion.div
            className="contact-form-wrap"
            style={isMobile ? motionPreset.mobile.cta : motionPreset.desktop.cta}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                mt: 2,
                p: isMobile ? 2 : 3,
                borderRadius: 3,
                border: `1px solid ${f.border}`,
                backgroundColor: f.surface,
              }}
            >
              <TextField
                label="Name"
                name="name"
                fullWidth
                required
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && !!errors.name}
                helperText={touched.name ? errors.name : " "}
                sx={fieldSx}
                autoComplete="name"
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
                onBlur={handleBlur}
                error={touched.email && !!errors.email}
                helperText={touched.email ? errors.email : " "}
                sx={fieldSx}
                autoComplete="email"
              />

              <TextField
                label="Message"
                name="message"
                fullWidth
                required
                multiline
                rows={isMobile ? 5 : 6}
                margin="normal"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message && !!errors.message}
                helperText={touched.message ? errors.message : " "}
                sx={fieldSx}
              />

              <Stack
                direction={isMobile ? "column" : "row"}
                spacing={1.5}
                alignItems={isMobile ? "stretch" : "center"}
                justifyContent="space-between"
                sx={{ mt: 1 }}
              >
                <Typography variant="body2" sx={{ color: f.helper }}>
                  We usually reply within 24 hours.
                </Typography>

                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    borderRadius: "999px",
                    textTransform: "none",
                    fontWeight: 800,
                    px: 3.5,
                    py: 1.2,
                    backgroundColor: colors.subText,
                    color: f.buttonText,
                    "&:hover": { backgroundColor: colors.title },
                  }}
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </Box>

        {/* Toast feedback */}
        <Snackbar
          open={toast.open}
          autoHideDuration={3500}
          onClose={() => setToast((p) => ({ ...p, open: false }))}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setToast((p) => ({ ...p, open: false }))}
            severity={toast.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {toast.message}
          </Alert>
        </Snackbar>
      </motion.div>
    </Element>
  );
};

export default ContactSection;
