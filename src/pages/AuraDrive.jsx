import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiCpu,
  FiMic,
  FiMonitor,
  FiNavigation,
  FiZap,
} from "react-icons/fi";

import auraDriveVideo from "../assets/videos/AuraDriveCardVideo.mp4";
import auraDriveStartSequence from "../assets/videos/AuraDriveStartSequence.mp4";
import auraDriveUIView from "../assets/videos/AuraDrive_UIView.mp4";
import auraDriveDemo from "../assets/videos/AuraDrive_Demo.mp4";

const demoUrl = "https://aura-drive-showroom.vercel.app/";
const premiumEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 96,
    scale: 0.965,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
};

function Reveal({
  children,
  className = "",
  amount = 0.22,
  delay = 0,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{
        once: true,
        amount,
        margin: "0px 0px -10% 0px",
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.95,
        delay: reduceMotion ? 0 : delay,
        ease: premiumEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const projectFacts = [
  {
    label: "Role",
    value: "UX/UI Designer · Front-End Developer",
  },
  {
    label: "Timeline",
    value: "3 weeks",
  },
  {
    label: "Platform",
    value: "Interactive web prototype",
  },
  {
    label: "Tools",
    value: "React · Three.js · GSAP · Blender",
  },
];

const systemAreas = [
  {
    icon: <FiMonitor />,
    title: "Center Display",
    description:
      "Infotainment interface covering navigation, media, phone, climate, drive modes, vehicle controls, and assistant flows.",
  },
  {
    icon: <FiCpu />,
    title: "Digital Cluster",
    description:
      "Driver-facing interface synchronized with navigation, media, drive modes, system states, and assistant feedback.",
  },
  {
    icon: <FiZap />,
    title: "Vehicle Feedback",
    description:
      "Ambient lighting, welcome sequences, and state changes communicate system status and vehicle behavior.",
  },
];

const interactionFlow = [
  {
    label: "01",
    title: "Vehicle Entry",
    description: "The viewer enters the vehicle from the exterior showroom.",
  },
  {
    label: "02",
    title: "Start",
    description: "The cockpit remains inactive until the system is started.",
  },
  {
    label: "03",
    title: "Boot",
    description: "Initialization and battery checks communicate system status.",
  },
  {
    label: "04",
    title: "Welcome",
    description: "Displays and ambient lighting transition into the active state.",
  },
  {
    label: "05",
    title: "Home",
    description: "The center display becomes the primary interaction surface.",
  },
  {
    label: "06",
    title: "Feature Selection",
    description: "Navigation, media, climate, phone, and vehicle functions open.",
  },
  {
    label: "07",
    title: "Synchronized Feedback",
    description: "Cluster, lighting, and interface states respond together.",
  },
];

const uxDecisions = [
  {
    icon: <FiNavigation />,
    title: "Navigation across screens",
    description:
      "Navigation information is distributed between the center display and digital cluster to reduce duplication and support glanceability.",
  },
  {
    icon: <FiActivity />,
    title: "Drive-mode feedback",
    description:
      "Eco, Comfort, and Sport use color, motion, cluster behavior, and ambient lighting to make mode changes immediately understandable.",
  },
  {
    icon: <FiMic />,
    title: "Assistant states",
    description:
      "Listening, thinking, and speaking states make the assistant interaction visible instead of relying on voice feedback alone.",
  },
  {
    icon: <FiCpu />,
    title: "System progression",
    description:
      "OFF, START, BOOT, WELCOME, and HOME states establish a believable startup sequence instead of presenting the interface instantly.",
  },
];

const reflectionItems = [
  {
    label: "System Thinking",
    title: "Designing relationships between screens",
    description:
      "The project strengthened my understanding of how the center display, cluster, ambient lighting, and vehicle state should behave as one connected system.",
  },
  {
    label: "Interaction Timing",
    title: "Motion communicates system status",
    description:
      "Building the startup and assistant sequences showed how timing, transitions, and feedback influence whether an interface feels responsive and understandable.",
  },
  {
    label: "Next Iteration",
    title: "Validate the experience in realistic scenarios",
    description:
      "A future iteration would include usability testing, accessibility review, reduced-distraction states, and evaluation of the interface during simulated driving tasks.",
  },
];

export default function AuraDrive() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.25],
    reduceMotion ? [1, 1] : [1, 1.045],
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1, 0.26],
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.2],
    reduceMotion ? [0, 0] : [0, -88],
  );

  const scrollToOverview = () => {
    document.getElementById("overview")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <main className="aura-page">
      <section className="aura-hero">
        <motion.video
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
          className="aura-hero-video"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src={auraDriveVideo} type="video/mp4" />
        </motion.video>

        <div className="aura-hero-overlay" />
        <div className="aura-hero-grid" />

        <motion.div
          style={{ y: titleY }}
          className="aura-hero-content"
        >
          <p className="aura-kicker">
            Automotive UX · HMI · Functional Prototype
          </p>

          <h1>AURA Drive</h1>

          <p className="aura-hero-copy">
            Designing a connected cockpit experience through synchronized
            displays, vehicle states, ambient feedback, and real-time
            interaction.
          </p>

          <div className="aura-hero-actions">
            <button
              type="button"
              onClick={scrollToOverview}
              className="aura-primary-link aura-scroll-button"
            >
              Explore Case Study ↓
            </button>

            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="aura-secondary-link"
            >
              Launch Prototype ↗
            </a>
          </div>
        </motion.div>
      </section>

      <section
        id="overview"
        className="aura-section aura-overview-section"
      >
        <div className="aura-overview-grid">
          <Reveal className="aura-overview-copy">
            <p className="aura-section-label">Overview</p>

            <h2>
              A functional automotive HMI shown inside its vehicle context.
            </h2>

            <p>
              AURA Drive is an interactive web-based showroom created to
              demonstrate how an automotive interface behaves as a connected
              system rather than a collection of isolated screens.
            </p>

            <p>
              The experience combines vehicle entry, startup states, center
              display interactions, digital-cluster synchronization, ambient
              lighting, drive modes, and assistant feedback.
            </p>
          </Reveal>

          <Reveal className="aura-meta-grid">
            {projectFacts.map((fact) => (
              <article
                key={fact.label}
                className="aura-meta-card"
              >
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="aura-section aura-narrative-section">
        <Reveal className="aura-section-intro aura-section-intro-large">
          <p className="aura-section-label">The Challenge</p>

          <h2>
            Showing interaction behavior—not only polished screens.
          </h2>
        </Reveal>

        <div className="aura-challenge-layout">
          <Reveal className="aura-info-card aura-info-card-featured">
            <span className="aura-card-index">01 · Problem</span>

            <h3>Static interfaces hide system behavior.</h3>

            <p>
              Many automotive portfolio projects communicate visual quality
              but do not demonstrate how displays, vehicle feedback, and
              cockpit states respond to one another over time.
            </p>
          </Reveal>

          <Reveal className="aura-info-card" delay={0.16}>
            <span className="aura-card-index">02 · Objective</span>

            <h3>Build a connected and explorable cockpit experience.</h3>

            <p>
              The prototype needed to let a viewer enter the vehicle, start
              the system, navigate the interface, change vehicle settings,
              and observe synchronized feedback throughout the cockpit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="aura-visual-break">
        <Reveal className="aura-visual-break-inner" amount={0.1}>
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="AURA Drive startup sequence"
          >
            <source
              src={auraDriveStartSequence}
              type="video/mp4"
            />
          </video>
        </Reveal>
      </section>

      <section className="aura-section">
        <Reveal className="aura-section-intro">
          <p className="aura-section-label">Experience System</p>

          <h2>
            Three connected layers form the cockpit experience.
          </h2>
        </Reveal>

        <div className="aura-system-grid">
          {systemAreas.map((area, index) => (
            <Reveal
              key={area.title}
              className={`aura-system-card aura-system-card-${index + 1}`}
              delay={index * 0.12}
            >
              <div className="aura-system-icon">
                {area.icon}
              </div>

              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="aura-section aura-architecture">
        <Reveal className="aura-section-intro aura-section-intro-wide">
          <p className="aura-section-label">
            Interaction Architecture
          </p>

          <h2>
            The experience progresses through connected vehicle states.
          </h2>
        </Reveal>

        <div className="aura-flow-map">
          {interactionFlow.map((step, index) => (
            <Reveal
              key={step.label}
              className="aura-flow-step"
              delay={index * 0.08}
            >
              <span>{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="aura-section aura-core-flow-section">
        <Reveal className="aura-section-intro">
          <p className="aura-section-label">Core Flow</p>

          <h2>
            From entering the vehicle to operating the cockpit.
          </h2>
        </Reveal>

        <div className="aura-flow-editorial">
          <Reveal className="aura-media-card aura-media-card-wide">
            <div className="aura-media-copy">
              <span className="aura-card-index">01 · Startup</span>

              <h3>A staged system-start sequence</h3>

              <p>
                The interface moves from OFF to initialization, battery
                checks, ambient-light readiness, welcome, and the home state.
                This progression establishes system status before interaction
                begins.
              </p>
            </div>

            <div className="aura-media-frame">
              <video autoPlay loop muted playsInline>
                <source
                  src={auraDriveStartSequence}
                  type="video/mp4"
                />
              </video>
            </div>
          </Reveal>

          <Reveal className="aura-media-card aura-media-card-aside" delay={0.16}>
            <div className="aura-media-frame">
              <video autoPlay loop muted playsInline>
                <source
                  src={auraDriveUIView}
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="aura-media-copy">
              <span className="aura-card-index">02 · Evaluation</span>

              <h3>A dedicated UI focus mode</h3>

              <p>
                Cluster and center-display interfaces are enlarged while the
                cockpit remains visible. This allows the HMI to be inspected
                without losing the vehicle context around it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="aura-section aura-decisions-section">
        <Reveal className="aura-section-intro">
          <p className="aura-section-label">UX Decisions</p>

          <h2>
            Decisions shaped by clarity, feedback, and driver context.
          </h2>
        </Reveal>

        <div className="aura-decision-grid">
          {uxDecisions.map((decision, index) => (
            <Reveal
              key={decision.title}
              className={`aura-decision-card aura-decision-card-${index + 1}`}
              delay={index * 0.12}
            >
              {decision.icon}

              <span className="aura-card-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{decision.title}</h3>
              <p>{decision.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="aura-section aura-final-section">
        <Reveal className="aura-section-intro aura-section-intro-large">
          <p className="aura-section-label">Final Experience</p>

          <h2>
            A live prototype designed to be explored.
          </h2>
        </Reveal>

        <Reveal className="aura-demo-card">
          <div className="aura-demo-video">
            <video autoPlay loop muted playsInline>
              <source
                src={auraDriveDemo}
                type="video/mp4"
              />
            </video>
          </div>

          <div className="aura-demo-content">
            <span>Live prototype</span>

            <h3>Enter the vehicle and test the cockpit.</h3>

            <p>
              The standalone experience allows the vehicle interaction,
              interface states, drive modes, assistant flows, and synchronized
              screen behavior to be explored directly.
            </p>

            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="aura-primary-link"
            >
              Launch Prototype ↗
            </a>
          </div>
        </Reveal>
      </section>

      <section className="aura-section aura-reflection">
        <Reveal className="aura-section-intro">
          <p className="aura-section-label">Reflection</p>

          <h2>What the project taught me.</h2>
        </Reveal>

        <div className="aura-reflection-grid">
          {reflectionItems.map((item, index) => (
            <Reveal
              key={item.label}
              className={`aura-reflection-card aura-reflection-card-${index + 1}`}
              delay={index * 0.12}
            >
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="aura-prototype-cta">
        <Reveal className="aura-prototype-cta-inner">
          <p>Interactive prototype</p>

          <h2>
            The complete cockpit experience is available to explore live.
          </h2>

          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="aura-primary-link"
          >
            Launch AURA Drive ↗
          </a>
        </Reveal>
      </section>

      <nav
        className="aura-next-project"
        aria-label="Case study navigation"
      >
        <Link
          to="/projects/kokoro"
          className="aura-next-project-link"
        >
          <span className="aura-next-project-label">
            Next Project
          </span>

          <div className="aura-next-project-main">
            <strong>Kokoro</strong>

            <span
              className="aura-next-project-arrow"
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