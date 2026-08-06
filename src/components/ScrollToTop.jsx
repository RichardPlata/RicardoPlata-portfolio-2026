import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const smoothBehavior = prefersReducedMotion
      ? "auto"
      : "smooth";

    let firstFrame;
    let secondFrame;
    let timeoutId;

    const performScroll = () => {
      if (!sectionId) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });

        return;
      }

      if (sectionId === "home") {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: smoothBehavior,
        });

        return;
      }

      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: smoothBehavior,
          block: "start",
        });
      }
    };

    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        timeoutId = window.setTimeout(performScroll, 80);
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(timeoutId);
    };
  }, [
    location.pathname,
    location.state,
  ]);

  return null;
}