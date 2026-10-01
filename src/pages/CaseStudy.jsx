import { useEffect, useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import NotFound from './NotFound.jsx'
import { caseStudies } from '../data/caseStudies.js'
import LazyVideo from '../components/LazyVideo.jsx'

const MAX_CASE_IMAGES = 3

function MediaSlot({ label, media, priority = false }) {
  const filled = Boolean(media?.src)
  return <figure className={`case-media ${filled ? 'case-media--filled' : 'case-media--pending'}`} data-case-media>
    <div className="case-media-frame">
      {media?.type === 'video' && <LazyVideo src={media.src} className="case-media-video" ariaLabel={label} rootMargin={priority ? '180px' : '420px'} autoPlay />}
      {media?.type === 'image' && <img src={media.src} alt={label} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />}
      {!filled && <div className="case-media-empty" role="img" aria-label={label}><span>{label}</span></div>}
    </div>
  </figure>
}

export default function CaseStudy() {
  const contentRef = useRef(null)
  const { lang, slug } = useParams()
  const { i18n, t } = useTranslation()
  const study = caseStudies[slug]
  const supported = lang === 'en' || lang === 'es'
  const copy = study?.[lang]

  useEffect(() => {
    if (!supported || !study) return
    i18n.changeLanguage(lang)
    document.documentElement.lang = lang
    document.title = `${study.title} | Ricardo Plata`
    const preserveKey = 'ricardo-portfolio-scroll-restore'
    let restored = false
    try {
      const saved = JSON.parse(sessionStorage.getItem(preserveKey) || 'null')
      const currentPath = window.location.pathname.replace(/^\/[^/]+/, '')
      if (saved?.path === currentPath && typeof saved.y === 'number') {
        sessionStorage.removeItem(preserveKey)
        requestAnimationFrame(() => window.scrollTo({ top: saved.y, left: saved.x || 0, behavior: 'instant' }))
        restored = true
      }
    } catch {
      // Ignore unavailable session storage.
    }
    if (!restored) window.scrollTo(0, 0)
  }, [lang, slug, i18n, study, supported])

  useEffect(() => {
    const root = contentRef.current
    if (!root || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.dataset.revealed = 'true'
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    root.querySelectorAll('[data-case-reveal]').forEach((section) => {
      delete section.dataset.revealed
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [lang, slug, i18n.resolvedLanguage])

  if (!supported) return <Navigate to="/en" replace />
  if (!study) return <div className="case-shell"><Header /><main className="container"><NotFound /></main><Footer /></div>
  if (i18n.resolvedLanguage !== lang) return null

  return <div className={`case-shell case-shell--${slug}`}>
    <a className="skip-link" href="#case-content">{t('skip')}</a>
    <Header framed />
    <main ref={contentRef} id="case-content" className="case-article content-frame" tabIndex={-1}>
      <header className="case-hero" data-case-reveal>
        <p className="case-eyebrow">{study.role} · {study.tools}</p>
        <h1>{study.title}</h1>
        <p className="case-lead">{copy.intro}</p>
        <div className="case-meta" aria-label={lang === 'es' ? 'Información del proyecto' : 'Project information'}>
          {study.year && <span><strong>{lang === 'es' ? 'Año' : 'Year'}</strong>{study.year}</span>}
          {study.category && <span><strong>{lang === 'es' ? 'Categoría' : 'Category'}</strong>{study.category}</span>}
          {study.roleDetail && <span><strong>{lang === 'es' ? 'Rol' : 'Role'}</strong>{study.roleDetail}</span>}
        </div>
        {study.link && <a className="case-external" href={study.link} target="_blank" rel="noopener noreferrer">{lang === 'es' ? 'Explorar proyecto' : 'Explore project'} ↗</a>}
      </header>

      <MediaSlot label={lang === 'es' ? 'Portada del proyecto' : 'Project cover'} media={study.cover} priority />

      <section className="case-context" data-case-reveal>
        <p className="case-kicker">{lang === 'es' ? 'Contexto' : 'Context'}</p>
        <p>{copy.context}</p>
      </section>

      <div className="case-storyline">
        {copy.sections.map((section, index) => <section className={`case-chapter ${index >= MAX_CASE_IMAGES - 1 ? 'case-chapter--text-only' : ''}`} data-case-reveal key={section.title}>
          <div className="case-chapter-copy">
            <div>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.points?.length > 0 && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
            </div>
          </div>
          {index < MAX_CASE_IMAGES - 1 && <MediaSlot label={section.media} media={study.media?.[index]} />}
        </section>)}
      </div>

      {copy.decision && <aside className="case-decision" data-case-reveal aria-label={lang === 'es' ? 'Decisión de diseño' : 'Design decision'}>
        <p className="case-decision-label">{lang === 'es' ? 'Decisión de diseño' : 'Design decision'}</p>
        <h2>{copy.decision.title}</h2>
        <div className="case-decision-grid">
          <div><h3>{lang === 'es' ? 'El punto de partida' : 'Starting point'}</h3><p>{copy.decision.before}</p></div>
          <div><h3>{lang === 'es' ? 'Lo que cambié' : 'What I changed'}</h3><p>{copy.decision.after}</p></div>
        </div>
      </aside>}

      <div className="case-ending" data-case-reveal>
        <p className="case-kicker">{lang === 'es' ? 'Resultado y aprendizaje' : 'Outcome & reflection'}</p>
        <h2>{lang === 'es' ? 'Lo que sigue' : 'What comes next'}</h2>
        <p>{copy.closing}</p>
      </div>
      <div className="case-bottom-actions">
        <button className="case-top-button" type="button" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>↑ {t('footer.backToTop')}</button>
        <Link className="case-return" to={`/${lang}#work`}>← {t('projectIndex.back')}</Link>
      </div>
    </main>
    <Footer />
  </div>
}
