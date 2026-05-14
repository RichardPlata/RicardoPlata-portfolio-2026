import { useEffect, useRef, useState } from "react";

import waterVideo from "../assets/videos/water.mp4";

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [scrollY, setScrollY] = useState(0);
  const [formStatus, setFormStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const video = document.getElementById("water-video");

    if (video) {
      video.playbackRate = 0.65;
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setFormStatus("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(
        "https://formspree.io/f/mojrrava",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setFormStatus(
          "Thanks — I’ll get back to you soon."
        );

        formRef.current.reset();
      } else {
        setFormStatus(
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setFormStatus(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  const rect =
    sectionRef.current?.getBoundingClientRect();

  let enterProgress = 0;
  let exitProgress = 0;

  if (rect) {
    const windowHeight = window.innerHeight;

    enterProgress = Math.min(
      Math.max(
        (windowHeight - rect.top) / windowHeight,
        0
      ),
      1
    );

    exitProgress = Math.min(
      Math.max(-rect.top / windowHeight, 0),
      1
    );
  }

  const contentOpacity =
    Math.min(
      Math.max((enterProgress - 0.15) * 1.8, 0),
      1
    ) *
    (1 - exitProgress * 0.85);

  const videoOpacity =
    Math.min(
      Math.max((enterProgress - 0.05) * 1.4, 0),
      1
    ) *
    (1 - exitProgress * 0.75);

  const contentY =
    70 - contentOpacity * 70 + exitProgress * -70;

  const cardY =
    90 - contentOpacity * 90 + exitProgress * 80;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="
        contact-section
        relative
        min-h-screen
        overflow-hidden
        px-10
        py-32
        text-white
      "
    >
      <video
        id="water-video"
        autoPlay
        loop
        muted
        playsInline
        className="contact-water-video"
        style={{
          opacity: videoOpacity,

          transform:
            `scale(${1.05 + enterProgress * 0.03})`,
        }}
      >
        <source
          src={waterVideo}
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 contact-water-bg" />

      <div className="absolute inset-0 contact-water-light" />

      <div className="absolute inset-0 contact-water-vignette" />

      <div
        className="
          relative
          z-20
          grid
          min-h-[78vh]
          grid-cols-12
          items-center
          gap-10
        "
      >
        <div
          className="col-span-5"
          style={{
            opacity: contentOpacity,

            transform:
              `translateY(${contentY}px)`,

            filter:
              `blur(${exitProgress * 8}px)`,
          }}
        >
          <h2
            className="
              contact-title
              font-avatar
              mb-8
              text-6xl
              leading-none
              md:text-7xl
            "
          >
            Get in Touch
          </h2>

          <p
            className="
              contact-copy
              max-w-lg
              text-lg
              leading-relaxed
            "
          >
            Have a design project,
            collaboration, or creative
            opportunity in mind? Share a
            few details and I’ll get back
            to you soon.
          </p>

          <div className="mt-12">
            <div className="flex gap-5">
              <a
                className="contact-social"
                href="https://www.linkedin.com/in/ricardo-guadarrama-plata-976a8b209"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                className="contact-social"
                href="https://www.behance.net/rich11"
                target="_blank"
                rel="noreferrer"
              >
                Behance
              </a>

              <a
                className="contact-social"
                href="https://dribbble.com/Richgup"
                target="_blank"
                rel="noreferrer"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>

        <div
          className="col-span-6 col-start-7"
          style={{
            opacity: contentOpacity,

            transform:
              `translateY(${cardY}px)
              scale(${
                0.96 +
                contentOpacity * 0.04
              })`,

            filter:
              `blur(${exitProgress * 8}px)`,
          }}
        >
          <form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex="-1"
            />

            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <select
                name="projectType"
                required
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                >
                  Project Type
                </option>

                <option value="UX/UI Design">
                  UX/UI Design
                </option>

                <option value="Website Design">
                  Website Design
                </option>

                <option value="Interactive Experience">
                  Interactive Experience
                </option>

                <option value="Motion / 3D">
                  Motion / 3D
                </option>

                <option value="Collaboration">
                  Collaboration
                </option>

                <option value="Other">
                  Other
                </option>
              </select>

              <select
                name="budget"
                required
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                >
                  Budget
                </option>

                <option value="Less than $500">
                  Less than $500
                </option>

                <option value="$500 - $1,000">
                  $500 - $1,000
                </option>

                <option value="$1,000 - $3,000">
                  $1,000 - $3,000
                </option>

                <option value="$3,000+">
                  $3,000+
                </option>

                <option value="Not sure yet">
                  Not sure yet
                </option>
              </select>
            </div>

            <input
              type="text"
              name="timeline"
              placeholder="Timeline / Deadline"
              required
            />

            <textarea
              name="message"
              placeholder="Tell me about your project"
              rows="8"
              minLength="40"
              required
            />

            <button
              type="submit"
              disabled={isSending}
            >
              {isSending
                ? "SENDING..."
                : "SEND PROJECT INQUIRY"}
            </button>

            {formStatus && (
              <p className="contact-status">
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}