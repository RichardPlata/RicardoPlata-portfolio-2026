import { useEffect, useRef, useState } from 'react'

export default function LazyVideo({ src, className = '', ariaLabel, rootMargin = '420px', autoPlay = true }) {
  const videoRef = useRef(null)
  const [active, setActive] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const node = videoRef.current
    if (!node || !('IntersectionObserver' in window)) {
      setActive(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true)
        if (node.readyState >= 2 && autoPlay && !reducedMotion) node.play().catch(() => {})
      } else if (node.readyState >= 2) {
        node.pause()
      }
    }, { rootMargin, threshold: 0.01 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [autoPlay, reducedMotion, rootMargin])

  useEffect(() => {
    if (!active || !videoRef.current) return
    const node = videoRef.current
    const play = () => {
      if (autoPlay && !reducedMotion) node.play().catch(() => {})
    }
    node.addEventListener('loadeddata', play, { once: true })
    play()
    return () => node.removeEventListener('loadeddata', play)
  }, [active, autoPlay, reducedMotion])

  return (
    <video
      ref={videoRef}
      className={className}
      src={active ? src : undefined}
      autoPlay={autoPlay && !reducedMotion}
      muted
      loop
      playsInline
      preload={active ? 'metadata' : 'none'}
      aria-label={ariaLabel}
    />
  )
}
