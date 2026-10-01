import { useLayoutEffect, useRef } from 'react'

// Visible by default: only a successful intersection starts animation.
export function observeProjectCards(grid, seen = new Set()) {
  if (!grid || !('IntersectionObserver' in window)) return
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (motion.matches) return

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      if (entry.target.dataset.revealed !== 'complete') entry.target.dataset.revealed = 'true'
      seen.add(entry.target.dataset.project)
      observer.unobserve(entry.target)
    }
  }, { threshold: 0.08 })
  const cards = [...grid.children]
  cards.forEach((card) => {
    if (seen.has(card.dataset.project)) return
    card.dataset.revealed = 'pending'
    observer.observe(card)
  })
  const stop = () => {
    observer.disconnect()
    cards.forEach((card) => delete card.dataset.revealed)
  }
  const onMotionChange = () => {
    if (motion.matches) stop()
  }
  motion.addEventListener('change', onMotionChange)
  return () => {
    stop()
    motion.removeEventListener('change', onMotionChange)
  }
}

export default function useProjectReveal(projects) {
  const ref = useRef(null)
  const seen = useRef(new Set())
  useLayoutEffect(() => observeProjectCards(ref.current, seen.current), [projects])
  return ref
}
