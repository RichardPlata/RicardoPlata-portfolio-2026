export function validProfileUrl(value) {
  if (typeof value !== 'string' || !value.trim() || value !== value.trim()) return false
  if (value.startsWith('/') && !value.startsWith('//') && !value.includes('\\')) return true
  try { return ['https:', 'http:'].includes(new URL(value).protocol) } catch { return false }
}

export function emailHref(value) {
  return typeof value === 'string' && /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(value)
    ? `mailto:${value}` : null
}
