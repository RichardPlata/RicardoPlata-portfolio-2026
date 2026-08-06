import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router-dom";

import PointerSurface from "./PointerSurface";

import cenizasVideo from "../assets/videos/Flames.mp4";

import auraDriveVideo from "../assets/videos/AuraDriveCardVideo.mp4";
import guQiVideo from "../assets/videos/GuQi-video.mp4";
import kokoroVideo from "../assets/videos/KokoroCardVideo.mp4";
import btsVideo from "../assets/videos/BtsVideoCard.mp4";

const projects = [
  {
    number: "01",
    title: "AURA Drive",
    year: "June 2026",
    category: "Automotive UX",
    type: "HMI · Interaction Design · Functional Prototype",
    focus: "Connected cockpit interaction system",
    video: auraDriveVideo,
    videoPosition: "center center",
    description:
      "Interactive automotive HMI prototype combining digital clusters, infotainment, ambient lighting, drive modes, and synchronized cockpit interactions.",
    role: "UX/UI Designer · Front-End Developer",
    tools: "React · Three.js · GSAP · Blender",
    linkLabel: "View Case Study",
    path: "/projects/aura-drive",
  },
  {
    number: "02",
    title: "Kokoro",
    year: "April 2026",
    category: "Mobile Product Design",
    type: "UX/UI · User Flows · Motion",
    focus: "Mobile ordering and cake customization",
    video: kokoroVideo,
    videoPosition: "center center",
    description:
      "Mobile bakery experience simplifying product discovery, custom cake configuration, ordering, and checkout through a warm, approachable interface.",
    role: "UX/UI Designer",
    tools: "Figma · Prototyping · Motion Design",
    linkLabel: "View Case Study",
    path: "/projects/kokoro",
  },
  {
    number: "03",
    title: "GU-QI",
    year: "June 2026",
    category: "Client Project",
    type: "Responsive Web · UX/UI · Development",
    focus: "Service discovery and booking experience",
    video: guQiVideo,
    videoPosition: "center center",
    description:
      "Responsive client website improving therapy discovery, service understanding, course visibility, and direct access to booking.",
    role: "UX/UI Designer · Front-End Developer",
    tools: "Figma · React · Vite · CSS",
    linkLabel: "View Case Study",
    path: "/projects/gu-qi",
  },
  {
    number: "04",
    title: "Beyond The Shadows",
    year: "January 2025",
    category: "Game UX",
    type: "Player Experience · Interface Redesign",
    focus: "Immersive and readable horror-game interface",
    video: btsVideo,
    videoPosition: "center center",
    description:
      "Game UI redesign improving readability, navigation, visual consistency, and immersion across a narrative horror experience.",
    role: "UX/UI Designer",
    tools: "Figma · Benchmarking · Motion Design",
    linkLabel: "View Case Study",
    path: "/projects/beyond-the-shadows",
  },
];

const premiumEase = [0.22, 1, 0.36, 1];

function ProjectItem({ project, index }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  const reduceMotion = useReducedMotion();

  const isInView = useInView(cardRef, {
    once: true,
    amount: 0.22,
    margin: "0px 0px -8% 0px",
  });

  const videoIsVisible = useInView(cardRef, {
    amount: 0.12,
    margin: "180px 0px 180px 0px",
  });

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (videoIsVisible) {
      const playPromise = video.play();

      if (playPromise) {
        playPromise.catch(() => {
          // El navegador puede bloquear autoplay en ciertos casos.
        });
      }

      return;
    }

    video.pause();
  }, [videoIsVisible]);

  const delay = reduceMotion ? 0 : index * 0.14;

  return (
    <motion.article
      ref={cardRef}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 110,
              scale: 0.94,
              filter: "blur(14px)",
            }
      }
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              y: 110,
              scale: 0.94,
              filter: "blur(14px)",
            }
      }
      transition={{
        duration: reduceMotion ? 0 : 1,
        delay,
        ease: premiumEase,
      }}
      className="project-card"
    >
      <PointerSurface
        className="project-card-surface"
        strength={8}
        glowSize={520}
      >
        <Link
          to={project.path}
          className="project-card-link"
          aria-label={`View ${project.title} case study`}
        >
        <div className="project-card-media">
          <motion.div
            className="project-card-video-motion"
            initial={
              reduceMotion
                ? false
                : {
                    scale: 1.12,
                    opacity: 0.45,
                  }
            }
            animate={
              isInView
                ? {
                    scale: 1,
                    opacity: 1,
                  }
                : {
                    scale: 1.12,
                    opacity: 0.45,
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 1.5,
              delay: delay + 0.1,
              ease: premiumEase,
            }}
          >
            <video
              ref={videoRef}
              className="project-card-video"
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              style={{
                objectPosition: project.videoPosition,
              }}
            >
              <source src={project.video} type="video/mp4" />
            </video>
          </motion.div>

          <div className="project-card-overlay" />

          <motion.div
            className="project-card-top"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: -14,
                  }
            }
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: -14,
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: delay + 0.28,
              ease: premiumEase,
            }}
          >
            <span className="project-number">
              {project.number}
            </span>

            <span className="project-year">
              {project.year}
            </span>
          </motion.div>

          <motion.div
            className="project-card-category"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                    filter: "blur(6px)",
                  }
            }
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: 18,
                    filter: "blur(6px)",
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: delay + 0.34,
              ease: premiumEase,
            }}
          >
            {project.category}
          </motion.div>
        </div>

        <div className="project-card-body">
          <motion.div
            className="project-card-main"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: delay + 0.25,
              ease: premiumEase,
            }}
          >
            <p className="project-type">
              {project.type}
            </p>

            <h3 className="project-title">
              {project.title}
            </h3>

            <p className="project-focus">
              {project.focus}
            </p>

            <p className="project-description">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            className="project-card-footer"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 26,
                  }
            }
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 26,
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: delay + 0.38,
              ease: premiumEase,
            }}
          >
            <div className="project-meta">
              <div>
                <span>Role</span>
                <p>{project.role}</p>
              </div>

              <div>
                <span>Tools</span>
                <p>{project.tools}</p>
              </div>
            </div>

            <span className="project-link">
              {project.linkLabel}

              <span
                className="project-link-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </span>
          </motion.div>
        </div>
        </Link>
      </PointerSurface>
    </motion.article>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  const reduceMotion = useReducedMotion();

  const headerIsInView = useInView(sectionRef, {
    once: true,
    amount: 0.16,
    margin: "0px 0px -25% 0px",
  });

  const sectionIsVisible = useInView(sectionRef, {
    amount: 0.05,
    margin: "180px 0px 180px 0px",
  });

  useEffect(() => {
    const video = backgroundVideoRef.current;

    if (!video) return;

    if (sectionIsVisible) {
      const playPromise = video.play();

      if (playPromise) {
        playPromise.catch(() => {
          // El navegador puede bloquear autoplay.
        });
      }

      return;
    }

    video.pause();
  }, [sectionIsVisible]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-labelledby="projects-title"
      className="
        projects-section
        relative
        z-20
        -mt-[18vh]
        min-h-screen
        overflow-hidden
        px-10
        pb-32
        pt-[24vh]
        text-white
      "
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#FF7A3D_0%,_#7A1E00_45%,_#180A05_100%)]" />

      <motion.video
        ref={backgroundVideoRef}
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0.18,
                scale: 1.08,
              }
        }
        animate={
          sectionIsVisible
            ? {
                opacity: 0.6,
                scale: 1,
              }
            : {
                opacity: 0.18,
                scale: 1.08,
              }
        }
        transition={{
          duration: reduceMotion ? 0 : 1.5,
          ease: premiumEase,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-[5]
          h-full
          w-full
          object-cover
          mix-blend-screen
        "
      >
        <source src={cenizasVideo} type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 z-10 bg-black/40" />

      <div className="pointer-events-none absolute inset-0 z-[11] bg-[radial-gradient(circle_at_center,_rgba(255,120,40,0.22),_transparent_55%)]" />

      <div className="relative z-20 mx-auto max-w-7xl">
        <motion.header
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 70,
                  filter: "blur(12px)",
                }
          }
          animate={
            headerIsInView
              ? {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }
              : {
                  opacity: 0,
                  y: 70,
                  filter: "blur(12px)",
                }
          }
          transition={{
            duration: reduceMotion ? 0 : 0.95,
            ease: premiumEase,
          }}
          className="projects-header"
        >
          <p className="projects-eyebrow">
            Selected work
          </p>

          <div className="projects-heading-row">
            <h2
              id="projects-title"
              className="
                font-avatar
                text-7xl
                leading-none
                text-[#FFD7C2]
                drop-shadow-[0_0_25px_rgba(255,120,40,0.35)]
                md:text-8xl
              "
            >
              Projects
            </h2>

            <p className="projects-introduction">
              UX, HMI, and interactive experiences developed from design
              thinking to functional prototypes.
            </p>
          </div>
        </motion.header>

        <div className="projects-layout">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}