import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    navigate("/", {
      state: {
        scrollTo: sectionId,
      },
    });
  };

  return (
    <nav className="fixed top-0 left-0 z-[999] w-full px-10 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        <button
          type="button"
          onClick={() => goToSection("home")}
          className="text-sm uppercase tracking-[0.25em] text-white"
        >
          Ricardo Plata
        </button>

        <ul className="flex items-center gap-12 text-sm uppercase tracking-[0.25em] text-white/90">

          <li>
            <button
              type="button"
              onClick={() => goToSection("projects")}
            >
              Projects
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={() => goToSection("about")}
            >
              About
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={() => goToSection("contact")}
            >
              Contact
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
}