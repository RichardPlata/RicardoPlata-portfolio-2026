import LazyVideo from './LazyVideo.jsx'

export default function ProjectMedia({ project }) {
  const moveImage = (event) => {
    if (event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) return
    const box = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--image-x', `${(event.clientX - box.left - box.width / 2) / box.width * 12}px`)
    event.currentTarget.style.setProperty('--image-y', `${(event.clientY - box.top - box.height / 2) / box.height * 12}px`)
  }
  const resetImage = (event) => {
    event.currentTarget.style.setProperty('--image-x', '0px')
    event.currentTarget.style.setProperty('--image-y', '0px')
  }
  return (
    <div className="project-card-media" aria-hidden="true" onPointerMove={moveImage} onPointerLeave={resetImage} onPointerCancel={resetImage}>
      {project.video && <LazyVideo className="project-card-video" src={project.video} rootMargin="520px" ariaLabel={project.title} />}
      {!project.video && project.image && (
        <picture>
          {project.mobileImage && <source media="(max-width: 40rem)" srcSet={project.mobileImage} />}
          <img src={project.image} alt="" loading="lazy" decoding="async" />
        </picture>
      )}
      {!project.video && !project.image && <span className="project-media-placeholder">{project.title}</span>}
    </div>
  )
}
