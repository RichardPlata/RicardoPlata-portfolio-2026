import { cloneElement, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function Magnetic({
  children,
  strength = 0.22,
  className = "",
}) {
  const wrapperRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const supportsPointerEffects =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const handlePointerMove = (event) => {
    const wrapper = wrapperRef.current;

    if (!wrapper || reduceMotion || !supportsPointerEffects) return;

    const rect = wrapper.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    wrapper.style.setProperty("--magnetic-x", `${x * strength}px`);
    wrapper.style.setProperty("--magnetic-y", `${y * strength}px`);
  };

  const resetPosition = () => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    wrapper.style.setProperty("--magnetic-x", "0px");
    wrapper.style.setProperty("--magnetic-y", "0px");
  };

  const child = cloneElement(children, {
    className: `${children.props.className ?? ""} magnetic-target`.trim(),
  });

  return (
    <span
      ref={wrapperRef}
      className={`magnetic-wrap ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
    >
      {child}
    </span>
  );
}