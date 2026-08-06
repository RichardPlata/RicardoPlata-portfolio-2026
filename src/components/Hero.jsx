import {
  useEffect,
  useRef,
} from "react";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import aireVideo from "../assets/videos/aire.mp4";
import resumePdf from "../assets/files/Resume-RicardoPlata-2026.pdf";

import cloud1 from "../assets/images/cloud1.png";
import cloud2 from "../assets/images/cloud2.png";

const premiumEase = [0.22, 1, 0.36, 1];

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const reduceMotion = useReducedMotion();

  const sectionIsVisible = useInView(sectionRef, {
    amount: 0.05,
    margin: "150px 0px 150px 0px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [
      "start start",
      "end start",
    ],
  });

  const cloudOpacity = useTransform(
    scrollYProgress,
    [0, 0.48],
    reduceMotion
      ? [0.48, 0.48]
      : [0.48, 0],
  );

  const secondaryCloudOpacity = useTransform(
    scrollYProgress,
    [0, 0.44],
    reduceMotion
      ? [0.42, 0.42]
      : [0.42, 0],
  );

  const leftCloudX = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion
      ? [0, 0]
      : [0, -720],
  );

  const rightCloudX = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion
      ? [0, 0]
      : [0, 720],
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.48],
    [1, 0],
  );

  const textScale = useTransform(
    scrollYProgress,
    [0, 0.55],
    reduceMotion
      ? [1, 1]
      : [1, 0.78],
  );

  const textFilter = useTransform(
    scrollYProgress,
    [0, 0.48],
    reduceMotion
      ? [
          "blur(0px)",
          "blur(0px)",
        ]
      : [
          "blur(0px)",
          "blur(8px)",
        ],
  );

  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [0.12, 0],
  );

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.playbackRate = 0.45;

    const saveDataEnabled =
      navigator.connection?.saveData === true;

    if (
      saveDataEnabled ||
      reduceMotion ||
      !sectionIsVisible
    ) {
      video.pause();
      return;
    }

    const playPromise = video.play();

    if (playPromise) {
      playPromise.catch(() => {
        // Algunos navegadores pueden bloquear autoplay.
      });
    }
  }, [
    reduceMotion,
    sectionIsVisible,
  ]);

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: reduceMotion
          ? "auto"
          : "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="
        relative
        z-10
        min-h-screen
        w-full
        overflow-hidden
        text-white
      "
    >
      <div
        className="
          absolute
          inset-0
          z-0
          bg-[radial-gradient(circle_at_center,_#60A5FA,_#0F172A)]
        "
      />

      <motion.video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        style={{
          opacity: videoOpacity,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          h-full
          w-full
          object-cover
          mix-blend-screen
        "
      >
        <source
          src={aireVideo}
          type="video/mp4"
        />
      </motion.video>

      {/* Top left cloud */}
      <motion.div
        aria-hidden="true"
        initial={
          reduceMotion
            ? false
            : {
                x: -360,
                opacity: 0,
              }
        }
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: reduceMotion
            ? 0
            : 0.85,
          ease: premiumEase,
        }}
        className="
          absolute
          left-[-5rem]
          top-16
          z-20
          w-[25rem]
          sm:left-6
          sm:top-6
          sm:w-[32rem]
        "
      >
        <motion.img
          src={cloud1}
          alt=""
          draggable="false"
          loading="eager"
          decoding="async"
          style={{
            x: leftCloudX,
            opacity: cloudOpacity,
          }}
          className="
            cloud-float-slow
            w-full
          "
        />
      </motion.div>

      {/* Top right cloud */}
      <motion.div
        aria-hidden="true"
        initial={
          reduceMotion
            ? false
            : {
                x: 360,
                opacity: 0,
              }
        }
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: reduceMotion
            ? 0
            : 0.85,
          ease: premiumEase,
        }}
        className="
          absolute
          right-[-7rem]
          top-24
          z-20
          w-[23rem]
          sm:right-6
          sm:top-10
          sm:w-[30rem]
        "
      >
        <motion.img
          src={cloud2}
          alt=""
          draggable="false"
          loading="eager"
          decoding="async"
          style={{
            x: rightCloudX,
            opacity: cloudOpacity,
          }}
          className="
            cloud-float-medium
            w-full
          "
        />
      </motion.div>

      {/* Bottom left cloud */}
      <motion.div
        aria-hidden="true"
        initial={
          reduceMotion
            ? false
            : {
                x: -360,
                opacity: 0,
              }
        }
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: reduceMotion
            ? 0
            : 0.85,
          delay: reduceMotion
            ? 0
            : 0.08,
          ease: premiumEase,
        }}
        className="
          absolute
          bottom-12
          left-[-7rem]
          z-20
          w-[20rem]
          sm:bottom-10
          sm:left-6
          sm:w-[25rem]
        "
      >
        <motion.img
          src={cloud2}
          alt=""
          draggable="false"
          loading="eager"
          decoding="async"
          style={{
            x: leftCloudX,
            opacity: secondaryCloudOpacity,
          }}
          className="
            cloud-float-fast
            w-full
          "
        />
      </motion.div>

      {/* Bottom right cloud */}
      <motion.div
        aria-hidden="true"
        initial={
          reduceMotion
            ? false
            : {
                x: 360,
                opacity: 0,
              }
        }
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: reduceMotion
            ? 0
            : 0.85,
          delay: reduceMotion
            ? 0
            : 0.08,
          ease: premiumEase,
        }}
        className="
          absolute
          bottom-20
          right-[-7rem]
          z-20
          w-[22rem]
          sm:right-6
          sm:w-[28rem]
        "
      >
        <motion.img
          src={cloud1}
          alt=""
          draggable="false"
          loading="eager"
          decoding="async"
          style={{
            x: rightCloudX,
            opacity: secondaryCloudOpacity,
          }}
          className="
            cloud-float-slow
            w-full
          "
        />
      </motion.div>

      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                scale: 1.08,
                filter: "blur(12px)",
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: reduceMotion
            ? 0
            : 0.9,
          delay: reduceMotion
            ? 0
            : 0.12,
          ease: premiumEase,
        }}
        style={{
          opacity: textOpacity,
          scale: textScale,
          filter: textFilter,
        }}
        className="
          relative
          z-30
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-6xl
          flex-col
          items-center
          justify-center
          px-6
          pt-20
          text-center

          before:absolute
          before:inset-x-[8%]
          before:bottom-[18%]
          before:top-[24%]
          before:-z-10
          before:rounded-[3rem]
          before:bg-slate-950/10
          before:backdrop-blur-[2px]
          before:[mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]

          sm:px-8
        "
      >
        <p
          className="
            mb-5
            text-xs
            font-medium
            uppercase
            tracking-[0.32em]
            text-white/85
            [text-shadow:0_2px_12px_rgba(7,18,40,0.7)]
            sm:text-sm
          "
        >
          Ricardo Guadarrama Plata
        </p>

        <h1
          id="hero-title"
          className="
            max-w-5xl
            font-avatar
            text-[clamp(3rem,8vw,7.5rem)]
            leading-[0.95]
            tracking-[-0.045em]
            text-white
            [text-shadow:0_5px_22px_rgba(7,18,40,0.58),0_0_34px_rgba(96,165,250,0.14)]
          "
        >
          UX/UI & Interaction Designer
        </h1>

        <p
          className="
            mt-7
            max-w-3xl
            font-avatar
            text-base
            leading-7
            text-white/90
            [text-shadow:0_3px_14px_rgba(7,18,40,0.72)]
            sm:text-lg
            md:text-xl
            md:leading-8
          "
        >
          I design intuitive digital products and interactive experiences
          through user-centered thinking, motion, and functional prototyping.
        </p>

        <p
          className="
            mt-4
            text-[0.68rem]
            uppercase
            tracking-[0.22em]
            text-white/75
            [text-shadow:0_2px_10px_rgba(7,18,40,0.8)]
            sm:text-xs
          "
        >
          Product Design · Automotive HMI · Interactive Experiences
        </p>

        <div
          className="
            mt-10
            flex
            w-full
            max-w-md
            flex-col
            items-center
            justify-center
            gap-4
            sm:w-auto
            sm:max-w-none
            sm:flex-row
          "
        >
          <button
            type="button"
            onClick={scrollToProjects}
            className="
              inline-flex
              w-full
              items-center
              justify-center
              rounded-full
              border
              border-white/80
              bg-white/12
              px-7
              py-3.5
              text-xs
              uppercase
              tracking-[0.22em]
              text-white
              shadow-[0_12px_32px_rgba(7,18,40,0.2)]
              backdrop-blur-md
              transition
              duration-300
              hover:-translate-y-0.5
              hover:bg-white
              hover:text-slate-900
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
              sm:w-auto
            "
          >
            View Projects
          </button>

          <a
            href={resumePdf}
            download
            className="
              inline-flex
              w-full
              items-center
              justify-center
              rounded-full
              border
              border-white/35
              bg-slate-950/20
              px-7
              py-3.5
              text-xs
              uppercase
              tracking-[0.22em]
              text-white/95
              shadow-[0_12px_32px_rgba(7,18,40,0.18)]
              backdrop-blur-md
              transition
              duration-300
              hover:-translate-y-0.5
              hover:border-white/70
              hover:bg-slate-950/35
              hover:text-white
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
              sm:w-auto
            "
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}