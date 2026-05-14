import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const goToSection = (sectionId) => {
    setIsOpen(false);

    navigate("/", {
      state: {
        scrollTo: sectionId,
      },
    });
  };

  return (
    <nav className="main-navbar">
      <div className="main-navbar-inner">
        <button
          type="button"
          onClick={() => goToSection("home")}
          className="navbar-logo"
        >
          Ricardo Plata
        </button>

        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className={`navbar-links ${isOpen ? "navbar-links-open" : ""}`}>
          <li>
            <button type="button" onClick={() => goToSection("projects")}>
              Projects
            </button>
          </li>

          <li>
            <button type="button" onClick={() => goToSection("about")}>
              About
            </button>
          </li>

          <li>
            <button type="button" onClick={() => goToSection("contact")}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}