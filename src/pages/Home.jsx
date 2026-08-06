import Hero from "../components/Hero";
import Projects from "../components/ProjectCard";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#0f172a]">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}