import Hero from '../components/Hero.jsx'
import ProjectIndex from '../components/ProjectIndex.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import AboutPreview from '../components/AboutPreview.jsx'
import { professionalProjects } from '../data/projects.js'

export default function Home() {
  return (
    <>
      <Hero />
      <section id="work" className="section project-index" tabIndex={-1} aria-labelledby="projects-title">
        <ProjectIndex />
        <div className="project-results-stage">
          <ProjectGrid projects={professionalProjects} layout="projects" />
        </div>
      </section>
      <AboutPreview />
    </>
  )
}
