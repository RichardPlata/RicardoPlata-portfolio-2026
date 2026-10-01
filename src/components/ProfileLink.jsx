import { useTranslation } from 'react-i18next'
import { siteConfig } from '../config/siteConfig.js'
import { validProfileUrl } from '../config/contactLinks.js'
import ContactIcon from './ContactIcon.jsx'

export default function ProfileLink({ name, className = '', withIcon = false }) {
  const { t } = useTranslation()
  const link = siteConfig.links[name]
  const label = t(`hero.${name}`)
  if (validProfileUrl(link?.href) && link.status === 'ready') {
    return <a className={`editorial-link ${className}`} href={link.href} target="_blank" rel="noopener noreferrer">
      {withIcon && <ContactIcon name={name} />}<span>{label}</span>{!withIcon && <span aria-hidden="true">↗</span>}
    </a>
  }
  return null
}
