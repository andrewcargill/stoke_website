import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import theme from './theme';
import HomePage from './pages/HomePage';
import './App.css'; 
import ScrollReveal from './component/ScrollReveal';
import CinematicLanding from './component/CinematicLanding/CinematicLanding';
import ParallaxHero from './component/ParallaxHero';
import ScrollLanding from './component/ScrollingLanding/ScrollingLanding';
import ScrollTest from './component/ScrollTest';
import  { SeasonProvider } from './context/SeasonContext';


function App() {
  return (
    <SeasonProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scroll" element={<ScrollReveal />} />
          <Route path="/parallax" element={<ParallaxHero />} />
          <Route path="/cinematic" element={<CinematicLanding />} />
          <Route path="/home" element={<ScrollLanding />} />
          <Route path="/test" element={<ScrollTest />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </SeasonProvider>
  );
}

export default App;
