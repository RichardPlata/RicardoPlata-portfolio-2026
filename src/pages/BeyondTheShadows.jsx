import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiEye,
  FiMonitor,
  FiVideo,
  FiTarget,
  FiLayers,
  FiActivity,
} from "react-icons/fi";

import btsVideo from "../assets/videos/BtsVideoCard.mp4";
import beyondTrailerVideo from "../assets/videos/BeyondTheShadowsVideo.mp4";

import littleNightmaresReference from "../assets/images/little-nightmares.webp";
import aliceReference from "../assets/images/alice-reference.jpg";
import limboReference from "../assets/images/limbo-reference.jpg";

import hudBefore from "../assets/images/HudBefore.png";
import hudAfter from "../assets/images/HudAfter.png";
import pauseBefore from "../assets/images/PauseBefore.png";
import pauseAfter from "../assets/images/PauseAfter.png";
import mainScreenBefore from "../assets/images/MainScreenBefore.png";
import mainScreenAfter from "../assets/images/MainScreenAfter.png";

const trailerUrl =
  "https://youtu.be/UHi83En1RUQ?si=ox82eVjgdGgQxZif";

const premiumEase = [0.22, 1, 0.36, 1];

const revealVariants = {
  up: {
    hidden: {
      opacity: 0,
      y: 160,
      scale: 0.9,
      rotateX: 7,
      filter: "blur(22px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
    },
  },
  left: {
    hidden: {
      opacity: 0,
      x: -150,
      scale: 0.92,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  },
  right: {
    hidden: {
      opacity: 0,
      x: 150,
      scale: 0.92,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  },
};

function Reveal({
  children,
  className = "",
  amount = 0.38,
  delay = 0,
  direction = "up",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={revealVariants[direction]}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{
        once: true,
        amount,
        margin: "0px 0px -22% 0px",
      }}
      transition={{
        duration: reduceMotion ? 0 : 1.18,
        delay: reduceMotion ? 0 : delay,
        ease: premiumEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BeforeAfterBlock({
  index,
  delay = 0,
  title,
  description,
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal
      className="bts-before-after"
      delay={delay}
      amount={0.34}
    >
      <motion.div
        className="bts-ba-text"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                x: -70,
                filter: "blur(12px)",
              }
        }
        whileInView={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.85,
          delay: reduceMotion ? 0 : delay + 0.18,
          ease: premiumEase,
        }}
      >
        <span className="bts-card-index">
          {index}
        </span>

        <h3>{title}</h3>
        <p>{description}</p>
      </motion.div>

      <div className="bts-ba-media">
        <motion.figure
          className="bts-image-frame"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 85,
                  scale: 0.9,
                  filter: "blur(16px)",
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.45,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.95,
            delay: reduceMotion ? 0 : delay + 0.28,
            ease: premiumEase,
          }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            loading="lazy"
            decoding="async"
          />

          <figcaption>Before</figcaption>
        </motion.figure>

        <motion.figure
          className="bts-image-frame"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 85,
                  scale: 0.9,
                  filter: "blur(16px)",
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.45,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.95,
            delay: reduceMotion ? 0 : delay + 0.46,
            ease: premiumEase,
          }}
        >
          <img
            src={afterImage}
            alt={afterAlt}
            loading="lazy"
            decoding="async"
          />

          <figcaption>After</figcaption>
        </motion.figure>
      </div>
    </Reveal>
  );
}

const projectFacts = [
  {
    label: "Role",
    value: "UX/UI Designer",
  },
  {
    label: "Timeline",
    value: "3 months",
  },
  {
    label: "Platform",
    value: "PC horror game",
  },
  {
    label: "Tools",
    value: "Figma · Photoshop · Blender · Unreal Engine 5",
  },
];

const audienceGroups = [
  {
    icon: <FiEye />,
    title: "Narrative Horror Players",
    description:
      "Players who value atmosphere, environmental storytelling, tension, and emotional continuity.",
  },
  {
    icon: <FiMonitor />,
    title: "Immersion-Focused Players",
    description:
      "Users who prefer interface systems that remain readable without dominating the gameplay view.",
  },
  {
    icon: <FiVideo />,
    title: "Content Creators",
    description:
      "Streamers and video creators who need clear feedback and visually understandable gameplay states.",
  },
];

const experienceGoals = [
  {
    icon: <FiTarget />,
    title: "Preserve Gameplay Focus",
    description:
      "Critical feedback needed to remain visible without covering the center of the screen or competing with the environment.",
  },
  {
    icon: <FiLayers />,
    title: "Maintain Emotional Continuity",
    description:
      "Pause states and menus needed to feel connected to the game world instead of becoming visually separate screens.",
  },
  {
    icon: <FiActivity />,
    title: "Clarify Player State",
    description:
      "Damage, navigation, and menu feedback needed stronger hierarchy and more consistent behavior.",
  },
];

const benchmarks = [
  {
    image: littleNightmaresReference,
    name: "Little Nightmares",
    title: "Minimal interface presence",
    description:
      "Supported a restrained approach to HUD elements, prompts, and damage feedback.",
  },
  {
    image: aliceReference,
    name: "Alice: Madness Returns",
    title: "Stylized visual consistency",
    description:
      "Reinforced the importance of aligning interface language with the emotional tone of the world.",
  },
  {
    image: limboReference,
    name: "Limbo",
    title: "Silhouette and contrast",
    description:
      "Encouraged simpler interface states, stronger contrast, and reduced decorative noise.",
  },
];

const uxDecisions = [
  {
    title: "Peripheral Damage Feedback",
    description:
      "Damage effects were moved toward the screen edges so danger remains visible without obscuring the player’s main field of view.",
  },
  {
    title: "Transparent Pause State",
    description:
      "The pause interface keeps the environment visible, reducing the emotional interruption caused by a fully separate screen.",
  },
  {
    title: "Simplified Menu Hierarchy",
    description:
      "Primary actions were reorganized and decorative elements reduced to improve scanning and visual consistency.",
  },
  {
    title: "Atmospheric Color System",
    description:
      "Cold blues, deep blacks, muted neutrals, and restrained red accents reinforce the horror tone while preserving readability.",
  },
];

const reflectionItems = [
  {
    label: "Player Experience",
    title: "Readability should support immersion",
    description:
      "The redesign showed that interface clarity and atmosphere are not opposing goals when hierarchy and visual feedback are handled carefully.",
  },
  {
    label: "Visual Continuity",
    title: "Menus are part of the game world",
    description:
      "Pause states, damage feedback, and navigation feel more cohesive when they share the same tone, contrast, and visual language.",
  },
  {
    label: "Next Iteration",
    title: "Validate feedback during real gameplay",
    description:
      "A future iteration would test damage visibility, menu navigation speed, subtitle accessibility, controller focus states, and different display conditions.",
  },
];

export default function BeyondTheShadows() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.25],
    reduceMotion ? [1, 1] : [1, 1.055],
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1, 0.32],
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.2],
    reduceMotion ? [0, 0] : [0, -92],
  );

  const scrollToOverview = () => {
    document
      .getElementById("bts-overview")
      ?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
  };

  return (
    <main className="bts-page">
      {/* HERO */}
      <section className="bts-hero">
        <motion.video
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
          className="bts-hero-video"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source
            src={btsVideo}
            type="video/mp4"
          />
        </motion.video>

        <div className="bts-hero-overlay" />
        <div className="bts-fog-layer" />
        <div className="bts-noise-layer" />

        <motion.div
          style={{
            y: titleY,
          }}
          className="bts-hero-content"
        >
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 125,
                    scale: 0.92,
                    filter: "blur(22px)",
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.35,
              delay: reduceMotion ? 0 : 0.28,
              ease: premiumEase,
            }}
          >
          <p className="bts-kicker">
            Game UX · Interface Redesign · Horror Experience
          </p>

          <h1>Beyond The Shadows</h1>

          <p className="bts-hero-copy">
            Redesigning a horror-game interface to improve readability,
            player-state feedback, and menu clarity without weakening the
            atmosphere.
          </p>

          <button
            type="button"
            onClick={scrollToOverview}
            className="bts-primary-link bts-scroll-button"
          >
            Explore Case Study ↓
          </button>
          </motion.div>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section
        id="bts-overview"
        className="bts-section bts-overview-section"
      >
        <div className="bts-overview-grid">
          <Reveal className="bts-overview-copy">
            <p className="bts-section-label">
              Overview
            </p>

            <h2>
              A clearer interface system for a narrative horror experience.
            </h2>

            <p>
              Beyond The Shadows is a narrative horror game developed in
              Unreal Engine 5. The interface redesign focused on HUD clarity,
              pause-state continuity, visual hierarchy, and emotional tension.
            </p>

            <p>
              The goal was not to make the interface more visible everywhere,
              but to make critical feedback understandable while preserving the
              game’s atmosphere.
            </p>
          </Reveal>

          <Reveal className="bts-meta-grid">
            {projectFacts.map((fact) => (
              <article
                key={fact.label}
                className="bts-meta-card"
              >
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="bts-section bts-narrative-section">
        <Reveal className="bts-section-heading bts-section-heading-large">
          <p className="bts-section-label">
            The Challenge
          </p>

          <h2>
            Improving clarity without breaking immersion.
          </h2>
        </Reveal>

        <div className="bts-challenge-layout">
          <Reveal className="bts-info-card bts-info-card-featured">
            <span className="bts-card-index">
              01 · Problem
            </span>

            <h3>
              The original interface competed with the game world.
            </h3>

            <p>
              Some interface elements introduced visual noise, inconsistent
              hierarchy, and abrupt state changes that weakened atmosphere and
              made key gameplay feedback harder to interpret.
            </p>
          </Reveal>

          <Reveal className="bts-info-card" delay={0.18}>
            <span className="bts-card-index">
              02 · Objective
            </span>

            <h3>
              Build a darker and more coherent interface language.
            </h3>

            <p>
              The redesign needed to improve damage feedback, menu hierarchy,
              pause-state clarity, and player-state communication while
              remaining visually connected to the environment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bts-visual-break">
        <Reveal className="bts-visual-break-inner" amount={0.24} direction="right">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="Beyond The Shadows atmospheric gameplay"
          >
            <source src={beyondTrailerVideo} type="video/mp4" />
          </video>
        </Reveal>
      </section>

      {/* AUDIENCE */}
      <section className="bts-section">
        <Reveal className="bts-section-heading">
          <p className="bts-section-label">
            Audience
          </p>

          <h2>
            Players who expect tension without interface friction.
          </h2>
        </Reveal>

        <div className="bts-audience-layout">
          {audienceGroups.map((audience, index) => (
            <Reveal
              key={audience.title}
              className={`bts-user-card bts-user-card-${index + 1}`}
              delay={index * 0.2}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="bts-user-icon">
                {audience.icon}
              </div>

              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXPERIENCE GOALS */}
      <section className="bts-section">
        <Reveal className="bts-section-heading">
          <p className="bts-section-label">
            Experience Goals
          </p>

          <h2>
            The redesign was guided by three player-experience priorities.
          </h2>
        </Reveal>

        <div className="bts-goals-layout">
          {experienceGoals.map((goal, index) => (
            <Reveal
              key={goal.title}
              className={`bts-goal-card bts-goal-card-${index + 1}`}
              delay={index * 0.2}
              direction={index % 2 === 0 ? "right" : "left"}
            >
              <div className="bts-goal-icon">
                {goal.icon}
              </div>

              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BENCHMARKING */}
      <section className="bts-section bts-wide-section">
        <Reveal className="bts-section-heading">
          <p className="bts-section-label">
            Benchmarking
          </p>

          <h2>
            Genre references helped define the visual direction.
          </h2>

          <p className="bts-section-intro">
            The review focused on how established games preserve atmosphere,
            communicate danger, and reduce interface interruption.
          </p>
        </Reveal>

        <div className="bts-benchmark-grid">
          {benchmarks.map((benchmark, index) => (
            <Reveal
              key={benchmark.name}
              className={`bts-benchmark-card bts-benchmark-card-${index + 1}`}
              delay={index * 0.2}
              direction={index === 1 ? "up" : index === 0 ? "left" : "right"}
            >
              <div className="bts-reference-image">
                <img
                  src={benchmark.image}
                  alt={`${benchmark.name} visual reference`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <span className="bts-reference-title">
                {benchmark.name}
              </span>

              <h3>{benchmark.title}</h3>
              <p>{benchmark.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTERFACE REDESIGN */}
      <section className="bts-section bts-wide-section">
        <Reveal className="bts-section-heading">
          <p className="bts-section-label">
            Interface Redesign
          </p>

          <h2>
            Before-and-after comparisons reveal the design decisions.
          </h2>

          <p className="bts-section-intro">
            The redesign focused on moments where visual feedback, navigation,
            and atmosphere directly affected the player experience.
          </p>
        </Reveal>

        <div className="bts-before-after-stack">
          <BeforeAfterBlock
            index="01 · HUD"
            title="Peripheral damage feedback"
            description="Damage feedback was moved toward the screen edges to preserve visibility in the center while still communicating danger."
            beforeImage={hudBefore}
            afterImage={hudAfter}
            beforeAlt="Original Beyond The Shadows HUD"
            afterAlt="Redesigned Beyond The Shadows HUD"
            delay={0}
          />

          <BeforeAfterBlock
            index="02 · Pause State"
            title="Maintaining connection to the environment"
            description="The pause menu became a darker translucent layer so the player remains visually connected to the game world."
            beforeImage={pauseBefore}
            afterImage={pauseAfter}
            beforeAlt="Original Beyond The Shadows pause menu"
            afterAlt="Redesigned Beyond The Shadows pause menu"
            delay={0.16}
          />

          <BeforeAfterBlock
            index="03 · Main Screen"
            title="A clearer atmospheric first impression"
            description="The main screen was simplified to improve hierarchy, reduce decorative noise, and establish a stronger visual tone."
            beforeImage={mainScreenBefore}
            afterImage={mainScreenAfter}
            beforeAlt="Original Beyond The Shadows main screen"
            afterAlt="Redesigned Beyond The Shadows main screen"
            delay={0.32}
          />
        </div>
      </section>

      {/* UX DECISIONS */}
      <section className="bts-section">
        <Reveal className="bts-section-heading">
          <p className="bts-section-label">
            UX Decisions
          </p>

          <h2>
            Decisions balanced atmosphere, feedback, and readability.
          </h2>
        </Reveal>

        <div className="bts-decision-grid">
          {uxDecisions.map((decision, index) => (
            <Reveal
              key={decision.title}
              className={`bts-decision-card bts-decision-card-${index + 1}`}
              delay={index * 0.18}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <span className="bts-card-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{decision.title}</h3>
              <p>{decision.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL RESULT */}
      <section className="bts-section bts-wide-section">
        <Reveal className="bts-section-heading">
          <p className="bts-section-label">
            Final Result
          </p>

          <h2>
            A darker interface language integrated with the horror experience.
          </h2>
        </Reveal>

        <Reveal className="bts-trailer-card">
          <div className="bts-trailer-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-label="Beyond The Shadows final trailer"
            >
              <source
                src={beyondTrailerVideo}
                type="video/mp4"
              />
            </video>
          </div>

          <div className="bts-trailer-content">
            <span>Final showcase</span>

            <h3>
              Interface feedback that reinforces tension instead of
              interrupting it.
            </h3>

            <p>
              The final visual system combines cold blue shadows, restrained
              red accents, deep blacks, simplified hierarchy, and translucent
              surfaces to support immersion and clarity.
            </p>

            <a
              href={trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bts-primary-link"
            >
              Watch Trailer ↗
            </a>
          </div>
        </Reveal>
      </section>

      {/* REFLECTION */}
      <section className="bts-section bts-reflection">
        <Reveal className="bts-section-heading">
          <p className="bts-section-label">
            Reflection
          </p>

          <h2>
            What the redesign taught me.
          </h2>
        </Reveal>

        <div className="bts-reflection-grid">
          {reflectionItems.map((item, index) => (
            <Reveal
              key={item.label}
              className={`bts-reflection-card bts-reflection-card-${index + 1}`}
              delay={index * 0.2}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bts-trailer-cta">
        <Reveal className="bts-trailer-cta-inner">
          <p>Final game showcase</p>

          <h2>
            See how the redesigned interface behaves inside the complete horror experience.
          </h2>

          <a
            href={trailerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bts-primary-link"
          >
            Watch Trailer ↗
          </a>
        </Reveal>
      </section>

      {/* NEXT PROJECT */}
      <nav
        className="bts-next-project"
        aria-label="Case study navigation"
      >
        <Link
          to="/projects/aura-drive"
          className="bts-next-project-link"
        >
          <span className="bts-next-project-label">
            Continue Exploring
          </span>

          <div className="bts-next-project-main">
            <strong>AURA Drive</strong>

            <span
              className="bts-next-project-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </div>
        </Link>
      </nav>
    </main>
  );
}