import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.28,
  });

  return (
    <motion.div
      className="scroll-progress"
      aria-hidden="true"
      style={{
        scaleX: reduceMotion
          ? scrollYProgress
          : smoothProgress,
      }}
    />
  );
}