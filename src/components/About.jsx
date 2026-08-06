import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import mountain from "../assets/images/mountain.webp";

import rock1 from "../assets/images/rock1.webp";
import rock2 from "../assets/images/rock2.webp";
import rock3 from "../assets/images/rock3.webp";

import aboutPicture from "../assets/images/About-Picture.png";
import resumeFile from "../assets/files/Resume-RicardoPlata-2026.pdf";

const premiumEase = [0.22, 1, 0.36, 1];

const focusAreas = [
  {
    label: "Product",
    title: "UX/UI & Interaction Design",
  },
  {
    label: "Automotive",
    title: "HMI & Cockpit Experiences",
  },
  {
    label: "Technology",
    title: "Functional Prototypes",
  },
  {
    label: "Background",
    title: "Game Design & Visual Storytelling",
  },
];

const processSteps = [
  "Understand",
  "Structure",
  "Prototype",
  "Test",
  "Refine",
];

const rocks = [
  {
    src: rock1,
    className: "about-rock-1",
    rotate: -18,
    x: -38,
    y: -34,
  },
  {
    src: rock2,
    className: "about-rock-2",
    rotate: 22,
    x: 34,
    y: -42,
  },
  {
    src: rock3,
    className: "about-rock-3",
    rotate: -32,
    x: 44,
    y: 38,
  },
  {
    src: rock1,
    className: "about-rock-4",
    rotate: 34,
    x: -30,
    y: 36,
  },
  {
    src: rock2,
    className: "about-rock-5",
    rotate: -42,
    x: -42,
    y: 40,
  },
  {
    src: rock3,
    className: "about-rock-6",
    rotate: 28,
    x: 36,
    y: -34,
  },
];

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const textItemVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(9px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: premiumEase,
    },
  },
};

export default function About() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.12,
    margin: "0px 0px -15% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mountainY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [90, 0, 70],
  );

  const mountainScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [1.08, 1.02, 1.06],
  );

  const mountainOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [0, 1, 1, 0.35],
  );

  const photoY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [80, 0, -34],
  );

  const photoRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [1.5, 0, -1.2],
  );

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-title"
      className="about-section"
    >
      <div className="about-earth-bg" />
      <div className="about-earth-light" />
      <div className="about-earth-vignette" />
      <div className="about-earth-atmosphere" />

      <motion.img
        src={mountain}
        alt=""
        aria-hidden="true"
        className="about-mountain-img"
        draggable="false"
        loading="lazy"
        decoding="async"
        style={{
          opacity: mountainOpacity,
          y: mountainY,
          scale: mountainScale,
          x: "-50%",
        }}
      />

      {rocks.map((rock, index) => {
        const rockX = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          reduceMotion ? [0, 0, 0] : [0, 0, rock.x],
        );

        const rockY = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          reduceMotion ? [0, 0, 0] : [30, 0, rock.y],
        );

        return (
          <motion.div
            key={`${rock.className}-${index}`}
            aria-hidden="true"
            className={`about-rock-wrapper ${rock.className}`}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.82,
                  }
            }
            animate={
              isInView
                ? {
                    opacity: 0.85,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    scale: 0.82,
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.12 + index * 0.08,
              ease: premiumEase,
            }}
            style={{
              x: rockX,
              y: rockY,
              rotate: rock.rotate,
            }}
          >
            <img
              src={rock.src}
              alt=""
              className="about-rock-img"
              draggable="false"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        );
      })}

      <div className="about-content">
        <motion.div
          className="about-text-panel"
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            variants={textItemVariants}
            className="about-eyebrow"
          >
            Designer profile
          </motion.p>

          <motion.h2
            variants={textItemVariants}
            id="about-title"
            className="about-title font-avatar"
          >
            From game design to interactive products.
          </motion.h2>

          <motion.p
            variants={textItemVariants}
            className="about-lead"
          >
            I’m Ricardo Plata, a UX/UI and Interaction Designer who combines
            product thinking, motion, visual storytelling, and functional
            prototyping.
          </motion.p>

          <motion.p
            variants={textItemVariants}
            className="about-copy"
          >
            My background in game design shaped how I think about systems,
            feedback, immersion, and user behavior. Today, I apply that
            perspective to digital products, responsive experiences,
            automotive interfaces, and interactive prototypes.
          </motion.p>

          <motion.p
            variants={textItemVariants}
            className="about-copy"
          >
            I’m especially interested in projects where interface,
            technology, and context need to work together clearly. I enjoy
            turning complex flows into experiences that feel intuitive,
            intentional, and visually engaging.
          </motion.p>

          <motion.div
            variants={cardContainerVariants}
            className="about-focus-grid"
          >
            {focusAreas.map((area) => (
              <motion.article
                key={area.label}
                variants={cardVariants}
                className="about-focus-card"
              >
                <span>{area.label}</span>
                <strong>{area.title}</strong>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            variants={textItemVariants}
            className="about-process"
          >
            <p className="about-process-label">
              How I approach design
            </p>

            <motion.div
              variants={cardContainerVariants}
              className="about-process-list"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={step}
                  variants={cardVariants}
                  className="about-process-item"
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {step}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={textItemVariants}
            className="about-actions"
          >
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="about-button"
            >
              View Resume

              <span
                className="about-button-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>

            <button
              type="button"
              onClick={scrollToProjects}
              className="about-secondary-link"
            >
              Explore Projects

              <span
                className="about-button-arrow"
                aria-hidden="true"
              >
                ↑
              </span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-photo-wrapper"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.92,
                  filter: "blur(12px)",
                }
          }
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }
              : {
                  opacity: 0,
                  scale: 0.92,
                  filter: "blur(12px)",
                }
          }
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: reduceMotion ? 0 : 0.28,
            ease: premiumEase,
          }}
          style={{
            y: photoY,
            rotate: photoRotate,
          }}
        >
          <div className="about-photo-card">
            <img
              src={aboutPicture}
              alt="Ricardo Plata, UX/UI and Interaction Designer"
              draggable="false"
              loading="lazy"
              decoding="async"
              className="about-photo-img"
            />

            <div className="about-photo-caption">
              <span>Based in Mexico</span>

              <strong>
                UX/UI · Product · Automotive HMI
              </strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}