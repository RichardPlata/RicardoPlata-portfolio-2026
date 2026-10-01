import { useEffect, useRef } from 'react'

// Exported separately so listener/RAF cleanup and motion preferences can be checked.
export function attachAuroraPointer(node, browser = window) {
  if (!node) return
  const media = browser.matchMedia('(min-width: 56.001rem) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
  let frame = 0
  let previousTime = 0
  let x = 0
  let y = 0
  let targetX = 0
  let targetY = 0
  const paint = () => {
    node.style.setProperty('--aurora-x', `${x.toFixed(3)}px`)
    node.style.setProperty('--aurora-y', `${y.toFixed(3)}px`)
  }
  const tick = (time) => {
    frame = 0
    const delta = previousTime ? Math.min(time - previousTime, 64) : 16
    previousTime = time
    const ease = 1 - Math.exp(-delta / 180)
    x += (targetX - x) * ease
    y += (targetY - y) * ease
    if (Math.abs(targetX - x) + Math.abs(targetY - y) < 0.02) {
      x = targetX
      y = targetY
      previousTime = 0
    } else frame = browser.requestAnimationFrame(tick)
    paint()
  }
  const schedule = () => { if (!frame) frame = browser.requestAnimationFrame(tick) }
  const move = (event) => {
    if (!media.matches || event.pointerType === 'touch') return
    const rect = node.getBoundingClientRect()
    if (!rect.width || !rect.height) return
    const hero = node.querySelector?.('.hero')?.getBoundingClientRect()
    const height = hero ? hero.bottom - rect.top : rect.height
    if (event.clientY > rect.top + height) { leave(); return }
    // The vector is bounded to 20px, including at the corners.
    const dx = (event.clientX - rect.left) / rect.width * 2 - 1
    const dy = (event.clientY - rect.top) / height * 2 - 1
    const divisor = Math.max(1, Math.hypot(dx, dy))
    targetX = dx / divisor * 20
    targetY = dy / divisor * 20
    schedule()
  }
  const leave = () => { targetX = 0; targetY = 0; if (media.matches) schedule() }
  const reset = () => {
    browser.cancelAnimationFrame(frame)
    frame = 0
    previousTime = 0
    x = y = targetX = targetY = 0
    node.style.removeProperty('--aurora-x')
    node.style.removeProperty('--aurora-y')
  }
  const onPreference = () => { if (!media.matches) reset() }
  node.addEventListener('pointermove', move, { passive: true })
  node.addEventListener('pointerleave', leave)
  media.addEventListener('change', onPreference)
  return () => {
    reset()
    node.removeEventListener('pointermove', move)
    node.removeEventListener('pointerleave', leave)
    media.removeEventListener('change', onPreference)
  }
}

export default function useAuroraPointer(enabled = true) {
  const ref = useRef(null)
  useEffect(() => enabled ? attachAuroraPointer(ref.current) : undefined, [enabled])
  return ref
}
