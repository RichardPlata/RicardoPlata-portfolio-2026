import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import cenizasVideo from "../assets/videos/TempVideo.mp4";

import digitalVaultVideo from "../assets/videos/DigitalVaultCardVideo.mp4";
import kokoroVideo from "../assets/videos/KokoroCardVideo.mp4";
import manosMisticasVideo from "../assets/videos/ManosMisticasCardVideo.mp4";
import btsVideo from "../assets/videos/BtsVideoCard.mp4";

const projects = [
  {
    number: "01",
    title: "Digital Vault",
    year: "April 2025",
    type: "E-commerce · UX/UI · Marketing",
    video: digitalVaultVideo,
    videoPosition: "center center",
    description:
      "Gaming-focused e-commerce platform designed to simplify product discovery, improve navigation clarity, and support purchase decisions.",
    linkLabel: "View Case Study",
    path: "/projects/digital-vault",
    available: true,
  },
  {
    number: "02",
    title: "Kokoro",
    year: "April 2026",
    type: "Mobile App · UX/UI · Motion",
    video: kokoroVideo,
    videoPosition: "center center",
    description:
      "Bakery mobile app prototype with a cozy visual identity, customization flow, checkout experience, and motion-based interactions.",
    linkLabel: "View Case Study",
    path: "/projects/kokoro",
    available: true,
  },
  {
    number: "03",
    title: "Manos Místicas",
    year: "",
    type: "Web Design · Motion · UX/UI",
    video: manosMisticasVideo,
    videoPosition: "center top",
    description:
      "Immersive holistic website experience focused on wellness, visual storytelling, soft motion, and editorial interaction.",
    linkLabel: "Coming Soon",
    path: "",
    available: false,
  },
  {
    number: "04",
    title: "Beyond The Shadows",
    year: "January 2025",
    type: "Game UI · Player UX",
    video: btsVideo,
    videoPosition: "center center",
    description:
      "UI redesign for a narrative horror game focused on improving immersion, readability, and visual consistency.",
    linkLabel: "View Case Study",
    path: "/projects/beyond-the-shadows",
    available: true,
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionBottom, setSectionBottom] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionTop(rect.top);
        setSectionBottom(rect.bottom);
      }
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const projectProgress = Math.min(scrollY / 700, 1);
  const projectTranslate = Math.max(100 - projectProgress * 100, 0);

  const enterProgress = clamp(
    (windowHeight * 0.85 - sectionTop) / (windowHeight * 0.55),
    0,
    1
  );

  const exitProgress = clamp(
    (windowHeight * 0.25 - sectionBottom) / (windowHeight * 0.55),
    0,
    1
  );

  const titleOpacity = enterProgress * (1 - exitProgress);
  const titleTranslateY = (1 - enterProgress) * 70 + exitProgress * -70;
  const titleBlur = (1 - enterProgress) * 8 + exitProgress * 8;

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        transform: `translateY(${projectTranslate}px)`,
      }}
      className="
        projects-section
        relative
        z-20
        -mt-[18vh]
        min-h-screen
        overflow-hidden
        text-white
        px-10
        pt-[24vh]
        pb-32
        transition-transform
        duration-300
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FF7A3D_0%,_#7A1E00_45%,_#180A05_100%)] z-0" />

      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          z-[5]
          opacity-60
          mix-blend-screen
          pointer-events-none
        "
      >
        <source src={cenizasVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 z-[11] bg-[radial-gradient(circle_at_center,_rgba(255,120,40,0.22),_transparent_55%)] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto">
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
            filter: `blur(${titleBlur}px)`,
          }}
          className="mb-16 transition-all duration-300 ease-out"
        >
          <h2
            className="
              font-avatar
              text-7xl
              md:text-8xl
              leading-none
              text-[#FFD7C2]
              drop-shadow-[0_0_25px_rgba(255,120,40,0.35)]
            "
          >
            Projects
          </h2>
        </div>

        <div className="projects-layout">
          {projects.map((project, index) => {
            const delay = index * 0.08;

            const cardEnterProgress = clamp(
              (enterProgress - delay) / 0.55,
              0,
              1
            );

            const cardOpacity = cardEnterProgress * (1 - exitProgress);
            const cardTranslateY =
              (1 - cardEnterProgress) * 90 + exitProgress * -80;
            const cardScale =
              0.96 + cardEnterProgress * 0.04 - exitProgress * 0.03;
            const cardBlur = (1 - cardEnterProgress) * 8 + exitProgress * 8;

            return (
              <article
                key={project.number}
                style={{
                  opacity: cardOpacity,
                  transform: `translateY(${cardTranslateY}px) scale(${cardScale})`,
                  filter: `blur(${cardBlur}px)`,
                }}
                className={`flip-card project-card ${
                  !project.available ? "project-card-disabled" : ""
                }`}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-face flip-card-front">
                    <video
                      className="project-card-video"
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{
                        objectPosition: project.videoPosition,
                      }}
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>

                    <div className="project-card-overlay" />

                    <div className="project-card-top">
                      <span className="project-number">{project.number}</span>

                      {project.year && (
                        <span className="project-year">{project.year}</span>
                      )}
                    </div>

                    <div className="project-card-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-type">{project.type}</p>
                    </div>
                  </div>

                  <div className="flip-card-face flip-card-back">
                    <div className="project-card-back-overlay" />

                    <div className="project-card-top">
                      <span className="project-number">{project.number}</span>

                      {project.year && (
                        <span className="project-year">{project.year}</span>
                      )}
                    </div>

                    <div className="project-card-content">
                      <h3 className="project-title">{project.title}</h3>

                      <p className="project-description">
                        {project.description}
                      </p>

                      {project.available ? (
                        <Link className="project-link" to={project.path}>
                          {project.linkLabel}
                        </Link>
                      ) : (
                        <span className="project-link project-link-disabled">
                          {project.linkLabel}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}