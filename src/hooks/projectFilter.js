export const bubbleDuration = 1900

export function entersExplorations(previous, next, reducedMotion) {
  return previous === 'projects' && next === 'explorations' && !reducedMotion
}
