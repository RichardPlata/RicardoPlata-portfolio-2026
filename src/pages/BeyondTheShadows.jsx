import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FiEye, FiMonitor, FiVideo } from "react-icons/fi";

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

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: "easeOut" },
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

function BeforeAfterBlock({
  title,
  description,
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}) {
  return (
    <Reveal className="bts-before-after">
      <div className="bts-ba-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="bts-ba-media">
        <div className="bts-image-frame">
          <img src={beforeImage} alt={beforeAlt} />
          <small>Before</small>
        </div>

        <div className="bts-image-frame">
          <img src={afterImage} alt={afterAlt} />
          <small>After</small>
        </div>
      </div>
    </Reveal>
  );
}

export default function BeyondTheShadows() {
  const scrollToOverview = () => {
    window.history.replaceState(null, "", window.location.pathname);

    const overview = document.querySelector("#overview");

    if (overview) {
      overview.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.32]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -95]);

  return (
    <main className="bts-page">
      <section className="bts-hero">
        <motion.video
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="bts-hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={btsVideo} type="video/mp4" />
        </motion.video>

        <div className="bts-hero-overlay" />
        <div className="bts-fog-layer" />
        <div className="bts-noise-layer" />

        <motion.div style={{ y: titleY }} className="bts-hero-content">
          <p className="bts-kicker">
            Game UI · Horror UX · Interface Redesign
          </p>

          <h1>Beyond The Shadows</h1>

          <p>
            A horror game UI redesign focused on preserving immersion, improving
            readability, and aligning interface feedback with a dark narrative
            atmosphere.
          </p>

          <button
            type="button"
            onClick={scrollToOverview}
            className="bts-primary-link bts-scroll-button"
          >
            View Case Study ↓
          </button>
        </motion.div>
      </section>

      <section id="overview" className="bts-section">
        <Reveal>
          <p className="bts-section-label">Overview</p>
        </Reveal>

        <div className="bts-overview-grid">
          <Reveal>
            <h2>Redesigning horror UI without breaking immersion.</h2>
          </Reveal>

          <Reveal>
            <p>
              Beyond The Shadows is a narrative horror game developed in Unreal
              Engine 5. This case study focuses on redesigning its interface to
              improve HUD clarity, pause-state continuity, visual consistency,
              and emotional tension during gameplay.
            </p>
          </Reveal>
        </div>

        <Reveal className="bts-meta-grid">
          <div>
            <span>Duration</span>
            <strong>3 months</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>UX/UI Designer</strong>
          </div>

          <div>
            <span>Tools</span>
            <strong>Figma · Photoshop · Blender · UE5</strong>
          </div>
        </Reveal>
      </section>

      <section className="bts-section">
        <Reveal>
          <p className="bts-section-label">The Challenge</p>
          <h2 className="bts-centered-title">The Problem and Objective</h2>
        </Reveal>

        <div className="bts-card-grid">
          <Reveal className="bts-info-card">
            <h3>The Problem</h3>
            <p>
              The original interface introduced visual elements that competed
              with the game’s horror atmosphere, reducing immersion and making
              key gameplay states feel visually disconnected from the world.
            </p>
          </Reveal>

          <Reveal className="bts-info-card">
            <h3>The Objective</h3>
            <p>
              To redesign the UI so it supports the game’s tone while improving
              damage feedback, pause menu clarity, main screen hierarchy, and
              uninterrupted player immersion.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bts-section">
        <Reveal>
          <p className="bts-section-label">Audience</p>
          <h2 className="bts-centered-title">Target Players</h2>
        </Reveal>

        <div className="bts-user-grid">
          <Reveal className="bts-user-card">
            <div className="bts-user-icon">
              <FiEye />
            </div>

            <h3>Teen Players</h3>
            <p>
              Players from 15 years old who enjoy atmospheric, narrative-driven
              horror experiences.
            </p>
          </Reveal>

          <Reveal className="bts-user-card">
            <div className="bts-user-icon">
              <FiMonitor />
            </div>

            <h3>Horror Game Lovers</h3>
            <p>
              Players who value tension, environmental storytelling, and
              interface systems that do not interrupt immersion.
            </p>
          </Reveal>

          <Reveal className="bts-user-card">
            <div className="bts-user-icon">
              <FiVideo />
            </div>

            <h3>Streamers</h3>
            <p>
              Content creators who need readable gameplay states, clear visual
              feedback, and cinematic presentation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bts-section bts-wide-section">
        <Reveal>
          <p className="bts-section-label">Interface Redesign</p>
          <h2 className="bts-centered-title">Before & After</h2>

          <p className="bts-section-intro">
            The redesign focused on gameplay moments where the interface
            affected immersion, readability, and emotional continuity.
          </p>
        </Reveal>

        <div className="bts-before-after-stack">
          <BeforeAfterBlock
            title="HUD Interaction Screen"
            description="Damage feedback was pushed toward the screen edges to reduce central visual noise while still communicating danger."
            beforeImage={hudBefore}
            afterImage={hudAfter}
            beforeAlt="HUD before redesign"
            afterAlt="HUD after redesign"
          />

          <BeforeAfterBlock
            title="Pause Menu"
            description="The pause menu was redesigned as a darker semi-transparent layer to keep the player visually connected to the environment."
            beforeImage={pauseBefore}
            afterImage={pauseAfter}
            beforeAlt="Pause menu before redesign"
            afterAlt="Pause menu after redesign"
          />

          <BeforeAfterBlock
            title="Main Screen"
            description="The main screen was simplified to improve hierarchy, reduce decorative noise, and create a stronger atmospheric first impression."
            beforeImage={mainScreenBefore}
            afterImage={mainScreenAfter}
            beforeAlt="Main screen before redesign"
            afterAlt="Main screen after redesign"
          />
        </div>
      </section>

      <section className="bts-section bts-wide-section">
        <Reveal>
          <p className="bts-section-label">Benchmarking</p>
          <h2 className="bts-centered-title">Visual & Genre References</h2>
        </Reveal>

        <div className="bts-benchmark-grid">
          <Reveal className="bts-benchmark-card">
            <div className="bts-reference-image">
              <img
                src={littleNightmaresReference}
                alt="Little Nightmares reference"
              />
            </div>

            <span className="bts-reference-title">Little Nightmares</span>

            <h3>Minimal HUD presence</h3>

            <p>
              Inspired a subtler approach to damage feedback and interaction
              prompts.
            </p>
          </Reveal>

          <Reveal className="bts-benchmark-card">
            <div className="bts-reference-image">
              <img src={aliceReference} alt="Alice Madness Returns reference" />
            </div>

            <span className="bts-reference-title">
              Alice Madness Returns
            </span>

            <h3>Stylized visual consistency</h3>

            <p>
              Reinforced the need for UI elements to feel emotionally aligned
              with the narrative tone.
            </p>
          </Reveal>

          <Reveal className="bts-benchmark-card">
            <div className="bts-reference-image">
              <img src={limboReference} alt="Limbo reference" />
            </div>

            <span className="bts-reference-title">Limbo</span>

            <h3>Silhouette and clarity</h3>

            <p>
              Encouraged stronger contrast, simpler menu states, and reduced
              interface decoration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bts-section">
        <Reveal>
          <p className="bts-section-label">UX Decisions</p>

          <h2 className="bts-centered-title">
            Balancing atmosphere with functional clarity
          </h2>
        </Reveal>

        <div className="bts-decision-grid">
          <Reveal className="bts-decision-card">
            <h3>Peripheral Damage Feedback</h3>

            <p>
              Red visual feedback was moved away from the center of the screen
              to preserve gameplay visibility.
            </p>
          </Reveal>

          <Reveal className="bts-decision-card">
            <h3>Transparent Pause State</h3>

            <p>
              The pause menu keeps part of the environment visible, reducing
              emotional disconnection.
            </p>
          </Reveal>

          <Reveal className="bts-decision-card">
            <h3>Simplified Menu Hierarchy</h3>

            <p>
              Main menu options were reorganized to improve scanning while
              preserving atmosphere.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bts-section">
        <Reveal>
          <p className="bts-section-label">Final Result</p>
          <h2 className="bts-centered-title">Prototype & Trailer</h2>
        </Reveal>

        <Reveal className="bts-trailer-card">
          <div className="bts-trailer-video">
            <video autoPlay loop muted playsInline>
              <source src={beyondTrailerVideo} type="video/mp4" />
            </video>
          </div>

          <div className="bts-trailer-content">
            <span>Final Showcase</span>

            <h3>A darker interface language for horror immersion.</h3>

            <p>
              The redesign uses cold blue shadows, restrained red accents, deep
              blacks, and translucent surfaces to support tension without
              sacrificing readability.
            </p>

            <a
              href="https://youtu.be/UHi83En1RUQ?si=ox82eVjgdGgQxZif"
              className="bts-primary-link"
              target="_blank"
              rel="noreferrer"
            >
              Watch Trailer ↗
            </a>
          </div>
        </Reveal>
      </section>

      <section className="bts-section bts-reflection">
        <Reveal>
          <p className="bts-section-label">Reflection</p>

          <h2>
            This redesign strengthened my understanding of immersive UI systems
            in horror games.
          </h2>

          <p>
            Balancing atmospheric storytelling with functional clarity required
            careful attention to contrast, feedback hierarchy, and player-state
            communication.
          </p>

          <Link to="/" className="bts-primary-link">
            ← Back to Portfolio
          </Link>
        </Reveal>
      </section>
    </main>
  );
}