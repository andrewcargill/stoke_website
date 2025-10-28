

import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";
import AdaptiveIconButton from "./AdaptiveIconButton";


const sections = [
  { id: "hero", title: "Stoke the Wind 🏴‍☠️💨" },
  { id: "what-we-do", title: "What We Do" },
  { id: "what-we-offer", title: "What We Offer" },
  { id: "our-courses", title: "Our Courses" },
  { id: "our-partners", title: "Our Partners" },
  { id: "where-we-are", title: "Where We Are" },
  { id: "contact", title: "How to Contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => setOpen(state);

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 2000,
        p: 1.5,
    
        width: "100vw",
        justifyContent: "flex-end",
      }}
    >
           
      {/* <IconButton onClick={toggleDrawer(true)} sx={{ color: "#f1ff62" }}>
        <MenuIcon />
      </IconButton> */}

<Box
  sx={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    zIndex: 2000, // must be above content
    display: "flex",
    justifyContent: "flex-end",
    p: 2,
  }}
>
      <AdaptiveIconButton onClick={toggleDrawer(true)} />
</Box>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "#001f2f",
            height: "100%",
            color: "#f1ff62",
          }}
          role="presentation"
       
        >
        
       <List>
  {sections.map((section) => (
    <ScrollLink
      key={section.id}
      to={section.id}
      smooth={true}
      duration={600}
      offset={-70}
      spy={true}
      onClick={toggleDrawer(false)} // 🔥 Close drawer on click
    >
      <ListItem button>
        <ListItemText
          primary={section.title}
          sx={{
            color: "#f1ff62",
            fontWeight: "bold",
            "&:hover": {
              color: "#f94d6a",
            },
          }}
        />
      </ListItem>
    </ScrollLink>
  ))}
</List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
