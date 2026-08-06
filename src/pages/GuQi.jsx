import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiCode,
  FiCompass,
  FiGrid,
  FiMessageCircle,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";

import guQiVideo from "../assets/videos/GuQi-video.mp4";

import guQiHome from "../assets/images/GU-QI-home.webp";
import guQiWireframe from "../assets/images/GU-QI-wireframe.webp";
import guQiResponsive from "../assets/images/GU-QI-responsive.webp";
import guQiCorepages from "../assets/images/GU-QI-corepages.webp";

const liveSiteUrl = "https://guqi-website.vercel.app/";
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
    value: "1 week",
  },
  {
    label: "Platform",
    value: "Responsive website",
  },
  {
    label: "Tools",
    value: "Figma · React · Vite · CSS",
  },
];

const experiencePriorities = [
  {
    icon: <FiCompass />,
    title: "Service Discovery",
    description:
      "Therapies are presented as the primary path so users can quickly understand what the center offers.",
  },
  {
    icon: <FiGrid />,
    title: "Content Hierarchy",
    description:
      "Therapies, courses, philosophy, and contact information are separated into clear content layers.",
  },
  {
    icon: <FiMessageCircle />,
    title: "Direct Booking",
    description:
      "WhatsApp is positioned as the fastest way to ask questions and schedule an evaluation.",
  },
];

const informationFlow = [
  {
    label: "01",
    title: "Arrival",
    description:
      "The hero introduces the brand and communicates a calm, premium tone.",
  },
  {
    label: "02",
    title: "Understand",
    description:
      "Users learn what GU-QI offers and how the wellness approach works.",
  },
  {
    label: "03",
    title: "Explore",
    description:
      "Therapies and courses can be reviewed through structured cards and detail views.",
  },
  {
    label: "04",
    title: "Evaluate",
    description:
      "Users compare services and identify the most relevant option.",
  },
  {
    label: "05",
    title: "Contact",
    description:
      "Calls to action connect users directly with the center through WhatsApp.",
  },
];

const designDecisions = [
  {
    icon: <FiGrid />,
    title: "Therapies as the primary content",
    description:
      "Therapies receive the strongest visual priority because they represent the main reason users visit the website.",
  },
  {
    icon: <FiMessageCircle />,
    title: "WhatsApp as the conversion path",
    description:
      "The booking flow avoids unnecessary forms and uses the communication channel already familiar to the client and audience.",
  },
  {
    icon: <FiMonitor />,
    title: "Structured content without visual overload",
    description:
      "Cards and detail views divide complex wellness information into smaller, easier-to-scan sections.",
  },
  {
    icon: <FiSmartphone />,
    title: "Responsive behavior from the beginning",
    description:
      "Navigation, service content, and calls to action were designed to remain clear across desktop, tablet, and mobile.",
  },
];

const reflectionItems = [
  {
    label: "Client Communication",
    title: "Designing around real content and priorities",
    description:
      "The project strengthened my ability to translate a client’s services, terminology, and business goals into a clear digital structure.",
  },
  {
    label: "Responsive Systems",
    title: "Maintaining hierarchy across devices",
    description:
      "Adapting the same content to desktop, tablet, and mobile reinforced the importance of flexible components and intentional content order.",
  },
  {
    label: "Next Iteration",
    title: "Validate service comprehension and conversion",
    description:
      "A future iteration would test whether users understand the therapies, compare services confidently, and reach the booking action without hesitation.",
  },
];

export default function GuQi() {
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
    [1, 0.28],
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.2],
    reduceMotion ? [0, 0] : [0, -86],
  );

  const scrollToOverview = () => {
    document.getElementById("guqi-overview")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <main className="guqi-page">
      <section className="guqi-hero">
        <motion.video
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
          className="guqi-hero-video"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src={guQiVideo} type="video/mp4" />
        </motion.video>

        <div className="guqi-hero-overlay" />
        <div className="guqi-hero-grid" />

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 110,
                  scale: 0.94,
                  filter: "blur(18px)",
                }
          }
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: reduceMotion ? 0 : 1.25,
            delay: reduceMotion ? 0 : 0.25,
            ease: premiumEase,
          }}
          style={{ y: titleY }}
          className="guqi-hero-content"
        >
          <p className="guqi-kicker">
            Client Project · UX/UI · Responsive Web · React
          </p>

          <h1>GU-QI</h1>

          <p className="guqi-hero-copy">
            Designing a calm and premium wellness website that helps users
            understand therapies, explore courses, and reach booking with less
            friction.
          </p>

          <div className="guqi-hero-actions">
            <button
              type="button"
              onClick={scrollToOverview}
              className="guqi-primary-link guqi-scroll-button"
            >
              Explore Case Study ↓
            </button>

            <a
              href={liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="guqi-secondary-link"
            >
              Visit Live Website ↗
            </a>
          </div>
        </motion.div>
      </section>

      <section
        id="guqi-overview"
        className="guqi-section guqi-overview-section"
      >
        <div className="guqi-overview-grid">
          <Reveal className="guqi-overview-copy">
            <p className="guqi-section-label">Overview</p>

            <h2>
              A clearer digital experience for an integrative wellness center.
            </h2>

            <p>
              GU-QI is a responsive Spanish-language website designed for a
              Mexican wellness client offering therapies, courses, and
              integrative health services.
            </p>

            <p>
              The project focused on improving service discovery, content
              hierarchy, responsive navigation, brand perception, and direct
              access to booking through WhatsApp.
            </p>
          </Reveal>

          <Reveal className="guqi-meta-grid" delay={0.18}>
            {projectFacts.map((fact) => (
              <article
                key={fact.label}
                className="guqi-meta-card"
              >
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="guqi-section guqi-narrative-section">
        <Reveal className="guqi-section-heading guqi-section-heading-large">
          <p className="guqi-section-label">The Challenge</p>

          <h2>
            Turning a limited website into a structured service experience.
          </h2>
        </Reveal>

        <div className="guqi-challenge-layout">
          <Reveal className="guqi-info-card guqi-info-card-featured">
            <span className="guqi-card-index">01 · Problem</span>

            <h3>The original structure did not explain the offer clearly.</h3>

            <p>
              Therapies, courses, and the center’s philosophy lacked a clear
              content hierarchy, making it harder for users to understand the
              services and identify the next action.
            </p>
          </Reveal>

          <Reveal className="guqi-info-card" delay={0.18}>
            <span className="guqi-card-index">02 · Objective</span>

            <h3>Create trust, clarity, and a direct path to contact.</h3>

            <p>
              The redesigned experience needed to feel professional and calm
              while guiding users from service discovery to evaluation booking
              across desktop and mobile.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="guqi-visual-break">
        <Reveal className="guqi-visual-break-inner" amount={0.1}>
          <img
            src={guQiHome}
            alt="GU-QI final home page"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </section>

      <section className="guqi-section">
        <Reveal className="guqi-section-heading">
          <p className="guqi-section-label">Discovery</p>

          <h2>
            Research helped define what the website needed to prioritize.
          </h2>
        </Reveal>

        <div className="guqi-discovery-layout">
          <Reveal className="guqi-info-card guqi-discovery-main">
            <span className="guqi-card-index">Competitive review</span>

            <h3>
              The category often lacked strong hierarchy and differentiation.
            </h3>

            <p>
              Competitor websites commonly used simple navigation and direct
              WhatsApp contact, but many had weak visual systems, dense content,
              or inconsistent responsive presentation.
            </p>
          </Reveal>

          <Reveal className="guqi-info-card" delay={0.18}>
            <span className="guqi-card-index">Prioritization</span>

            <h3>Therapies became the primary content path.</h3>

            <p>
              Courses remained visible as a secondary offer, while WhatsApp was
              selected as the main conversion channel because it matched the
              client’s existing communication workflow.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="guqi-section">
        <Reveal className="guqi-section-heading">
          <p className="guqi-section-label">Experience Priorities</p>

          <h2>
            The website was structured around understanding, exploration, and
            contact.
          </h2>
        </Reveal>

        <div className="guqi-priorities-layout">
          {experiencePriorities.map((priority, index) => (
            <Reveal
              key={priority.title}
              className={`guqi-priority-card guqi-priority-card-${index + 1}`}
              delay={index * 0.16}
            >
              <div className="guqi-priority-icon">
                {priority.icon}
              </div>

              <h3>{priority.title}</h3>
              <p>{priority.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="guqi-section guqi-wide-section">
        <Reveal className="guqi-section-heading guqi-section-heading-large">
          <p className="guqi-section-label">
            Information Architecture
          </p>

          <h2>
            A simple path from brand introduction to booking.
          </h2>
        </Reveal>

        <div className="guqi-flow-map">
          {informationFlow.map((step, index) => (
            <Reveal
              key={step.label}
              className="guqi-flow-step"
              delay={index * 0.12}
            >
              <span>{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="guqi-section guqi-wide-section guqi-image-story">
        <Reveal className="guqi-section-heading">
          <p className="guqi-section-label">Wireframes</p>

          <h2>
            Structuring the experience before defining the visual system.
          </h2>

          <p className="guqi-section-intro">
            Early layouts focused on content priority, section order, therapy
            discovery, course visibility, and clear calls to action.
          </p>
        </Reveal>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -90,
                  scale: 0.965,
                  filter: "blur(14px)",
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.2,
            margin: "0px 0px -10% 0px",
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.95,
            ease: premiumEase,
          }}
          className="guqi-image-card guqi-image-card-full"
        >
          <img
            src={guQiWireframe}
            alt="GU-QI website wireframe exploration"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </section>

      <section className="guqi-section guqi-wide-section guqi-image-story guqi-image-story-offset">
        <Reveal className="guqi-section-heading">
          <p className="guqi-section-label">Responsive Design</p>

          <h2>
            The same hierarchy adapted across desktop, tablet, and mobile.
          </h2>

          <p className="guqi-section-intro">
            Navigation, service information, visual rhythm, and booking actions
            were adjusted to remain understandable at every screen size.
          </p>
        </Reveal>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 90,
                  scale: 0.965,
                  filter: "blur(14px)",
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.2,
            margin: "0px 0px -10% 0px",
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.95,
            ease: premiumEase,
          }}
          className="guqi-image-card guqi-image-card-full"
        >
          <img
            src={guQiResponsive}
            alt="GU-QI responsive desktop, tablet, and mobile layouts"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </section>

      <section className="guqi-section guqi-wide-section guqi-image-story">
        <Reveal className="guqi-section-heading">
          <p className="guqi-section-label">Core Pages</p>

          <h2>
            A connected ecosystem for therapies, courses, and brand content.
          </h2>

          <p className="guqi-section-intro">
            Each page supports a specific user need while maintaining one
            consistent visual and interaction system.
          </p>
        </Reveal>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 96,
                  scale: 0.965,
                  filter: "blur(14px)",
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
            amount: 0.2,
            margin: "0px 0px -10% 0px",
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.95,
            ease: premiumEase,
          }}
          className="guqi-image-card guqi-image-card-full"
        >
          <img
            src={guQiCorepages}
            alt="GU-QI core website pages"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </section>

      <section className="guqi-section">
        <Reveal className="guqi-section-heading">
          <p className="guqi-section-label">UX Decisions</p>

          <h2>
            Decisions focused on clarity, trust, and low-friction contact.
          </h2>
        </Reveal>

        <div className="guqi-decision-grid">
          {designDecisions.map((decision, index) => (
            <Reveal
              key={decision.title}
              className={`guqi-decision-card guqi-decision-card-${index + 1}`}
              delay={index * 0.14}
            >
              <div className="guqi-decision-icon">
                {decision.icon}
              </div>

              <h3>{decision.title}</h3>
              <p>{decision.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="guqi-section guqi-wide-section guqi-final-section">
        <Reveal className="guqi-section-heading guqi-section-heading-large">
          <p className="guqi-section-label">Final Website</p>

          <h2>
            A calm, premium, and functional client experience.
          </h2>
        </Reveal>

        <Reveal className="guqi-final-card">
          <div className="guqi-final-media">
            <img
              src={guQiHome}
              alt="GU-QI final home page"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="guqi-final-content">
            <span className="guqi-card-index">Live client website</span>

            <h3>A complete responsive service platform.</h3>

            <p>
              The final website includes a video hero, therapy catalog, course
              information, philosophy content, responsive navigation, contact
              sections, and direct WhatsApp booking.
            </p>

            <ul className="guqi-list">
              <li>Responsive layouts across desktop, tablet, and mobile.</li>
              <li>Structured therapy and course information.</li>
              <li>WhatsApp integration for direct booking.</li>
              <li>Reusable components for scalable content management.</li>
            </ul>

            <a
              href={liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="guqi-primary-link"
            >
              Visit Live Website ↗
            </a>
          </div>
        </Reveal>
      </section>

      <section className="guqi-section">
        <Reveal className="guqi-section-heading">
          <p className="guqi-section-label">Development</p>

          <h2>
            Design decisions were carried through to implementation.
          </h2>
        </Reveal>

        <div className="guqi-development-layout">
          <Reveal className="guqi-info-card guqi-development-main">
            <FiCode className="guqi-card-icon" />

            <span className="guqi-card-index">Front-End Architecture</span>

            <h3>Reusable React components support consistency.</h3>

            <p>
              The site uses React, Vite, CSS, and React Router with reusable
              structures for navigation, cards, content sections, and
              responsive layouts.
            </p>
          </Reveal>

          <Reveal className="guqi-info-card" delay={0.18}>
            <FiMonitor className="guqi-card-icon" />

            <span className="guqi-card-index">Interaction System</span>

            <h3>
              Content remains accessible without unnecessary complexity.
            </h3>

            <p>
              Structured detail views and direct calls to action help users
              explore information while keeping the path to booking visible.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="guqi-section guqi-reflection">
        <Reveal className="guqi-section-heading">
          <p className="guqi-section-label">Reflection</p>

          <h2>What the client project taught me.</h2>
        </Reveal>

        <div className="guqi-reflection-grid">
          {reflectionItems.map((item, index) => (
            <Reveal
              key={item.label}
              className={`guqi-reflection-card guqi-reflection-card-${index + 1}`}
              delay={index * 0.16}
            >
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="guqi-live-cta">
        <Reveal className="guqi-live-cta-inner">
          <p>Live client website</p>

          <h2>
            The complete responsive experience is available to explore.
          </h2>

          <a
            href={liveSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="guqi-primary-link"
          >
            Visit GU-QI ↗
          </a>
        </Reveal>
      </section>

      <nav
        className="guqi-next-project"
        aria-label="Case study navigation"
      >
        <Link
          to="/projects/beyond-the-shadows"
          className="guqi-next-project-link"
        >
          <span className="guqi-next-project-label">
            Next Project
          </span>

          <div className="guqi-next-project-main">
            <strong>Beyond The Shadows</strong>

            <span
              className="guqi-next-project-arrow"
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