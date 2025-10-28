import React, { createContext, useState, useEffect } from "react";
import { seasonColors } from "../theme/seasonColors";

export const SeasonContext = createContext();

export const SeasonProvider = ({ children }) => {
  const getInitialSeason = () => {
    const stored = localStorage.getItem("season");
    if (stored) return stored;
    const month = new Date().getMonth() + 1;
    return month >= 5 && month <= 10 ? "summer" : "winter";
  };

  const [season, setSeason] = useState(getInitialSeason);

  const toggleSeason = () => {
    const next = season === "summer" ? "winter" : "summer";
    setSeason(next);
    localStorage.setItem("season", next);
  };

  const colors = seasonColors[season];

  return (
    <SeasonContext.Provider value={{ season, toggleSeason, colors }}>
      {children}
    </SeasonContext.Provider>
  );
};
