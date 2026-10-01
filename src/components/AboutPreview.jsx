import { useTranslation } from 'react-i18next'
import { siteConfig } from '../config/siteConfig.js'
import './HomeSections.css'

export default function AboutPreview() {
  const { t } = useTranslation()
  return (
    <section id="about" className="home-about home-section" tabIndex={-1} aria-labelledby="about-title">
      <div className="home-section-label">
        <h2 id="about-title">{t('about.title')}</h2>
      </div>
      <div className="about-biography">
        {t('about.biography', { returnObjects: true }).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="about-portrait">
        {siteConfig.profile.portrait ? (
          <img src={siteConfig.profile.portrait} alt={t('about.portraitAlt', { name: siteConfig.name })} loading="lazy" />
        ) : <p>{t('about.photo')}</p>}
      </div>
      <div className="about-facts">
        {['background', 'focus', 'tools'].map((group) => (
          <div className="about-fact" key={group}>
            <h3>{t(`about.groups.${group}.title`)}</h3>
            <ul>{t(`about.groups.${group}.items`, { returnObjects: true }).map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}
