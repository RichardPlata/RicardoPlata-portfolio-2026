import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FiMonitor, FiShoppingBag, FiVideo } from "react-icons/fi";

import digitalVaultVideo from "../assets/videos/DigitalVaultCardVideo.mp4";

import lowFidelityVideo from "../assets/videos/LowFidelity.mp4";
import highFidelityVideo from "../assets/videos/HighFidelity.mp4";
import finalPrototypeVideo from "../assets/videos/HighFidelityVideo.mp4";

import steamImage from "../assets/images/SteamImage.jpg";
import amazonReference from "../assets/images/AmazonReference.png";
import googleShoppingReference from "../assets/images/GoogleShoppingReference.png";

import productListingStructure from "../assets/images/Product Listing Structure.webp";
import focusedPurchaseHierarchy from "../assets/images/Focused Purchase Hierarchy.webp";
import membershipSubscriptionSystem from "../assets/images/Membership & Subscription System.webp";
import centralizedUserManagement from "../assets/images/Centralized User Management.webp";

import typographyDigitalVault from "../assets/images/TypographyDigitalVault.png";
import iconographyDigitalVault from "../assets/images/IconographyDigitalVault.png";

import cartScreen from "../assets/images/CartScreen.webp";
import thankYouScreen from "../assets/images/ThankYouScreen.png";

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

export default function DigitalVault() {
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

  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.03]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.35]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -90]);

  return (
    <main className="digital-vault-page">
      <section className="dv-hero">
        <motion.video
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="dv-hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={digitalVaultVideo} type="video/mp4" />
        </motion.video>

        <div className="dv-hero-overlay" />

        <motion.div style={{ y: titleY }} className="dv-hero-content">
          <p className="dv-kicker">E-commerce · UX/UI · Marketing</p>

          <h1>Digital Vault</h1>

          <p>
            A gaming-focused e-commerce platform designed to make product
            discovery clearer, faster, and visually connected to gaming culture.
          </p>

          <button
            type="button"
            onClick={scrollToOverview}
            className="dv-primary-link dv-scroll-button"
          >
            View Case Study ↓
          </button>
        </motion.div>
      </section>

      <section id="overview" className="dv-section dv-overview">
        <Reveal>
          <p className="dv-section-label">Overview</p>
        </Reveal>

        <div className="dv-overview-grid">
          <Reveal>
            <h2>Designing a clearer marketplace for digital-native gamers.</h2>
          </Reveal>

          <Reveal>
            <p>
              Digital Vault is a concept e-commerce platform created to explore
              how gaming products can be presented with stronger hierarchy,
              cleaner navigation, and a more immersive visual identity.
            </p>
          </Reveal>
        </div>

        <Reveal className="dv-meta-grid">
          <div>
            <span>Duration</span>
            <strong>4 weeks</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>UX/UI Designer</strong>
          </div>

          <div>
            <span>Tools</span>
            <strong>Figma · Photoshop · Miro</strong>
          </div>
        </Reveal>
      </section>

      <section className="dv-section">
        <Reveal>
          <p className="dv-section-label">The Challenge</p>
          <h2 className="dv-centered-title">The Problem and Objective</h2>
        </Reveal>

        <div className="dv-card-grid">
          <Reveal className="dv-info-card">
            <h3>The Problem</h3>
            <p>
              Many gaming marketplaces expose users to dense layouts, multiple
              promotions, repeated categories, and competing visual elements.
            </p>
          </Reveal>

          <Reveal className="dv-info-card">
            <h3>The Objective</h3>
            <p>
              To design a marketplace experience that feels immersive and
              visually connected to gaming, while keeping the structure easy to
              scan, navigate, and understand.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="dv-section">
        <Reveal>
          <p className="dv-section-label">Audience</p>
          <h2 className="dv-centered-title">Target Users</h2>
        </Reveal>

        <div className="dv-user-grid">
          <Reveal className="dv-user-card">
            <div className="dv-user-icon">
              <FiMonitor />
            </div>
            <h3>Core Gamers</h3>
            <p>
              Users who frequently browse games, compare products, and expect
              clear filters, categories, and platform information.
            </p>
          </Reveal>

          <Reveal className="dv-user-card">
            <div className="dv-user-icon">
              <FiShoppingBag />
            </div>
            <h3>Casual Buyers</h3>
            <p>
              Users who need a simple browsing experience, strong visual cues,
              and a purchase flow that does not feel intimidating.
            </p>
          </Reveal>

          <Reveal className="dv-user-card">
            <div className="dv-user-icon">
              <FiVideo />
            </div>
            <h3>Content Creators</h3>
            <p>
              Users who browse trends, new releases, and visually engaging
              product categories for content or setup inspiration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="dv-section">
        <Reveal>
          <p className="dv-section-label">Research</p>
          <h2 className="dv-centered-title">
            Market Research & Competitive Analysis
          </h2>
        </Reveal>

        <div className="dv-research-grid">
          <Reveal className="dv-research-card">
            <div className="dv-reference-image">
              <img src={steamImage} alt="Steam interface reference" />
            </div>
            <div>
              <span className="dv-mini-label">Benchmark</span>
              <h3>Steam</h3>
              <p>
                Strong category segmentation and personalized recommendations,
                but the interface can become visually dense.
              </p>
            </div>
          </Reveal>

          <Reveal className="dv-research-card">
            <div className="dv-reference-image">
              <img src={amazonReference} alt="Amazon interface reference" />
            </div>
            <div>
              <span className="dv-mini-label">Benchmark</span>
              <h3>Amazon</h3>
              <p>
                Effective checkout patterns and trust signals, but the
                experience can feel visually cluttered.
              </p>
            </div>
          </Reveal>

          <Reveal className="dv-research-card">
            <div className="dv-reference-image">
              <img src={googleShoppingReference} alt="Google Shopping reference" />
            </div>
            <div>
              <span className="dv-mini-label">Benchmark</span>
              <h3>Google Shopping</h3>
              <p>
                Useful for comparison and purchase intent, but limited in
                immersive branding and emotional product storytelling.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="dv-section">
        <Reveal>
          <p className="dv-section-label">Process</p>
          <h2 className="dv-centered-title">From Wireframe to High Fidelity</h2>
        </Reveal>

        <div className="dv-process-grid dv-process-grid-two">
          <Reveal className="dv-media-card">
            <h3>Low Fidelity</h3>
            <p>
              Early wireframes focused on page structure, navigation behavior,
              product grouping, and browsing rhythm.
            </p>

            <div className="dv-media-frame dv-process-media">
              <video autoPlay loop muted playsInline>
                <source src={lowFidelityVideo} type="video/mp4" />
              </video>
            </div>
          </Reveal>

          <Reveal className="dv-media-card">
            <h3>High Fidelity</h3>
            <p>
              The final homepage applies hierarchy, dark surfaces, product
              imagery, and purple accents.
            </p>

            <div className="dv-media-frame dv-process-media">
              <video autoPlay loop muted playsInline>
                <source src={highFidelityVideo} type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="dv-section">
        <Reveal>
          <p className="dv-section-label">UX Decisions</p>
          <h2 className="dv-centered-title">
            Designing for clarity and purchase confidence
          </h2>
        </Reveal>

        <div className="dv-decision-grid">
          <Reveal className="dv-decision-card">
            <div className="dv-image-frame dv-decision-image">
              <img src={productListingStructure} alt="Product listing structure" />
            </div>
            <h3>Content-Driven Product Discovery</h3>
            <p>
              The marketplace experience was structured around visually
              scannable product groups.
            </p>
          </Reveal>

          <Reveal className="dv-decision-card">
            <div className="dv-image-frame dv-decision-image">
              <img src={focusedPurchaseHierarchy} alt="Focused purchase hierarchy" />
            </div>
            <h3>Focused Purchase Hierarchy</h3>
            <p>
              Product pages prioritize pricing, platform compatibility, and
              purchase actions.
            </p>
          </Reveal>

          <Reveal className="dv-decision-card">
            <div className="dv-image-frame dv-decision-image">
              <img
                src={membershipSubscriptionSystem}
                alt="Membership and subscription system"
              />
            </div>
            <h3>Integrated Membership Experience</h3>
            <p>
              The subscription system communicates benefits, progression, and
              premium access clearly.
            </p>
          </Reveal>

          <Reveal className="dv-decision-card">
            <div className="dv-image-frame dv-decision-image">
              <img
                src={centralizedUserManagement}
                alt="Centralized user management"
              />
            </div>
            <h3>Centralized User Management</h3>
            <p>
              Orders, payment details, tracking, and support actions were
              centralized into one flow.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="dv-section">
        <Reveal>
          <p className="dv-section-label">Visual System</p>
          <h2 className="dv-centered-title">
            A dark interface language for gaming culture
          </h2>
        </Reveal>

        <div className="dv-system-grid dv-system-layout">
          <Reveal className="dv-system-card">
            <h3>Typography</h3>
            <p>
              Clean typography keeps product information easy to scan.
            </p>
            <div className="dv-image-frame dv-system-image">
              <img src={typographyDigitalVault} alt="Digital Vault typography" />
            </div>
          </Reveal>

          <Reveal className="dv-system-card">
            <h3>Iconography</h3>
            <p>
              Icons support category recognition and navigation clarity.
            </p>
            <div className="dv-image-frame dv-system-image">
              <img src={iconographyDigitalVault} alt="Digital Vault iconography" />
            </div>
          </Reveal>

          <Reveal className="dv-system-card">
            <h3>Colour Palette</h3>
            <p>
              The palette combines neutral interface tones with a purple accent.
            </p>

            <div className="dv-palette">
              <span style={{ background: "#ffffff" }} />
              <span style={{ background: "#ececec" }} />
              <span style={{ background: "#222222" }} />
              <span style={{ background: "#444444" }} />
              <span style={{ background: "#470190" }} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="dv-section">
        <Reveal>
          <p className="dv-section-label">Final Design</p>
          <h2 className="dv-centered-title">High-Fidelity & Prototyping</h2>
        </Reveal>

        <div className="dv-final-showcase-grid">
          <Reveal className="dv-image-frame dv-final-media">
            <img src={cartScreen} alt="Digital Vault cart screen" />
          </Reveal>

          <Reveal className="dv-media-frame dv-final-media dv-final-video">
            <video autoPlay loop muted playsInline>
              <source src={finalPrototypeVideo} type="video/mp4" />
            </video>
          </Reveal>

          <Reveal className="dv-image-frame dv-final-media">
            <img src={thankYouScreen} alt="Digital Vault thank you screen" />
          </Reveal>
        </div>
      </section>

      <section className="dv-section dv-reflection">
        <Reveal>
          <p className="dv-section-label">Reflection</p>

          <h2>
            This project helped me design a more structured digital shopping
            experience without losing visual atmosphere.
          </h2>

          <p>
            Digital Vault strengthened my understanding of how hierarchy,
            navigation, and visual identity work together in e-commerce.
          </p>

          <Link to="/" className="dv-primary-link">
            ← Back to Portfolio
          </Link>
        </Reveal>
      </section>
    </main>
  );
}