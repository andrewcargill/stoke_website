import { useScroll, useTransform } from "framer-motion";

/**
 * A reusable motion preset for 2-col sections (title/text/cta + image).
 * Keep it intentionally simple. Add variants only when you truly need them.
 */
export function useSectionScrollMotion(ref, { offset = ["start end", "end start"] } = {}) {
  const { scrollYProgress } = useScroll({ target: ref, offset });

  // Desktop
  const boxLeftX = useTransform(scrollYProgress, [0, 0.3], [-200, 0]);
  const textX = useTransform(scrollYProgress, [0.05, 0.45], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const taglineOpacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);

  // Mobile
  const mobileYTitle = useTransform(scrollYProgress, [0.0, 0.2], [-200, 0]);
  const mobileOpacityTitle = useTransform(scrollYProgress, [-1, 0.3], [0, 1]);
  const mobileYText = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  const mobileOpacityText = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const mobileYTagline = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);
  const mobileOpacityTagline = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);

  return {
    scrollYProgress,

    // Use these directly in style props
    desktop: {
      title: { x: boxLeftX },
      text: { x: textX, opacity: textOpacity },
      cta: { opacity: taglineOpacity },
      image: { opacity: textOpacity },
    },

    mobile: {
      title: { y: mobileYTitle, opacity: mobileOpacityTitle },
      text: { y: mobileYText, opacity: mobileOpacityText },
      cta: { y: mobileYTagline, opacity: mobileOpacityTagline },
      image: { opacity: mobileOpacityText },
    },
  };
}
