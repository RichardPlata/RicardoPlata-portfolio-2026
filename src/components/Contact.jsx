import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import waterVideo from "../assets/videos/water.mp4";

import Magnetic from "../components/Magnetic";
import PointerSurface from "../components/PointerSurface";

const emailAddress = "g2ricardogplata@gmail.com";
const premiumEase = [0.22, 1, 0.36, 1];

const roles = [
  "Product Design",
  "UX/UI Design",
  "Interaction Design",
  "Automotive HMI",
  "Creative Technology",
];

const resources = [
  {
    label: "Email",
    value: emailAddress,
    href: `mailto:${emailAddress}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "View professional profile",
    href: "https://www.linkedin.com/in/ricardo-guadarrama-plata-976a8b209",
    external: true,
  },
  {
    label: "GitHub",
    value: "RichardPlata",
    href: "https://github.com/RichardPlata",
    external: true,
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
      delayChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.97,
    filter: "blur(7px)",
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

export default function Contact() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const reduceMotion = useReducedMotion();

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.12,
    margin: "0px 0px -12% 0px",
  });

  const isSectionVisible = useInView(sectionRef, {
    amount: 0.05,
    margin: "180px 0px 180px 0px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [1.08, 1.03, 1.08],
  );

  const videoY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [45, 0, -35],
  );

  const cardY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [70, 0, -24],
  );

  const cardRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [1.1, 0, -0.8],
  );

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.playbackRate = 0.65;

    if (isSectionVisible) {
      const playPromise = video.play();

      if (playPromise) {
        playPromise.catch(() => {});
      }

      return;
    }

    video.pause();
  }, [isSectionVisible]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-title"
      className="contact-section"
    >
      <motion.video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
        className="contact-water-video"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0.18,
              }
        }
        animate={
          isSectionVisible
            ? {
                opacity: 0.58,
              }
            : {
                opacity: reduceMotion ? 0.48 : 0.18,
              }
        }
        transition={{
          duration: reduceMotion ? 0 : 1.4,
          ease: premiumEase,
        }}
        style={{
          scale: videoScale,
          y: videoY,
        }}
      >
        <source src={waterVideo} type="video/mp4" />
      </motion.video>

      <div className="contact-water-bg" />
      <div className="contact-water-light" />
      <div className="contact-water-vignette" />
      <div className="contact-water-atmosphere" />

      <div className="contact-content">
        <motion.div
          className="contact-info"
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            variants={textItemVariants}
            className="contact-eyebrow"
          >
            Available for opportunities
          </motion.p>

          <motion.h2
            variants={textItemVariants}
            id="contact-title"
            className="contact-title font-avatar"
          >
            Let’s build meaningful experiences.
          </motion.h2>

          <motion.p
            variants={textItemVariants}
            className="contact-copy"
          >
            I’m open to full-time opportunities and collaborations across
            product design, UX/UI, interaction design, automotive HMI, and
            creative technology.
          </motion.p>

          <motion.div
            variants={cardContainerVariants}
            className="contact-role-list"
          >
            {roles.map((role) => (
              <motion.span
                key={role}
                variants={cardVariants}
                className="contact-role"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={cardContainerVariants}
            className="contact-status-grid"
          >
            <motion.article
              variants={cardVariants}
              className="contact-status-card"
            >
              <span>Location</span>

              <strong>
                Based in Mexico · Open to relocation
              </strong>
            </motion.article>

            <motion.article
              variants={cardVariants}
              className="contact-status-card"
            >
              <span>Availability</span>

              <strong>
                Open to full-time opportunities
              </strong>
            </motion.article>
          </motion.div>
        </motion.div>

        <motion.div
          className="contact-card-wrapper"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.93,
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
                  scale: 0.93,
                  filter: "blur(12px)",
                }
          }
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: reduceMotion ? 0 : 0.24,
            ease: premiumEase,
          }}
          style={{
            y: cardY,
            rotate: cardRotate,
          }}
        >
          <PointerSurface
            className="contact-card-surface"
            strength={4}
            glowSize={500}
          >
            <div className="contact-card">
            <motion.header
              variants={textContainerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="contact-card-header"
            >
              <motion.span variants={textItemVariants}>
                Contact and profiles
              </motion.span>

              <motion.h3 variants={textItemVariants}>
                Start a conversation.
              </motion.h3>
            </motion.header>

            <motion.div
              variants={cardContainerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="contact-link-list"
            >
              {resources.map((resource) => (
                <motion.a
                  key={resource.label}
                  variants={cardVariants}
                  href={resource.href}
                  className="contact-resource"
                  target={resource.external ? "_blank" : undefined}
                  rel={
                    resource.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <div className="contact-resource-copy">
                    <span>{resource.label}</span>
                    <strong>{resource.value}</strong>
                  </div>

                  <span
                    className="contact-resource-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </motion.a>
              ))}
            </motion.div>

            <Magnetic>
              <motion.a
                initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
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
                      y: 20,
                    }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.55,
                ease: premiumEase,
              }}
              href={`mailto:${emailAddress}?subject=Opportunity%20for%20Ricardo%20Plata`}
              className="contact-primary-action"
            >
              Email Me

              <span aria-hidden="true">
                →
              </span>
              </motion.a>
            </Magnetic>

            <motion.p
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                    }
              }
              animate={
                isInView
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                    }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.7,
                ease: premiumEase,
              }}
              className="contact-response"
            >
              Typically responds within 24 hours
            </motion.p>
            </div>
          </PointerSurface>
        </motion.div>
      </div>

      <motion.footer
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 20,
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
                y: 20,
              }
        }
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          delay: reduceMotion ? 0 : 0.82,
          ease: premiumEase,
        }}
        className="contact-footer"
      >
        <span>
          Designed and developed by Ricardo Plata
        </span>

        <span>
          2026
        </span>
      </motion.footer>
    </section>
  );
}