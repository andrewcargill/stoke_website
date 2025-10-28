// /context/SeasonContext.jsx
import React, { createContext, useState, useEffect } from "react";

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
    setSeason((prev) => {
      const next = prev === "summer" ? "winter" : "summer";
      localStorage.setItem("season", next);
      return next;
    });
  };

  return (
    <SeasonContext.Provider value={{ season, toggleSeason }}>
      {children}
    </SeasonContext.Provider>
  );
};
