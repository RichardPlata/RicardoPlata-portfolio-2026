import { Link, useLocation, useParams } from 'react-router-dom'
import { scrollToSection } from '../hooks/scrollPosition.js'

export default function SectionLink({ section, onClick, children, ...props }) {
  const { lang } = useParams()
  const location = useLocation()
  const pathname = `/${lang}`
  const hash = section === 'top' ? '' : `#${section}`
  return (
    <Link {...props} to={{ pathname, search: location.pathname === pathname ? location.search : '', hash }}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
        if (location.pathname === pathname && location.hash === hash) {
          event.preventDefault()
          scrollToSection(section)
        }
      }}>{children}</Link>
  )
}
