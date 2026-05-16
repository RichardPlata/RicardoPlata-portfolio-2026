import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FiGift, FiHeart, FiShoppingBag } from "react-icons/fi";

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

function PhoneImage({ src, alt }) {
  return (
    <div className="kokoro-phone-frame">
      <img src={src} alt={alt} />
    </div>
  );
}

function PhoneVideo({ src }) {
  return (
    <div className="kokoro-phone-frame">
      <video autoPlay loop muted playsInline>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default function Kokoro() {
  const scrollToOverview = () => {
    window.history.replaceState(null, "", window.location.pathname);

    const overview = document.querySelector("#kokoro-overview");

    if (overview) {
      overview.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.03]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.4]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -90]);

  return (
    <main className="kokoro-page kokoro-navbar-dark">
      {/* HERO */}
      <section className="kokoro-hero">
        <motion.video
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="kokoro-hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={kokoroVideo} type="video/mp4" />
        </motion.video>

        <div className="kokoro-hero-overlay" />

        <motion.div style={{ y: titleY }} className="kokoro-hero-content">
          <p className="kokoro-kicker">Mobile App · UX/UI · Ordering Flow</p>

          <h1>Kokoro</h1>

          <p>
            A warm bakery mobile app designed to make dessert discovery,
            cake customization, and ordering feel playful, simple, and personal.

          </p>

          <button
            type="button"
            onClick={scrollToOverview}
            className="kokoro-primary-link kokoro-scroll-button"
          >
            View Case Study ↓
          </button>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section id="kokoro-overview" className="kokoro-section">
        <Reveal>
          <p className="kokoro-section-label">Overview</p>
        </Reveal>

        <div className="kokoro-overview-grid">
          <Reveal>
            <h2>
              Designing a softer and more playful bakery ordering experience.
            </h2>
          </Reveal>

          <Reveal>
            <p>
              Kokoro is a bakery mobile app concept focused on product discovery,
              cake customization, cart review, and checkout. The experience uses
              a warm visual identity and guided interactions to make ordering feel
              approachable, emotional, and easy to navigate.
            </p>
          </Reveal>
        </div>

        <Reveal className="kokoro-meta-grid">
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
            <strong>Figma · Photoshop · Prototyping</strong>
          </div>
        </Reveal>
      </section>

      {/* CHALLENGE */}
      <section className="kokoro-section">
        <Reveal>
          <p className="kokoro-section-label">The Challenge</p>
          <h2 className="kokoro-centered-title">The Problem and Objective</h2>
        </Reveal>

        <div className="kokoro-card-grid">
          <Reveal className="kokoro-info-card">
            <h3>The Problem</h3>

            <p>
              Ordering a custom cake can quickly become overwhelming when people
              need to make multiple decisions around flavors, sizes, fillings,
              decorations, messages, and delivery details.
            </p>
          </Reveal>

          <Reveal className="kokoro-info-card">
            <h3>The Objective</h3>

            <p>
              To design a guided mobile experience that simplifies customization
              while preserving a warm, visual, and emotionally inviting tone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TARGET USERS */}
      <section className="kokoro-section">
        <Reveal>
          <p className="kokoro-section-label">Audience</p>
          <h2 className="kokoro-centered-title">Target Users</h2>
        </Reveal>

        <div className="kokoro-user-grid">
          <Reveal className="kokoro-user-card">
            <div className="kokoro-user-icon">
              <FiGift />
            </div>

            <h3>Gift Buyers</h3>

            <p>
              Users looking for cakes or desserts for birthdays, anniversaries,
              celebrations, and special moments.
            </p>
          </Reveal>

          <Reveal className="kokoro-user-card">
            <div className="kokoro-user-icon">
              <FiHeart />
            </div>

            <h3>Custom Cake Clients</h3>

            <p>
              Users who want to personalize flavors, decorations, toppings,
              colors, and cake messages.
            </p>
          </Reveal>

          <Reveal className="kokoro-user-card">
            <div className="kokoro-user-icon">
              <FiShoppingBag />
            </div>

            <h3>Casual Browsers</h3>

            <p>
              Users who explore bakery products visually before deciding what to
              order.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CORE EXPERIENCE */}
      <section className="kokoro-section kokoro-wide-section">
        <Reveal>
          <p className="kokoro-section-label">Core Experience</p>
          <h2 className="kokoro-centered-title">Browsing the bakery catalog</h2>

          <p className="kokoro-section-intro">
            The browsing experience focuses on visual discovery through curated
            categories, featured products, saved items, and lightweight mobile
            navigation.
          </p>
        </Reveal>

        <div className="kokoro-phone-grid">
          <Reveal className="kokoro-phone-card">
            <PhoneImage src={kokoroHome} alt="Kokoro home screen" />
            <h3>Home</h3>
            <p>
              Main entry point with featured products, categories, and quick
              access to the bakery catalog.
            </p>
          </Reveal>

          <Reveal className="kokoro-phone-card">
            <PhoneImage src={kokoroCakes} alt="Kokoro cakes screen" />
            <h3>Cakes</h3>
            <p>
              Category page focused on cake discovery, product cards, pricing,
              and visual browsing.
            </p>
          </Reveal>

          <Reveal className="kokoro-phone-card">
            <PhoneImage src={kokoroDesserts} alt="Kokoro desserts screen" />
            <h3>Desserts</h3>
            <p>
              Product grid for users who want to explore desserts before
              deciding what to order.
            </p>
          </Reveal>

          <Reveal className="kokoro-phone-card">
            <PhoneImage src={kokoroFavorites} alt="Kokoro favorites screen" />
            <h3>Favorites</h3>
            <p>
              A saved-products screen that helps returning users compare
              products and revisit options.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CUSTOMIZATION FLOW */}
      <section className="kokoro-section kokoro-wide-section">
        <Reveal>
          <p className="kokoro-section-label">Customization Flow</p>

          <h2 className="kokoro-centered-title">
            Making custom cakes feel simple
          </h2>

          <p className="kokoro-section-intro">
            The customization flow was designed to guide users through one
            decision at a time, reducing complexity while keeping the process
            playful and visually engaging.
          </p>
        </Reveal>

        <div className="kokoro-flow-feature">
          <Reveal className="kokoro-flow-copy">
            <h3>Step-by-step cake builder</h3>

            <p>
              This prototype video shows how users move through the custom cake
              process: choosing a flavor, selecting the size, adding fillings
              and toppings, decorating the cake, and scheduling delivery.
            </p>
          </Reveal>

          <Reveal className="kokoro-video-card">
            <PhoneVideo src={kokoroFirstVideo} />
          </Reveal>
        </div>

        <div className="kokoro-phone-grid kokoro-phone-grid-five">
          <Reveal className="kokoro-phone-card">
            <PhoneImage src={kokoroChooseFlavor} alt="Choose flavor screen" />
            <h3>Choose Flavor</h3>
          </Reveal>

          <Reveal className="kokoro-phone-card">
            <PhoneImage src={kokoroSelectSize} alt="Select size screen" />
            <h3>Select Size</h3>
          </Reveal>

          <Reveal className="kokoro-phone-card">
            <PhoneImage
              src={kokoroFillingsToppings}
              alt="Fillings and toppings screen"
            />
            <h3>Fillings & Toppings</h3>
          </Reveal>

          <Reveal className="kokoro-phone-card">
            <PhoneImage src={kokoroDecorate} alt="Decorate cake screen" />
            <h3>Decorate It</h3>
          </Reveal>

          <Reveal className="kokoro-phone-card">
            <PhoneImage
              src={kokoroScheduleDelivery}
              alt="Schedule delivery screen"
            />
            <h3>Schedule Delivery</h3>
          </Reveal>
        </div>
      </section>

      {/* CHECKOUT FLOW */}
      <section className="kokoro-section kokoro-wide-section">
        <Reveal>
          <p className="kokoro-section-label">Checkout Flow</p>

          <h2 className="kokoro-centered-title">
            Reviewing the order before payment
          </h2>

          <p className="kokoro-section-intro">
            The checkout experience helps users review customization details,
            delivery information, pricing, and payment before completing the
            order.
          </p>
        </Reveal>

        <div className="kokoro-phone-grid kokoro-phone-grid-three">
          <Reveal className="kokoro-phone-card">
            <PhoneImage src={kokoroCart} alt="Kokoro cart screen" />
            <h3>Cart</h3>
            <p>
              Selected products, quantities, prices, and subtotal are grouped in
              one clear review screen.
            </p>
          </Reveal>

          <Reveal className="kokoro-phone-card">
            <PhoneImage
              src={kokoroSpecifications}
              alt="Kokoro specifications screen"
            />
            <h3>Specifications</h3>
            <p>
              Custom cake summary with flavor, size, fillings, toppings, and
              delivery date.
            </p>
          </Reveal>

          <Reveal className="kokoro-phone-card">
            <PhoneImage src={kokoroConfirm} alt="Kokoro confirm order screen" />
            <h3>Confirm</h3>
            <p>
              Final order review with payment method, delivery address, and
              order summary.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL PROTOTYPE */}
      <section className="kokoro-section kokoro-wide-section">
        <Reveal>
          <p className="kokoro-section-label">Final Prototype</p>

          <h2 className="kokoro-centered-title">Mobile app walkthrough</h2>

          <p className="kokoro-section-intro">
            The final walkthrough connects onboarding, product discovery,
            customization, cart review, and checkout into one cohesive mobile
            journey.
          </p>
        </Reveal>

        <Reveal className="kokoro-final-card">
          <div>
            <h3>Complete mobile journey</h3>

            <p>
              This video presents the app as a connected prototype, showing how
              Kokoro moves from a soft brand introduction into the core product
              experience and ordering flow.
            </p>
          </div>

          <PhoneVideo src={kokoroSecondVideo} />
        </Reveal>
      </section>

      {/* REFLECTION */}
      <section className="kokoro-section kokoro-reflection">
        <Reveal>
          <p className="kokoro-section-label">Reflection</p>

          <h2>
            This project helped me explore how emotional design and guided
            interactions can improve mobile ordering experiences.
          </h2>

          <p>
             Kokoro strengthened my understanding of mobile hierarchy,
             guided interactions, and how visual tone can support trust,
             delight, and emotional engagement. If expanded further, I would
             continue testing customization behavior, checkout clarity, and
             product comparison patterns.
          </p>

          <Link to="/" className="kokoro-primary-link">
            ← Back to Portfolio
          </Link>
        </Reveal>
      </section>
    </main>
  );
}