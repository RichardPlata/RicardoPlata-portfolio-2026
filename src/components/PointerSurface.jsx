import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function PointerSurface({
  children,
  className = "",
  strength = 7,
  glowSize = 360,
}) {
  const surfaceRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const supportsPointerEffects =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const handlePointerMove = (event) => {
    const element = surfaceRef.current;

    if (!element || reduceMotion || !supportsPointerEffects) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY =
      ((x - rect.width / 2) / rect.width) * strength;

    const rotateX =
      ((rect.height / 2 - y) / rect.height) * strength;

    element.style.setProperty("--pointer-x", `${x}px`);
    element.style.setProperty("--pointer-y", `${y}px`);
    element.style.setProperty("--pointer-glow-size", `${glowSize}px`);
    element.style.setProperty("--surface-rotate-x", `${rotateX}deg`);
    element.style.setProperty("--surface-rotate-y", `${rotateY}deg`);
  };

  const resetSurface = () => {
    const element = surfaceRef.current;

    if (!element) return;

    element.style.setProperty("--surface-rotate-x", "0deg");
    element.style.setProperty("--surface-rotate-y", "0deg");
  };

  return (
    <div
      ref={surfaceRef}
      className={`pointer-surface ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetSurface}
    >
      {children}
    </div>
  );
}