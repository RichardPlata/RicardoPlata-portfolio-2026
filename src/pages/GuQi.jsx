import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import guQiVideo from "../assets/videos/GuQi-video.mp4";

import guQiHome from "../assets/images/GU-QI-home.webp";
import guQiWireframe from "../assets/images/GU-QI-wireframe.webp";
import guQiResponsive from "../assets/images/GU-QI-responsive.webp";
import guQiCorepages from "../assets/images/GU-QI-corepages.webp";

const liveSiteUrl = "https://guqi-website.vercel.app/";

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

export default function GuQi() {
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
    <main className="guqi-page">
      <section className="guqi-hero">
        <motion.video
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="guqi-hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={guQiVideo} type="video/mp4" />
        </motion.video>

        <div className="guqi-hero-overlay" />

        <motion.div style={{ y: titleY }} className="guqi-hero-content">
          <p className="guqi-kicker">
            Client Project · UX/UI · Web Design · React
          </p>

          <h1>GU-QI</h1>

          <p>
            A premium wellness website designed for an integrative health center,
            focused on service discovery, responsive navigation, therapy
            information, course promotion, and WhatsApp-based booking.
          </p>

          <div className="guqi-hero-actions">
            <button
              type="button"
              onClick={scrollToOverview}
              className="guqi-primary-link guqi-scroll-button"
            >
              View Case Study ↓
            </button>

            <a
              href={liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="guqi-primary-link"
            >
              Visit Live Website ↗
            </a>
          </div>
        </motion.div>
      </section>

      <section id="overview" className="guqi-section guqi-overview">
        <Reveal>
          <p className="guqi-section-label">Overview</p>
        </Reveal>

        <div className="guqi-overview-grid">
          <Reveal>
            <h2>
              Designing a premium digital experience for an integrative wellness
              brand.
            </h2>
          </Reveal>

          <Reveal>
            <p>
              GU-QI needed a modern Spanish-language website for a Mexican
              wellness client, designed to communicate trust, clarity, and
              calmness while helping users understand therapies, explore courses,
              and contact the center easily from any device.
            </p>
          </Reveal>
        </div>

        <Reveal className="guqi-meta-grid">
          <div>
            <span>Duration</span>
            <strong>1 week</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>UX/UI Designer · Frontend</strong>
          </div>

          <div>
            <span>Tools</span>
            <strong>Figma · React · Vite · CSS</strong>
          </div>
        </Reveal>
      </section>

      <section className="guqi-section">
        <Reveal>
          <p className="guqi-section-label">The Challenge</p>
          <h2 className="guqi-centered-title">
            From a limited website to a clearer service experience
          </h2>
        </Reveal>

        <div className="guqi-card-grid">
          <Reveal className="guqi-info-card">
            <h3>The Problem</h3>
            <p>
              The previous website had limited structure, unclear hierarchy, and
              did not fully communicate the value of GU-QI’s therapies, courses,
              and wellness philosophy.
            </p>
          </Reveal>

          <Reveal className="guqi-info-card">
            <h3>The Objective</h3>
            <p>
              Create a premium, responsive website that makes the brand feel more
              professional, improves navigation, and guides users toward booking
              an evaluation through WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="guqi-section">
        <Reveal>
          <p className="guqi-section-label">Research</p>
          <h2 className="guqi-centered-title">
            Discovery, competitors and prioritization
          </h2>
        </Reveal>

        <div className="guqi-card-grid">
          <Reveal className="guqi-info-card">
            <h3>Key Findings</h3>
            <p>
              Competitors had simple navigation and direct WhatsApp contact, but
              many lacked a premium visual identity, clear content hierarchy, or
              modern responsive presentation.
            </p>
          </Reveal>

          <Reveal className="guqi-info-card">
            <h3>Product Decisions</h3>
            <p>
              Therapies became the main content priority, while courses were
              positioned as a secondary offer. WhatsApp was prioritized as the
              fastest contact and booking channel.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="guqi-section">
        <Reveal>
          <p className="guqi-section-label">Wireframes</p>
          <h2 className="guqi-centered-title">
            Structuring the website experience
          </h2>
        </Reveal>

        <Reveal className="guqi-image-card">
          <img src={guQiWireframe} alt="GU-QI wireframe exploration" />
        </Reveal>
      </section>

      <section className="guqi-section">
        <Reveal>
          <p className="guqi-section-label">Responsive Design</p>
          <h2 className="guqi-centered-title">
            Designed across desktop, tablet and mobile
          </h2>
        </Reveal>

        <Reveal className="guqi-image-card">
          <img src={guQiResponsive} alt="GU-QI responsive layouts" />
        </Reveal>
      </section>

      <section className="guqi-section">
        <Reveal>
          <p className="guqi-section-label">Core Pages</p>
          <h2 className="guqi-centered-title">A complete website ecosystem</h2>
        </Reveal>

        <Reveal className="guqi-image-card">
          <img src={guQiCorepages} alt="GU-QI core pages" />
        </Reveal>
      </section>

      <section className="guqi-section">
        <Reveal>
          <p className="guqi-section-label">Final Website</p>
          <h2 className="guqi-centered-title">
            A calm, premium and functional interface
          </h2>
        </Reveal>

        <div className="guqi-final-grid">
          <Reveal className="guqi-image-card">
            <img src={guQiHome} alt="GU-QI home page" />
          </Reveal>

          <Reveal className="guqi-info-card">
            <h3>Final Solution</h3>
            <p>
              The final website includes a video hero, therapy catalog, therapy
              modals, course modals, philosophy section, responsive navigation,
              contact form, footer, and WhatsApp booking flow.
            </p>

            <ul className="guqi-list">
              <li>Responsive layout for desktop, tablet and mobile.</li>
              <li>Therapy and course information organized through modals.</li>
              <li>WhatsApp integration for faster booking.</li>
              <li>Reusable React components and scalable content structure.</li>
            </ul>

            <a
              href={liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="guqi-primary-link"
            >
              Visit Live Website ↗
            </a>
          </Reveal>
        </div>
      </section>

      <section className="guqi-section">
        <Reveal>
          <p className="guqi-section-label">Development</p>
          <h2 className="guqi-centered-title">
            Built with React and optimized for production
          </h2>
        </Reveal>

        <div className="guqi-card-grid">
          <Reveal className="guqi-info-card">
            <h3>Frontend Architecture</h3>
            <p>
              The project was built with React, Vite, CSS and React Router,
              using reusable components for cards, modals, navigation, footer,
              and page sections.
            </p>
          </Reveal>

          <Reveal className="guqi-info-card">
            <h3>Interaction System</h3>
            <p>
              Modals help users explore content without leaving the main page,
              while WhatsApp CTAs reduce friction and make booking more direct.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="guqi-section guqi-reflection">
        <Reveal>
          <p className="guqi-section-label">Reflection</p>

          <h2>
            This project helped me connect UX strategy, visual identity and
            frontend implementation within a real client website.
          </h2>

          <p>
            GU-QI strengthened my ability to work with real content, prioritize
            features, create responsive systems, and translate a wellness brand
            into a premium digital experience.
          </p>

          <Link to="/" className="guqi-primary-link">
            ← Back to Portfolio
          </Link>
        </Reveal>
      </section>
    </main>
  );
}