import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconButton } from "@mui/material";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import { SeasonContext } from "../context/SeasonContext";

const MotionIconButton = motion(IconButton);

const SeasonToggle = () => {
  const { season, toggleSeason } = useContext(SeasonContext);

  return (
    <MotionIconButton
      onClick={toggleSeason}
      aria-label="Toggle Season"
      whileTap={{ scale: 0.9 }}
      sx={{
        position: "fixed",
        top: "0rem",
       left: "1rem",
        zIndex: 1000,
        backgroundColor: "transparent",
        border: "none",
        color: season === "summer" ? "#FFD54F" : "#80DEEA",
        transition: "color 0.3s ease",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {season === "summer" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.4 }}
          >
            <WbSunnyRoundedIcon fontSize="large" />
          </motion.div>
        ) : (
          <motion.div
            key="snow"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.4 }}
          >
            <AcUnitRoundedIcon fontSize="large" />
          </motion.div>
        )}
      </AnimatePresence>
    </MotionIconButton>
  );
};

export default SeasonToggle;
