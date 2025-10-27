import React, { useEffect, useState, useRef } from "react";
import { IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const AdaptiveIconButton = ({ onClick }) => {
  const [iconColor, setIconColor] = useState("#0a0a01ff");
  const buttonRef = useRef(null);

  useEffect(() => {
    const checkBackground = () => {
  if (!buttonRef.current) return;

  const rect = buttonRef.current.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Get the topmost element under the icon
  const el = document.elementFromPoint(centerX, centerY);
  if (!el) return;

  // Find closest parent with data-bg
  const section = el.closest("[data-bg]");
  const bg = section?.getAttribute("data-bg");

  setIconColor("#000000");
  // setIconColor(bg === "light" ? "#000000" : "#f1ff62");
};
    checkBackground(); // initial

    window.addEventListener("scroll", checkBackground);
    window.addEventListener("resize", checkBackground);

    return () => {
      window.removeEventListener("scroll", checkBackground);
      window.removeEventListener("resize", checkBackground);
    };
  }, []);

return (
<Box
  onClick={onClick}
  ref={buttonRef}
  sx={{
    position: "relative",
    zIndex: 2000,
    width: 48,
    height: 48,
    cursor: "pointer",
  }}
>
  <IconButton
    disableRipple
    sx={{
      color: iconColor,
      width: "100%",
      height: "100%",
      pointerEvents: "none", // 👈 this makes it transparent to hit tests!
      transition: "color 0.2s ease-in-out",
    }}
  >
    <MenuIcon fontSize="medium" />
  </IconButton>
</Box>

);

};

export default AdaptiveIconButton;
