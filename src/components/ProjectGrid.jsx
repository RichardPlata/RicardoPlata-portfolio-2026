import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useProjectReveal from '../hooks/useProjectReveal.js'
import ProjectMedia from './ProjectMedia.jsx'
import './ProjectIndex.css'

export default function ProjectGrid({ projects, layout = 'projects' }) {
  const { t } = useTranslation('projects')
  const { lang } = useParams()
  const gridRef = useProjectReveal(projects)
  return (
    <div id="project-results">
      <p role="status" className={projects.length === 0 ? 'project-empty' : undefined}>
        {projects.length === 0 ? t('empty') : null}
      </p>
      {projects.length > 0 && (
        <ul ref={gridRef} className={`project-grid project-grid--${layout}`}>
          {[...projects].sort((a, b) => a.order - b.order).map((project, index) => {
            const title = project.cardTitle || project.title
            return (
              <li key={project.slug} data-project={project.slug} className={`project-card-slot project-card-slot--${project.layoutVariant || 'support'}`}
                style={{ '--reveal-delay': `${(index % 3) * 70}ms` }}
                onFocus={(event) => { event.currentTarget.dataset.revealed = 'complete' }}
                onAnimationEnd={(event) => { event.currentTarget.dataset.revealed = 'complete' }}>
                {project.upcoming ? <div className="project-card project-card--upcoming">
                  <ProjectMedia project={project} />
                  <div className="project-card-info"><div><h3>{title}</h3><p>{t(project.typeKey)} · {t('comingSoon')}</p></div></div>
                </div> : <Link className="project-card" to={`/${lang}/work/${project.slug}`}
                  aria-label={t('openCaseStudy', { title })}>
                  <ProjectMedia project={project} />
                  <div className="project-card-info">
                    <div>
                      <h3>{title}</h3>
                      <p>{t(project.typeKey)}</p>
                    </div>
                    <span className="project-card-arrow" aria-hidden="true">↗</span>
                  </div>
                </Link>}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
