// theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#5175f6ff",
      paper: "#1c82d0ff",
    },
    primary: {
      main: "#CFFF04",
    },
    text: {
      primary: "#CFFF04",
      secondary: "#ffffff",
    },
  },

  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',

    // 🔠 Fluid, cinematic typography
    h1: {
      fontSize: "clamp(2.5rem, 6vw, 4.5rem)", // 40px–72px
      fontWeight: 700,
      letterSpacing: "0.02em",
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "clamp(2rem, 5vw, 3.5rem)", // 32px–56px
      fontWeight: 700,
      letterSpacing: "0.01em",
    },
    h3: {
      fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
      fontWeight: 600,
    },
    h4: {
      fontSize: "clamp(1.5rem, 3vw, 2rem)",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "clamp(1rem, 2vw, 1.5rem)",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)",
      lineHeight: 1.6,
      color: "#ffffff",
    },
    body2: {
      fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
      lineHeight: 1.7,
      color: "#d1d1d1",
    },
  },
});

// 🔧 Enable MUI’s built-in responsive scaling across breakpoints
theme = responsiveFontSizes(theme, {
  breakpoints: ["sm", "md", "lg"],
  factor: 2, // scaling aggressiveness (1 = subtle, 3 = bold)
});

export default theme;
