import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link as ScrollLink, Element } from "react-scroll";
import rider from "../../media/images/stoke_rider.png";
import "./CinematicLanding.css";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicLanding() {
  const containerRef = useRef(null);

  // Debug scroll position
  useEffect(() => {
    const onScroll = () => {
      console.log("Scrolling, Y =", window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GSAP animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".rider", {
        y: -300,
        x: 200,
        scale: 1.3,
        rotate: -10,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero",
          start: "center center",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.from(".cta", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: ".cta",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="cinematic-wrapper">
      {/* Fixed nav bar */}
      <nav className="nav-bar">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          onClick={() => console.log("Clicked: Home")}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="cta"
          smooth={true}
          duration={500}
          onClick={() => console.log("Clicked: About")}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="section-1"
          smooth={true}
          duration={500}
          onClick={() => console.log("Clicked: Offer")}
        >
          Offer
        </ScrollLink>
        <ScrollLink
          to="section-2"
          smooth={true}
          duration={500}
          onClick={() => console.log("Clicked: Crew")}
        >
          Crew
        </ScrollLink>
        <ScrollLink
          to="section-3"
          smooth={true}
          duration={500}
          onClick={() => console.log("Clicked: Location")}
        >
          Location
        </ScrollLink>
      </nav>

 <Element name="hero" className="hero">
  <h1 className="hero-title">Stoke the Wind</h1>
  <img src={rider} alt="Foiler silhouette" className="rider" />
</Element>

<Element name="cta" className="cta">
  <h2>Ride the Flow</h2>
  <p>Discover the thrill of foiling.</p>
</Element>

<Element name="section-1" className="scroll-section section-1">
  <h2>What We Offer</h2>
  <p>Courses, coaching, gear rentals and more.</p>
</Element>

<Element name="section-2" className="scroll-section section-2">
  <h2>Our Crew</h2>
  <p>Meet the passionate team behind Stoke.</p>
</Element>

<Element name="section-3" className="scroll-section section-3">
  <h2>Location</h2>
  <p>Foil with us in Umeå, Sweden – where wind meets waves.</p>
</Element>
    </div>
  );
}
