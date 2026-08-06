import { motion, useReducedMotion } from "framer-motion";

const premiumEase = [0.22, 1, 0.36, 1];

export default function PageTransition({ children }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="page-transition"
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 34,
              scale: 0.992,
              filter: "blur(8px)",
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={
        reduceMotion
          ? {
              opacity: 1,
            }
          : {
              opacity: 0,
              y: -24,
              scale: 0.995,
              filter: "blur(7px)",
            }
      }
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        ease: premiumEase,
      }}
    >
      {children}
    </motion.div>
  );
}