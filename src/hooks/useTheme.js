import { useEffect, useState } from 'react'
import { applyTheme, getInitialTheme, saveTheme } from '../theme/theme.js'

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (!import.meta.env.DEV || window.self === window.top) return
    const onMessage = (event) => {
      if (event.source !== window.parent || event.origin !== window.location.origin) return
      if (!document.documentElement.dataset.previewTheme || event.data?.type !== 'portfolio-preview-theme') return
      const next = event.data.theme
      if (next !== 'light' && next !== 'dark') return
      document.documentElement.dataset.previewTheme = next
      setTheme(next)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  useEffect(() => {
    applyTheme(theme)
    saveTheme(theme)
  }, [theme])

  return [theme, setTheme]
}
