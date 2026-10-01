import useOrbitReveal from '../hooks/useOrbitReveal.js'

export default function OrbitalIllustration() {
  const ref = useOrbitReveal()
  return (
    <svg ref={ref} className="contact-orbits" viewBox="0 0 720 240" aria-hidden="true" focusable="false" fill="none">
      <g className="orbital-paths" stroke="currentColor" strokeWidth="1">
        <ellipse cx="360" cy="136" rx="275" ry="62" transform="rotate(-12 360 136)" />
        <ellipse cx="360" cy="136" rx="206" ry="89" transform="rotate(17 360 136)" />
        <ellipse cx="360" cy="136" rx="128" ry="104" transform="rotate(-28 360 136)" />
      </g>
      <g className="orbital-bodies" fill="currentColor">
        <circle cx="93" cy="159" r="7" />
        <circle cx="240" cy="45" r="11" className="orbital-indigo" />
        <circle cx="324" cy="118" r="5" />
        <circle cx="408" cy="46" r="18" />
        <ellipse cx="408" cy="46" rx="31" ry="7" transform="rotate(-22 408 46)" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="535" cy="118" r="8" className="orbital-cyan" />
        <circle cx="559" cy="203" r="12" className="orbital-indigo" />
      </g>
      <g className="orbital-stars" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M154 61v10m-5-5h10 M579 42v8m-4-4h8 M458 186v10m-5-5h10" />
      </g>
    </svg>
  )
}
