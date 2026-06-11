import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiCpu,
  FiMonitor,
  FiZap,
  FiNavigation,
  FiActivity,
  FiMic,
} from "react-icons/fi";

import auraDriveVideo from "../assets/videos/AuraDriveCardVideo.mp4";
import auraDriveStartSequence from "../assets/videos/AuraDriveStartSequence.mp4";
import auraDriveUIView from "../assets/videos/AuraDrive_UIView.mp4";
import auraDriveDemo from "../assets/videos/AuraDrive_Demo.mp4";

const demoUrl = "https://aura-drive-showroom.vercel.app/";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AuraDrive() {
  const scrollToOverview = () => {
    const overview = document.querySelector("#overview");

    if (overview) {
      overview.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.03]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.35]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -90]);

  return (
    <main className="aura-page">
      <section className="aura-hero">
        <motion.video
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="aura-hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={auraDriveVideo} type="video/mp4" />
        </motion.video>

        <div className="aura-hero-overlay" />

        <motion.div style={{ y: titleY }} className="aura-hero-content">
          <p className="aura-kicker">Automotive UX · HMI · 3D · React</p>

          <h1>AURA Drive</h1>

          <p>
            An interactive automotive HMI concept designed to explore how digital
            clusters, center displays, ambient lighting, drive modes, and
            assistant interactions can work together inside a modern cockpit.
          </p>

          <div className="aura-hero-actions">
            <button
              type="button"
              onClick={scrollToOverview}
              className="aura-primary-link aura-scroll-button"
            >
              View Case Study ↓
            </button>

            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="aura-primary-link aura-demo-link"
            >
              Launch Demo ↗
            </a>
          </div>
        </motion.div>
      </section>

      <section id="overview" className="aura-section aura-overview">
        <Reveal>
          <p className="aura-section-label">Overview</p>
        </Reveal>

        <div className="aura-overview-grid">
          <Reveal>
            <h2>Designing an interactive cockpit experience for automotive UX.</h2>
          </Reveal>

          <Reveal>
            <p>
              AURA Drive is a standalone interactive showroom built to demonstrate
              an end-to-end in-vehicle experience. The project combines 3D vehicle
              interaction, infotainment UI, digital cluster behavior, boot states,
              ambient lighting, and HMI-focused microinteractions.
            </p>
          </Reveal>
        </div>

        <Reveal className="aura-meta-grid">
          <div>
            <span>Duration</span>
            <strong>3 weeks</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>UX/UI Designer · Front-End Developer</strong>
          </div>

          <div>
            <span>Tools</span>
            <strong>React · Three.js · GSAP · Blender</strong>
          </div>
        </Reveal>
      </section>

      <section className="aura-section">
        <Reveal>
          <p className="aura-section-label">The Challenge</p>
          <h2 className="aura-centered-title">The Problem and Objective</h2>
        </Reveal>

        <div className="aura-card-grid">
          <Reveal className="aura-info-card">
            <h3>The Problem</h3>
            <p>
              Many automotive UX portfolios show static screens, but HMI roles
              require demonstrating how interface states, vehicle feedback, and
              cockpit interactions behave together in context.
            </p>
          </Reveal>

          <Reveal className="aura-info-card">
            <h3>The Objective</h3>
            <p>
              To create a functional interactive prototype where a recruiter can
              enter a vehicle, start the system, interact with the center display,
              and see the cluster and interior lighting respond in real time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="aura-section">
        <Reveal>
          <p className="aura-section-label">Experience System</p>
          <h2 className="aura-centered-title">
            A connected HMI experience across screens and vehicle states
          </h2>
        </Reveal>

        <div className="aura-user-grid">
          <Reveal className="aura-user-card">
            <div className="aura-user-icon">
              <FiMonitor />
            </div>
            <h3>Center Display</h3>
            <p>
              Main infotainment interface with navigation, media, phone, climate,
              drive modes, vehicle controls, and assistant flows.
            </p>
          </Reveal>

          <Reveal className="aura-user-card">
            <div className="aura-user-icon">
              <FiCpu />
            </div>
            <h3>Digital Cluster</h3>
            <p>
              Driver-facing display synchronized with the selected screen,
              including navigation, drive mode, assistant, and system states.
            </p>
          </Reveal>

          <Reveal className="aura-user-card">
            <div className="aura-user-icon">
              <FiZap />
            </div>
            <h3>Vehicle Feedback</h3>
            <p>
              Ambient lighting and welcome sequences help communicate mode
              changes, system status, and vehicle behavior.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="aura-section">
        <Reveal>
          <p className="aura-section-label">Core Flow</p>
          <h2 className="aura-centered-title">
            From vehicle entry to cockpit interaction
          </h2>
        </Reveal>

        <div className="aura-process-grid">
          <Reveal className="aura-media-card">
            <h3>Start Sequence</h3>
            <p>
              The system begins in an OFF state. After pressing START, AURA Drive
              transitions through boot, initialization, battery checks, ambient
              lighting readiness, welcome, and home states.
            </p>

            <div className="aura-media-frame">
              <video autoPlay loop muted playsInline>
                <source src={auraDriveStartSequence} type="video/mp4" />
              </video>
            </div>
          </Reveal>

          <Reveal className="aura-media-card">
            <h3>UI Focus Mode</h3>
            <p>
              A dedicated presentation mode enlarges the cluster and center
              display while keeping the vehicle interior visible, making the HMI
              interaction easier to evaluate.
            </p>

            <div className="aura-media-frame">
              <video autoPlay loop muted playsInline>
                <source src={auraDriveUIView} type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="aura-section">
        <Reveal>
          <p className="aura-section-label">UX Decisions</p>
          <h2 className="aura-centered-title">
            Designing for clarity, feedback, and vehicle context
          </h2>
        </Reveal>

        <div className="aura-decision-grid">
          <Reveal className="aura-decision-card">
            <FiNavigation />
            <h3>Navigation Context</h3>
            <p>
              Navigation updates both the center display and cluster, reducing
              duplicated information and supporting driver glanceability.
            </p>
          </Reveal>

          <Reveal className="aura-decision-card">
            <FiActivity />
            <h3>Drive Modes</h3>
            <p>
              Eco, Comfort, and Sport modes use color, motion, and lighting
              feedback to make vehicle behavior feel responsive.
            </p>
          </Reveal>

          <Reveal className="aura-decision-card">
            <FiMic />
            <h3>AURA Assistant</h3>
            <p>
              The assistant introduces a humanized interaction layer through
              listening, thinking, and speaking states.
            </p>
          </Reveal>

          <Reveal className="aura-decision-card">
            <FiCpu />
            <h3>System States</h3>
            <p>
              OFF, START, BOOT, WELCOME, and HOME states create a more realistic
              vehicle experience instead of showing the interface instantly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="aura-section aura-final-section">
        <Reveal>
          <p className="aura-section-label">Final Experience</p>
          <h2 className="aura-centered-title">Interactive Demo</h2>
        </Reveal>

        <Reveal className="aura-demo-card">
          <div className="aura-demo-video">
            <video autoPlay loop muted playsInline>
              <source src={auraDriveDemo} type="video/mp4" />
            </video>
          </div>

          <div className="aura-demo-content">
            <span>Live Prototype</span>
            <h3>Launch the interactive showroom</h3>
            <p>
              The final experience is published as a standalone web prototype so
              recruiters can test the vehicle interaction directly.
            </p>

            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="aura-primary-link"
            >
              Launch Demo ↗
            </a>
          </div>
        </Reveal>
      </section>

      <section className="aura-section aura-reflection">
        <Reveal>
          <p className="aura-section-label">Reflection</p>

          <h2>
            AURA Drive helped me connect UX design, automotive HMI thinking,
            motion, and front-end development into one interactive experience.
          </h2>

          <p>
            This project strengthened my understanding of how interface systems
            can respond to vehicle context, screen hierarchy, and user actions.
            It also gave me a stronger foundation for presenting automotive UX
            work beyond static screens.
          </p>

          <Link to="/" className="aura-primary-link">
            ← Back to Portfolio
          </Link>
        </Reveal>
      </section>
    </main>
  );
}