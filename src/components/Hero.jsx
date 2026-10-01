import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '../config/siteConfig.js'
import useReducedMotion from '../hooks/useReducedMotion.js'
import SectionLink from './SectionLink.jsx'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const words = t('hero.roles', { returnObjects: true })
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (reducedMotion) return
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % 3), 3600)
    return () => window.clearInterval(timer)
  }, [reducedMotion])

  return <section className="hero cosmic-hero" aria-labelledby="intro-title">
    <div className="cosmic-hero-field" aria-hidden="true"><span /><span /><span /></div>
    <div className="cosmic-hero-content">
      <p className="cosmic-hero-eyebrow">{t('hero.location')} · {t('hero.availability')}</p>
      <h1 id="intro-title">{siteConfig.name}</h1>
      <p className="cosmic-hero-role" aria-label={t('hero.roleDescription')}>
        <span aria-hidden="true">{t('hero.rolePrefix')} </span>
        <span key={`${t('language.label')}-${reducedMotion ? 0 : index}`} className="cosmic-hero-word" aria-hidden="true">{words[reducedMotion ? 0 : index]}</span>
      </p>
      <p className="cosmic-hero-description">{t('hero.cosmicDescription')}</p>
      <nav className="cosmic-hero-actions" aria-label={t('hero.linksLabel')}>
        <SectionLink className="cosmic-hero-button cosmic-hero-button--primary" section="work">{t('hero.selectedWork')} <span aria-hidden="true">↗</span></SectionLink>
        <SectionLink className="cosmic-hero-button" section="contact">{t('navigation.contact')} <span aria-hidden="true">↗</span></SectionLink>
      </nav>
    </div>
    <SectionLink className="cosmic-hero-scroll" section="work">{t('hero.scroll')} <span aria-hidden="true">↓</span></SectionLink>
  </section>
}
