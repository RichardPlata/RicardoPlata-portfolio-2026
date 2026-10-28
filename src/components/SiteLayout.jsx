import { useTranslation } from 'react-i18next'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import useSectionNavigation from '../hooks/useSectionNavigation.js'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './PageTransition.css'

export default function SiteLayout() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const { lang } = useParams()
  const isHome = pathname.replace(/\/$/, '') === `/${lang}`
  useSectionNavigation()

  return (
    <div className={isHome ? 'site-shell site-shell--home' : 'site-shell'}>
      <a className="skip-link" href="#main-content">{t('skip')}</a>
      <Header framed={isHome} />
      <main key={pathname} id="main-content" className={`page-transition ${isHome ? 'content-frame' : 'container'}`} tabIndex={-1}><Outlet /></main>
      <Footer showContact={isHome} />
    </div>
  )
}
