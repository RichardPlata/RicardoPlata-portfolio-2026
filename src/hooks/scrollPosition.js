export function scrollToSection(section, behavior = 'smooth') {
  const id = section === 'projects' ? 'work' : section
  const target = document.getElementById(id === 'top' ? 'main-content' : id)
  if (!target) return
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const scrollBehavior = motion.matches ? 'instant' : behavior
  target.focus({ preventScroll: true })
  if (id === 'top') window.scrollTo({ top: 0, left: 0, behavior: scrollBehavior })
  else target.scrollIntoView({ behavior: scrollBehavior, block: 'start' })
}

export function captureScrollPosition() {
  const header = document.querySelector('.site-header')?.getBoundingClientRect().height || 0
  const section = ['work', 'about', 'contact'].map((id) => document.getElementById(id))
    .filter((element) => element && element.getBoundingClientRect().top <= header + 32).at(-1)
  return {
    x: window.scrollX, y: window.scrollY,
    section: section?.id,
    offset: section?.getBoundingClientRect().top,
  }
}

export function restoreScrollPosition(position, preserveSection = false) {
  const target = preserveSection && position.section && document.getElementById(position.section)
  const top = target ? window.scrollY + target.getBoundingClientRect().top - position.offset : position.y
  window.scrollTo({ left: position.x, top, behavior: 'instant' })
}
