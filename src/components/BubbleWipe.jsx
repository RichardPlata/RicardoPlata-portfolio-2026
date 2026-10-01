const bubbles = [
  [4, 72, 92, 0, -24], [18, 38, 130, 30, 20], [33, 83, 76, 70, -16],
  [49, 27, 116, 45, 22], [66, 64, 148, 10, -18], [86, 33, 96, 80, 24],
  [96, 80, 124, 35, -22], [43, 61, 68, 110, 16], [73, 14, 82, 95, -20],
  [10, 14, 56, 120, 14],
]

export default function BubbleWipe() {
  return (
    <div className="bubble-wipe" aria-hidden="true">
      {bubbles.map(([x, y, size, delay, drift], index) => (
        <span key={index} style={{ left: `${x}%`, top: `${y}%`, '--bubble-size': `${size}px`, '--bubble-delay': `${delay * 3}ms`, '--bubble-drift': `${drift}px` }} />
      ))}
    </div>
  )
}
