import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiGift,
  FiHeart,
  FiLayers,
  FiShoppingBag,
  FiSmile,
} from "react-icons/fi";

import kokoroVideo from "../assets/videos/KokoroCardVideo.mp4";
import kokoroFirstVideo from "../assets/videos/KokoroFirstVideo.mp4";
import kokoroSecondVideo from "../assets/videos/KokoroSecondVideo.mp4";

import kokoroHome from "../assets/images/KokoroHome.png";
import kokoroCakes from "../assets/images/KokoroCakes.png";
import kokoroDesserts from "../assets/images/KokoroDesserts.png";
import kokoroFavorites from "../assets/images/KokoroFavorites.webp";

import kokoroChooseFlavor from "../assets/images/KokoroChooseFlavor.png";
import kokoroSelectSize from "../assets/images/KokoroSelectSize.png";
import kokoroFillingsToppings from "../assets/images/Kokoro-Fillings-&-Toppings.png";
import kokoroDecorate from "../assets/images/KokoroDecorateIt.png";
import kokoroScheduleDelivery from "../assets/images/KokoroScheduleDelivery.png";

import kokoroCart from "../assets/images/KokoroCart.png";
import kokoroSpecifications from "../assets/images/KokoroSpecifications.png";
import kokoroConfirm from "../assets/images/KokoroConfirm.png";

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

function PhoneImage({ src, alt }) {
  return (
    <div className="kokoro-phone-frame">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function PhoneVideo({ src, label }) {
  return (
    <div className="kokoro-phone-frame">
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

const projectFacts = [
  {
    label: "Role",
    value: "UX/UI Designer",
  },
  {
    label: "Timeline",
    value: "4 weeks",
  },
  {
    label: "Platform",
    value: "Mobile application",
  },
  {
    label: "Tools",
    value: "Figma · Photoshop · Prototyping",
  },
];

const audiences = [
  {
    icon: <FiGift />,
    title: "Gift Buyers",
    description:
      "People looking for cakes and desserts for birthdays, anniversaries, celebrations, and meaningful occasions.",
  },
  {
    icon: <FiHeart />,
    title: "Customization Clients",
    description:
      "Customers who want control over flavor, size, fillings, decorations, colors, and personal messages.",
  },
  {
    icon: <FiShoppingBag />,
    title: "Casual Browsers",
    description:
      "Users who prefer to explore products visually before deciding what to order.",
  },
];

const designPrinciples = [
  {
    icon: <FiLayers />,
    title: "Progressive Disclosure",
    description:
      "Complex customization choices are divided into manageable steps instead of appearing in one large form.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Visible Progress",
    description:
      "Each stage communicates where users are and what remains before completing the order.",
  },
  {
    icon: <FiSmile />,
    title: "Emotional Clarity",
    description:
      "Warm colors, friendly illustrations, and visual product feedback make the process feel approachable.",
  },
];

const journeySteps = [
  {
    label: "01",
    title: "Discover",
    description: "Browse featured products, categories, and recommendations.",
  },
  {
    label: "02",
    title: "Choose",
    description: "Select a product or begin a custom cake order.",
  },
  {
    label: "03",
    title: "Customize",
    description: "Define flavor, size, fillings, toppings, and decoration.",
  },
  {
    label: "04",
    title: "Schedule",
    description: "Choose delivery details and the preferred date.",
  },
  {
    label: "05",
    title: "Review",
    description: "Verify product details, specifications, and pricing.",
  },
  {
    label: "06",
    title: "Confirm",
    description: "Check payment and delivery information before ordering.",
  },
];

const reflectionItems = [
  {
    label: "Mobile Hierarchy",
    title: "Prioritizing one decision at a time",
    description:
      "The project strengthened my understanding of how content hierarchy and clear progression can reduce cognitive load on mobile.",
  },
  {
    label: "Guided Interaction",
    title: "Turning complexity into a structured flow",
    description:
      "Separating customization into smaller stages made the experience easier to understand without removing user control.",
  },
  {
    label: "Next Iteration",
    title: "Validate customization and checkout behavior",
    description:
      "A future version would test product comparison, customization completion, checkout clarity, and error recovery with users.",
  },
];

export default function Kokoro() {
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
    reduceMotion ? [0, 0] : [0, -84],
  );

  const scrollToOverview = () => {
    document.getElementById("kokoro-overview")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <main className="kokoro-page kokoro-navbar-dark">
      <section className="kokoro-hero">
        <motion.video
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
          className="kokoro-hero-video"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src={kokoroVideo} type="video/mp4" />
        </motion.video>

        <div className="kokoro-hero-overlay" />
        <div className="kokoro-hero-grain" />

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 72,
                  filter: "blur(14px)",
                }
          }
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: reduceMotion ? 0 : 1.1,
            delay: reduceMotion ? 0 : 0.18,
            ease: premiumEase,
          }}
          style={{ y: titleY }}
          className="kokoro-hero-content"
        >
          <p className="kokoro-kicker">
            Mobile UX · Product Design · Ordering Experience
          </p>

          <h1>Kokoro</h1>

          <p className="kokoro-hero-copy">
            Designing a bakery ordering experience that makes discovery,
            customization, and checkout feel warm, playful, and effortless.
          </p>

          <button
            type="button"
            onClick={scrollToOverview}
            className="kokoro-primary-link kokoro-scroll-button"
          >
            Explore Case Study ↓
          </button>
        </motion.div>
      </section>

      <section
        id="kokoro-overview"
        className="kokoro-section kokoro-overview-section"
      >
        <div className="kokoro-overview-grid">
          <Reveal className="kokoro-overview-copy">
            <p className="kokoro-section-label">Overview</p>

            <h2>
              A guided mobile journey for discovering and personalizing bakery
              products.
            </h2>

            <p>
              Kokoro is a bakery mobile-app concept designed around product
              discovery, custom cake configuration, cart review, and checkout.
            </p>

            <p>
              The experience combines a soft visual identity with progressive
              decision-making to help users complete complex orders without
              making the process feel technical or overwhelming.
            </p>
          </Reveal>

          <Reveal className="kokoro-meta-grid">
            {projectFacts.map((fact) => (
              <article
                key={fact.label}
                className="kokoro-meta-card"
              >
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="kokoro-section kokoro-narrative-section">
        <Reveal className="kokoro-section-heading kokoro-section-heading-large">
          <p className="kokoro-section-label">The Challenge</p>

          <h2>
            Simplifying a process with many connected decisions.
          </h2>
        </Reveal>

        <div className="kokoro-challenge-layout">
          <Reveal className="kokoro-info-card kokoro-info-card-featured">
            <span className="kokoro-card-index">01 · Problem</span>

            <h3>Custom cake orders can quickly become overwhelming.</h3>

            <p>
              Customers must choose between flavors, sizes, fillings, toppings,
              decoration, messages, delivery details, and payment information.
              Presenting everything at once increases cognitive load.
            </p>
          </Reveal>

          <Reveal className="kokoro-info-card">
            <span className="kokoro-card-index">02 · Objective</span>

            <h3>Guide users without removing personalization.</h3>

            <p>
              The goal was to divide the process into clear stages while
              preserving the visual and emotional qualities expected from a
              bakery brand.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="kokoro-visual-break">
        <Reveal
          className="kokoro-visual-break-inner"
          amount={0.1}
        >
          <PhoneVideo
            src={kokoroFirstVideo}
            label="Kokoro customization flow"
          />
        </Reveal>
      </section>

      <section className="kokoro-section">
        <Reveal className="kokoro-section-heading">
          <p className="kokoro-section-label">Audience</p>

          <h2>
            Different users enter the experience with different intentions.
          </h2>
        </Reveal>

        <div className="kokoro-audience-layout">
          {audiences.map((audience, index) => (
            <Reveal
              key={audience.title}
              className={`kokoro-user-card kokoro-user-card-${index + 1}`}
              delay={index * 0.12}
            >
              <div className="kokoro-user-icon">
                {audience.icon}
              </div>

              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="kokoro-section">
        <Reveal className="kokoro-section-heading">
          <p className="kokoro-section-label">Design Principles</p>

          <h2>
            The interface balances simplicity, guidance, and emotional appeal.
          </h2>
        </Reveal>

        <div className="kokoro-principles-layout">
          {designPrinciples.map((principle, index) => (
            <Reveal
              key={principle.title}
              className={`kokoro-principle-card kokoro-principle-card-${index + 1}`}
              delay={index * 0.12}
            >
              <div className="kokoro-principle-icon">
                {principle.icon}
              </div>

              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="kokoro-section kokoro-wide-section">
        <Reveal className="kokoro-section-heading kokoro-section-heading-large">
          <p className="kokoro-section-label">User Journey</p>

          <h2>
            From product discovery to order confirmation.
          </h2>
        </Reveal>

        <div className="kokoro-journey-map">
          {journeySteps.map((step) => (
            <Reveal
              key={step.label}
              className="kokoro-journey-step"
              delay={(Number(step.label) - 1) * 0.08}
            >
              <span>{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="kokoro-section kokoro-wide-section kokoro-discovery-section">
        <Reveal className="kokoro-section-heading">
          <p className="kokoro-section-label">Discovery Experience</p>

          <h2>
            Visual browsing helps users decide before they customize.
          </h2>

          <p className="kokoro-section-intro">
            Featured products, categories, and saved items make exploration
            lightweight while keeping the product imagery central.
          </p>
        </Reveal>

        <div className="kokoro-discovery-layout">
          <Reveal className="kokoro-phone-card kokoro-phone-card-featured">
            <PhoneImage
              src={kokoroHome}
              alt="Kokoro home screen"
            />

            <span className="kokoro-card-index">01 · Entry</span>
            <h3>Home</h3>

            <p>
              Featured products and categories provide a quick path into the
              bakery catalog.
            </p>
          </Reveal>

          <div className="kokoro-discovery-stack">
            <Reveal className="kokoro-phone-card">
              <PhoneImage
                src={kokoroCakes}
                alt="Kokoro cakes category screen"
              />

              <span className="kokoro-card-index">02 · Category</span>
              <h3>Cakes</h3>
            </Reveal>

            <Reveal className="kokoro-phone-card">
              <PhoneImage
                src={kokoroDesserts}
                alt="Kokoro desserts category screen"
              />

              <span className="kokoro-card-index">03 · Browse</span>
              <h3>Desserts</h3>
            </Reveal>

            <Reveal className="kokoro-phone-card">
              <PhoneImage
                src={kokoroFavorites}
                alt="Kokoro favorites screen"
              />

              <span className="kokoro-card-index">04 · Save</span>
              <h3>Favorites</h3>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="kokoro-section kokoro-wide-section">
        <Reveal className="kokoro-section-heading kokoro-section-heading-large">
          <p className="kokoro-section-label">Customization Journey</p>

          <h2>
            One decision at a time keeps personalization manageable.
          </h2>

          <p className="kokoro-section-intro">
            Instead of presenting a single configuration form, the cake builder
            guides users through a progressive sequence.
          </p>
        </Reveal>

        <div className="kokoro-customization-feature">
          <Reveal className="kokoro-flow-copy">
            <span className="kokoro-card-index">Guided prototype</span>

            <h3>A step-by-step cake builder</h3>

            <p>
              The flow separates flavor, size, fillings, toppings, decoration,
              and delivery into individual decisions. This preserves control
              while reducing the amount of information shown at once.
            </p>
          </Reveal>

          <Reveal className="kokoro-video-card">
            <PhoneVideo
              src={kokoroFirstVideo}
              label="Kokoro cake customization prototype"
            />
          </Reveal>
        </div>

        <div className="kokoro-customization-strip">
          {[
            [kokoroChooseFlavor, "Kokoro choose flavor screen", "01", "Choose Flavor"],
            [kokoroSelectSize, "Kokoro select size screen", "02", "Select Size"],
            [kokoroFillingsToppings, "Kokoro fillings and toppings screen", "03", "Fillings & Toppings"],
            [kokoroDecorate, "Kokoro cake decoration screen", "04", "Decorate It"],
            [kokoroScheduleDelivery, "Kokoro schedule delivery screen", "05", "Schedule Delivery"],
          ].map(([src, alt, index, title]) => (
            <Reveal
              key={title}
              className="kokoro-phone-card kokoro-phone-card-compact"
              delay={(Number(index) - 1) * 0.08}
            >
              <PhoneImage src={src} alt={alt} />
              <span className="kokoro-card-index">{index}</span>
              <h3>{title}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="kokoro-section kokoro-wide-section">
        <Reveal className="kokoro-section-heading">
          <p className="kokoro-section-label">Checkout Experience</p>

          <h2>
            Review reduces uncertainty before payment.
          </h2>

          <p className="kokoro-section-intro">
            Product details, customization choices, delivery information, and
            pricing are surfaced before the order is confirmed.
          </p>
        </Reveal>

        <div className="kokoro-checkout-layout">
          <Reveal className="kokoro-phone-card kokoro-checkout-main">
            <PhoneImage
              src={kokoroCart}
              alt="Kokoro cart screen"
            />

            <span className="kokoro-card-index">01 · Cart</span>
            <h3>Selected Products</h3>

            <p>
              Quantities, prices, and subtotal are grouped into one clear
              summary.
            </p>
          </Reveal>

          <div className="kokoro-checkout-stack">
            <Reveal className="kokoro-phone-card">
              <PhoneImage
                src={kokoroSpecifications}
                alt="Kokoro cake specifications screen"
              />

              <span className="kokoro-card-index">02 · Details</span>
              <h3>Specifications</h3>
            </Reveal>

            <Reveal className="kokoro-phone-card">
              <PhoneImage
                src={kokoroConfirm}
                alt="Kokoro order confirmation screen"
              />

              <span className="kokoro-card-index">03 · Confirmation</span>
              <h3>Final Review</h3>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="kokoro-section kokoro-wide-section kokoro-final-section">
        <Reveal className="kokoro-section-heading kokoro-section-heading-large">
          <p className="kokoro-section-label">Final Prototype</p>

          <h2>
            A connected journey from discovery to checkout.
          </h2>
        </Reveal>

        <Reveal className="kokoro-final-card">
          <div className="kokoro-final-copy">
            <span className="kokoro-card-index">Mobile walkthrough</span>

            <h3>The complete product experience</h3>

            <p>
              The final prototype connects brand introduction, product
              discovery, customization, cart review, and checkout into one
              continuous mobile flow.
            </p>
          </div>

          <PhoneVideo
            src={kokoroSecondVideo}
            label="Complete Kokoro mobile application walkthrough"
          />
        </Reveal>
      </section>

      <section className="kokoro-section kokoro-reflection">
        <Reveal className="kokoro-section-heading">
          <p className="kokoro-section-label">Reflection</p>

          <h2>What the project taught me.</h2>
        </Reveal>

        <div className="kokoro-reflection-grid">
          {reflectionItems.map((item, index) => (
            <Reveal
              key={item.label}
              className={`kokoro-reflection-card kokoro-reflection-card-${index + 1}`}
              delay={index * 0.12}
            >
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="kokoro-prototype-cta">
        <Reveal className="kokoro-prototype-cta-inner">
          <p>Mobile product experience</p>

          <h2>
            A complete ordering journey built around warmth, clarity, and
            customization.
          </h2>
        </Reveal>
      </section>

      <nav
        className="kokoro-next-project"
        aria-label="Case study navigation"
      >
        <Link
          to="/projects/gu-qi"
          className="kokoro-next-project-link"
        >
          <span className="kokoro-next-project-label">
            Next Project
          </span>

          <div className="kokoro-next-project-main">
            <strong>GU-QI</strong>

            <span
              className="kokoro-next-project-arrow"
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