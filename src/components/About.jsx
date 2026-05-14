import { useEffect, useRef, useState } from "react";

import mountain from "../assets/images/mountain.png";

import rock1 from "../assets/images/rock1.png";
import rock2 from "../assets/images/rock2.png";
import rock3 from "../assets/images/rock3.png";

import aboutPicture from "../assets/images/About-Picture.png";

import resumeFile from "../assets/files/Resume-RicardoPlata.pdf";

export default function About() {
  const sectionRef = useRef(null);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const rect = sectionRef.current?.getBoundingClientRect();

  let enterProgress = 0;
  let exitProgress = 0;

  if (rect) {
    const windowHeight = window.innerHeight;

    enterProgress = Math.min(
      Math.max((windowHeight - rect.top) / windowHeight, 0),
      1
    );

    exitProgress = Math.min(
      Math.max(-rect.top / windowHeight, 0),
      1
    );
  }

  const mountainOpacity =
    Math.min(Math.max((enterProgress - 0.05) * 1.5, 0), 1) *
    (1 - exitProgress * 0.9);

  const mountainY =
    95 - mountainOpacity * 95 + exitProgress * 120;

  const mountainScale =
    1.08 - mountainOpacity * 0.04;

  const contentOpacity =
    Math.min(Math.max((enterProgress - 0.18) * 1.8, 0), 1) *
    (1 - exitProgress * 0.9);

  const rockOpacity =
    Math.min(Math.max((enterProgress - 0.22) * 1.8, 0), 1) *
    (1 - exitProgress);

  const contentY =
    55 - contentOpacity * 55 + exitProgress * -60;

  const photoY =
    65 - contentOpacity * 65 + exitProgress * 70;

  const rocks = [
    {
      src: rock1,
      className: "about-rock-1",
      rotate: -18,
      exitX: -80,
      exitY: -90,
    },

    {
      src: rock2,
      className: "about-rock-2",
      rotate: 22,
      exitX: 80,
      exitY: -90,
    },

    {
      src: rock3,
      className: "about-rock-3",
      rotate: -32,
      exitX: 90,
      exitY: 100,
    },

    {
      src: rock1,
      className: "about-rock-4",
      rotate: 34,
      exitX: -70,
      exitY: 80,
    },

    {
      src: rock2,
      className: "about-rock-5",
      rotate: -42,
      exitX: -90,
      exitY: 110,
    },

    {
      src: rock3,
      className: "about-rock-6",
      rotate: 28,
      exitX: 70,
      exitY: -80,
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        about-section
        relative
        min-h-screen
        overflow-hidden
        px-10
        py-32
        text-white
      "
    >
      <div className="absolute inset-0 about-earth-bg" />
      <div className="absolute inset-0 about-earth-light" />
      <div className="absolute inset-0 about-earth-vignette" />

      <img
        src={mountain}
        alt=""
        className="about-mountain-img"
        draggable="false"
        style={{
          opacity: mountainOpacity,

          transform:
            `translateX(-50%) translateY(${mountainY}px) scale(${mountainScale})`,
        }}
      />

      {rocks.map((rock, index) => (
        <div
          key={index}
          className={`about-rock-wrapper ${rock.className}`}
          style={{
            opacity: rockOpacity * 0.85,

            transform:
              `translate3d(${exitProgress * rock.exitX}px,
              ${exitProgress * rock.exitY}px, 0)
              rotate(${rock.rotate}deg)`,
          }}
        >
          <img
            src={rock.src}
            alt=""
            className="about-rock-img"
            draggable="false"
          />
        </div>
      ))}

      <div className="relative z-20 grid min-h-[78vh] grid-cols-12 items-center gap-10">
        <div
          className="about-text-panel col-span-6"
          style={{
            opacity: contentOpacity,

            transform: `translateY(${contentY}px)`,

            filter: `blur(${exitProgress * 8}px)`,
          }}
        >
          <h2
            className="
              about-title
              font-avatar
              mb-8
              text-6xl
              leading-none
              md:text-7xl
            "
          >
            About Me
          </h2>

          <p className="about-copy max-w-xl text-lg leading-relaxed">
            I’m Ricardo Plata, a UX/UI designer focused on crafting immersive
            digital experiences through visual storytelling, interaction, and
            thoughtful design systems.
          </p>

          <p className="about-copy mt-6 max-w-xl text-lg leading-relaxed">
            With a background in game design and interactive media, I combine
            structured UX thinking with a cinematic and motion-driven approach,
            creating interfaces that feel intuitive, atmospheric, and
            intentional.
          </p>

          <p className="about-copy mt-6 max-w-xl text-lg leading-relaxed">
            I’m currently exploring the intersection between product design,
            motion, and interactive systems, while continuing to pursue
            opportunities within gaming and creative technology.
          </p>

          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="
              about-button
              inline-flex
              mt-10
              rounded-full
              px-7
              py-3
              text-sm
              tracking-[0.25em]
            "
          >
            DOWNLOAD RESUME
          </a>
        </div>

        <div
          className="col-span-5 col-start-8"
          style={{
            opacity: contentOpacity,

            transform:
              `translateY(${photoY}px)
              scale(${0.96 + contentOpacity * 0.04})`,

            filter: `blur(${exitProgress * 8}px)`,
          }}
        >
          <div className="about-photo-card overflow-hidden">
            <img
              src={aboutPicture}
              alt="Ricardo Plata"
              draggable="false"
              className="
                w-full
                h-full
                object-cover
                about-photo-img
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}