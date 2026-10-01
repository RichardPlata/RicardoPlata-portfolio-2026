import { useEffect, useRef } from 'react'

export default function useOrbitReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const node = ref.current
    if (!node || !('IntersectionObserver' in window)) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finish = () => { node.dataset.entered = 'complete' }
    const onEnd = (event) => { if (event.animationName === 'orbit-body-arrive') finish() }
    const onMotion = () => { if (media.matches) finish() }
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      node.dataset.entered = media.matches ? 'complete' : 'true'
      observer.disconnect()
    }, { threshold: 0.2 })
    node.addEventListener('animationend', onEnd)
    media.addEventListener('change', onMotion)
    observer.observe(node)
    return () => {
      observer.disconnect()
      node.removeEventListener('animationend', onEnd)
      media.removeEventListener('change', onMotion)
    }
  }, [])
  return ref
}
