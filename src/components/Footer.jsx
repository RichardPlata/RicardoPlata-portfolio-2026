import { siteConfig } from '../config/siteConfig.js'
import { useTranslation } from 'react-i18next'
import ProfileLink from './ProfileLink.jsx'
import Contact from './Contact.jsx'
import './HomeSections.css'

export default function Footer({ showContact = false }) {
  const { t } = useTranslation()
  return (
    <footer className={`site-footer ${showContact ? 'content-frame home-closing' : 'container'}`}
      id={showContact ? 'contact' : undefined} tabIndex={showContact ? -1 : undefined}
      aria-labelledby={showContact ? 'contact-title' : undefined}>
      {showContact && <Contact />}
      {!showContact && <div className="footer-bottom">
        <div className="footer-signature">
          <p>{siteConfig.name}</p>
          <p className="footer-meta">© {new Date().getFullYear()} · {t('footer.location')}</p>
        </div>
        <div className="footer-links">
          <ProfileLink name="linkedin" /><ProfileLink name="resume" />
          <button className="footer-top" type="button" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>
            {t('footer.backToTop')} <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>}
    </footer>
  )
}
