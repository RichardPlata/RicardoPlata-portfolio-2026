import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import { captureScrollPosition, restoreScrollPosition, scrollToSection } from './scrollPosition.js'

export default function useSectionNavigation() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const previous = useRef(null)
  const positions = useRef(new Map())

  useEffect(() => {
    const original = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => { window.history.scrollRestoration = original }
  }, [])

  useEffect(() => {
    const last = previous.current
    const languageOnly = last && last.pathname !== location.pathname &&
      last.pathname.replace(/^\/(en|es)/, '') === location.pathname.replace(/^\/(en|es)/, '')
    const saved = positions.current.get(location.key)
    const priorPosition = last && positions.current.get(last.key)
    const record = () => positions.current.set(location.key, captureScrollPosition())
    // Wait until route content and the language layout effect have committed.
    const frame = window.requestAnimationFrame(() => {
      if (navigationType === 'POP' && saved) restoreScrollPosition(saved)
      else if (languageOnly && priorPosition) restoreScrollPosition(priorPosition, true)
      else if (location.hash) scrollToSection(location.hash.slice(1), last ? 'smooth' : 'instant')
      else scrollToSection('top', 'instant')
      record()
    })
    window.addEventListener('scroll', record, { passive: true })
    previous.current = location
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', record)
    }
  }, [location, navigationType])
}
