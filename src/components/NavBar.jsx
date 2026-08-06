import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const navigationItems = [
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const updateScrolledState = () => {
      setIsScrolled(window.scrollY > 28);
    };

    updateScrolledState();

    window.addEventListener("scroll", updateScrolledState, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
      return undefined;
    }

    const sectionIds = ["home", "projects", "about", "contact"];

    const updateActiveSection = () => {
      const viewportPosition =
        window.scrollY + window.innerHeight * 0.35;

      let currentSection = "home";

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= viewportPosition) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [isHomePage]);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const scrollBehavior = prefersReducedMotion
    ? "auto"
    : "smooth";

  const scrollToSection = (sectionId) => {
    setIsOpen(false);

    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: scrollBehavior,
        block: "start",
      });

      return;
    }

    navigate("/", {
      state: {
        scrollTo: sectionId,
      },
    });
  };

  const goHome = () => {
    setIsOpen(false);

    if (isHomePage) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: scrollBehavior,
      });

      return;
    }

    navigate("/", {
      state: {
        scrollTo: "home",
      },
    });
  };

  return (
    <nav
      className={`main-navbar ${
        isScrolled ? "main-navbar-scrolled" : ""
      } ${isOpen ? "main-navbar-menu-open" : ""}`}
      aria-label="Main navigation"
    >
      <div className="main-navbar-inner">
        <button
          type="button"
          onClick={goHome}
          className="navbar-logo"
          aria-label="Go to homepage"
        >
          <span className="navbar-logo-text">Ricardo Plata</span>
          <span className="navbar-logo-mark" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="navbar-menu-button"
          onClick={() =>
            setIsOpen((previousState) => !previousState)
          }
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="main-navigation-links"
        >
          {isOpen ? (
            <FiX aria-hidden="true" />
          ) : (
            <FiMenu aria-hidden="true" />
          )}
        </button>

        <ul
          id="main-navigation-links"
          className={`navbar-links ${
            isOpen ? "navbar-links-open" : ""
          }`}
        >
          {navigationItems.map((item) => {
            const isActive =
              isHomePage && activeSection === item.id;

            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={
                    isActive
                      ? "navbar-link-active"
                      : undefined
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="navbar-active-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}