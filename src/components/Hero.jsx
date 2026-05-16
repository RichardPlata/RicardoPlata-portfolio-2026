import { useEffect, useState } from "react";

import aireVideo from "../assets/videos/aire.mp4";

import cloud1 from "../assets/images/cloud1.png";
import cloud2 from "../assets/images/cloud2.png";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const video = document.getElementById("aire-video");

    if (video) {
      video.playbackRate = 0.45;
    }
  }, []);

  const cloudOpacity = Math.max(0.48 - scrollY / 500, 0);

  const leftCloudMove = scrollY * 1.5;
  const rightCloudMove = scrollY * 1.5;

  const textOpacity = Math.max(1 - scrollY / 450, 0);
  const textScale = Math.max(1 - scrollY * 0.0012, 0.75);
  const textBlur = scrollY * 0.015;

  const videoOpacity = Math.max(0.12 - scrollY / 2000, 0);

  return (
    <section
      id="home"
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        text-white
        z-10
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#60A5FA,_#0F172A)] z-0"></div>

      <video
        id="aire-video"
        autoPlay
        loop
        muted
        playsInline
        style={{
          opacity: videoOpacity,
        }}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          z-10
          mix-blend-screen
          transition-opacity
          duration-300
          pointer-events-none
        "
      >
        <source src={aireVideo} type="video/mp4" />
      </video>

      {/* ☁️ TOP LEFT */}
      <div
        style={{
          opacity: loaded ? cloudOpacity : 0,
          transform: loaded
            ? `translateX(-${leftCloudMove}px)`
            : "translateX(-360px)",
        }}
        className="
          absolute
          top-6
          left-6
          w-[32rem]
          z-20
          transition-all
          duration-[850ms]
          ease-out
        "
      >
        <img
          src={cloud1}
          alt=""
          draggable="false"
          className="w-full cloud-float-slow"
        />
      </div>

      {/* ☁️ TOP RIGHT */}
      <div
        style={{
          opacity: loaded ? cloudOpacity : 0,
          transform: loaded
            ? `translateX(${rightCloudMove}px)`
            : "translateX(360px)",
        }}
        className="
          absolute
          top-10
          right-6
          w-[30rem]
          z-20
          transition-all
          duration-[850ms]
          ease-out
        "
      >
        <img
          src={cloud2}
          alt=""
          draggable="false"
          className="w-full cloud-float-medium"
        />
      </div>

      {/* ☁️ BOTTOM LEFT */}
      <div
        style={{
          opacity: loaded ? Math.max(cloudOpacity - 0.05, 0) : 0,
          transform: loaded
            ? `translateX(-${leftCloudMove}px)`
            : "translateX(-360px)",
        }}
        className="
          absolute
          bottom-10
          left-6
          w-[25rem]
          z-20
          transition-all
          duration-[850ms]
          ease-out
        "
      >
        <img
          src={cloud2}
          alt=""
          draggable="false"
          className="w-full cloud-float-fast"
        />
      </div>

      {/* ☁️ BOTTOM RIGHT */}
      <div
        style={{
          opacity: loaded ? Math.max(cloudOpacity - 0.05, 0) : 0,
          transform: loaded
            ? `translateX(${rightCloudMove}px)`
            : "translateX(360px)",
        }}
        className="
          absolute
          bottom-20
          right-6
          w-[28rem]
          z-20
          transition-all
          duration-[850ms]
          ease-out
        "
      >
        <img
          src={cloud1}
          alt=""
          draggable="false"
          className="w-full cloud-float-slow"
        />
      </div>

      <div
        style={{
          opacity: loaded ? textOpacity : 0,
          filter: `blur(${textBlur}px)`,
          transform: loaded ? `scale(${textScale})` : "scale(1.18)",
        }}
        className="
          relative
          z-30
          h-full
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-4
          transition-all
          duration-[750ms]
          ease-out
        "
      >
        <h1 className="font-avatar text-6xl md:text-7xl">
          Ricardo Plata
        </h1>

        <p className="font-avatar text-xl mt-5 text-white/70">
          Crafting immersive digital experiences through motion and interaction
        </p>
      </div>
    </section>
  );
}