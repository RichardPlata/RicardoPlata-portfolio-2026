import { useEffect, useRef, useState } from "react";

import mountain from "../assets/images/mountain.webp";

import rock1 from "../assets/images/rock1.webp";
import rock2 from "../assets/images/rock2.webp";
import rock3 from "../assets/images/rock3.webp";

import aboutPicture from "../assets/images/About-Picture.png";
// Si todavía no convertiste esta imagen, usa:
// import aboutPicture from "../assets/images/About-Picture.png";

import resumeFile from "../assets/files/Resume-RicardoPlata.pdf";

export default function About() {
  const sectionRef = useRef(null);
  const ticking = useRef(false);

  const [progress, setProgress] = useState({
    enter: 0,
    exit: 0,
  });

  useEffect(() => {
    const updateProgress = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const enter = Math.min(
        Math.max((windowHeight - rect.top) / windowHeight, 0),
        1
      );

      // Antes desaparecía muy pronto.
      // Ahora empieza a salir cuando la sección ya avanzó bastante.
      const exitStart = sectionHeight * 0.45;
      const exitDistance = sectionHeight * 0.55;

      const exit = Math.min(
        Math.max((-rect.top - exitStart) / exitDistance, 0),
        1
      );

      setProgress({ enter, exit });
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateProgress);
        ticking.current = true;
      }
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const { enter, exit } = progress;

  const mountainOpacity =
    Math.min(Math.max((enter - 0.05) * 1.5, 0), 1) * (1 - exit * 0.7);

  const mountainY = 95 - mountainOpacity * 95 + exit * 80;
  const mountainScale = 1.08 - mountainOpacity * 0.04;

  const contentOpacity =
    Math.min(Math.max((enter - 0.18) * 1.8, 0), 1) * (1 - exit * 0.75);

  const rockOpacity =
    Math.min(Math.max((enter - 0.22) * 1.8, 0), 1) * (1 - exit * 0.8);

  const contentY = 55 - contentOpacity * 55 + exit * -25;
  const photoY = 65 - contentOpacity * 65 + exit * 35;

  const rocks = [
    { src: rock1, className: "about-rock-1", rotate: -18, exitX: -80, exitY: -90 },
    { src: rock2, className: "about-rock-2", rotate: 22, exitX: 80, exitY: -90 },
    { src: rock3, className: "about-rock-3", rotate: -32, exitX: 90, exitY: 100 },
    { src: rock1, className: "about-rock-4", rotate: 34, exitX: -70, exitY: 80 },
    { src: rock2, className: "about-rock-5", rotate: -42, exitX: -90, exitY: 110 },
    { src: rock3, className: "about-rock-6", rotate: 28, exitX: 70, exitY: -80 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-section relative overflow-hidden text-white"
    >
      <div className="absolute inset-0 about-earth-bg" />
      <div className="absolute inset-0 about-earth-light" />
      <div className="absolute inset-0 about-earth-vignette" />

      <img
        src={mountain}
        alt=""
        className="about-mountain-img"
        draggable="false"
        loading="lazy"
        style={{
          opacity: mountainOpacity,
          transform: `translateX(-50%) translateY(${mountainY}px) scale(${mountainScale})`,
        }}
      />

      {rocks.map((rock, index) => (
        <div
          key={index}
          className={`about-rock-wrapper ${rock.className}`}
          style={{
            opacity: rockOpacity * 0.85,
            transform: `
              translate3d(${exit * rock.exitX}px, ${exit * rock.exitY}px, 0)
              rotate(${rock.rotate}deg)
            `,
          }}
        >
          <img
            src={rock.src}
            alt=""
            className="about-rock-img"
            draggable="false"
            loading="lazy"
          />
        </div>
      ))}

      <div className="about-content relative z-20">
        <div
          className="about-text-panel"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${contentY}px)`,
            filter: `blur(${exit * 4}px)`,
          }}
        >
          <h2 className="about-title font-avatar">About Me</h2>

          <p className="about-copy">
            I’m Ricardo Plata, a UX/UI designer focused on crafting immersive
            digital experiences through visual storytelling, interaction, and
            thoughtful design systems.
          </p>

          <p className="about-copy">
            With a background in game design and interactive media, I combine
            structured UX thinking with a cinematic and motion-driven approach,
            creating interfaces that feel intuitive, atmospheric, and intentional.
          </p>

          <p className="about-copy">
            I’m currently exploring the intersection between product design,
            motion, and interactive systems, while continuing to pursue
            opportunities within gaming and creative technology.
          </p>

          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="about-button"
          >
            DOWNLOAD RESUME
          </a>
        </div>

        <div
          className="about-photo-wrapper"
          style={{
            opacity: contentOpacity,
            transform: `
              translateY(${photoY}px)
              scale(${0.96 + contentOpacity * 0.04})
            `,
            filter: `blur(${exit * 4}px)`,
          }}
        >
          <div className="about-photo-card">
            <img
              src={aboutPicture}
              alt="Ricardo Plata"
              draggable="false"
              loading="lazy"
              className="about-photo-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}