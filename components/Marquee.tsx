/**
 * Infinite horizontal ticker. The list is rendered twice and the track slides
 * exactly -50%, so the loop is seamless. Pure CSS — no JS, no layout thrash.
 */
export function Marquee({ items }: { items: readonly string[] }) {
  return (
    <div className="marquee relative overflow-hidden border-y border-rule py-5">
      {/* Fade the edges so items enter and leave instead of being clipped. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent"
      />

      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="flex items-center whitespace-nowrap font-mono text-sm text-soft"
              >
                <span className="px-6">{item}</span>
                <span className="text-clay">◦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
