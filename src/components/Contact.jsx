import { useTranslation } from 'react-i18next'
import { siteConfig } from '../config/siteConfig.js'
import { emailHref } from '../config/contactLinks.js'
import { scrollToSection } from '../hooks/scrollPosition.js'
import ProfileLink from './ProfileLink.jsx'
import ContactIcon from './ContactIcon.jsx'
import OrbitalIllustration from './OrbitalIllustration.jsx'
import './Contact.css'

export default function Contact() {
  const { t } = useTranslation()
  const email = emailHref(siteConfig.contact.email)
  return (
    <div className="orbital-contact">
      <div className="contact-metadata">
        <p>{t('contact.location')}</p>
        <p>{t('contact.status')}</p>
      </div>
      <OrbitalIllustration />
      <div className="contact-panel">
        <div className="contact-panel-top">
          <h2 id="contact-title">{t('contact.label')}</h2>
          <div className="contact-panel-links">
            {email && <a href={email}><ContactIcon name="email" /><span>{t('contact.email')}</span></a>}
            <ProfileLink name="linkedin" withIcon />
            <ProfileLink name="resume" withIcon />
            <button type="button" onClick={() => scrollToSection('top')}><ContactIcon name="top" /><span>{t('footer.backToTop')}</span></button>
          </div>
        </div>
        <p className="contact-wordmark">{siteConfig.name}</p>
        <p className="contact-copyright">© {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}
