import { motion, useScroll, useTransform } from "framer-motion";
import surfImage from "../media/images/stoke_rider.webp"; // Replace with any image

const ScrollReveal = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  return (
    <div style={{ height: "200vh", background: "#000" }}>
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#000",
        }}
      >
        <motion.img
          src={surfImage}
          alt="Surf"
          style={{
            width: "60vw",
            borderRadius: "20px",
            scale,
            opacity,
          }}
        />
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
