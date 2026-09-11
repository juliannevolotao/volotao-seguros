export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <span className="flex items-center gap-2.5">
      <svg width="34" height="38" viewBox="0 0 34 38" aria-hidden="true" className="shrink-0">
        <defs>
          <linearGradient id="volShield" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1C74C9" />
            <stop offset="1" stopColor="#57ADEF" />
          </linearGradient>
        </defs>
        <path
          d="M17 1.5 32 7v12.5C32 28 25.6 33.6 17 36.5 8.4 33.6 2 28 2 19.5V7z"
          fill={isDark ? "#57ADEF" : "url(#volShield)"}
        />
        <path
          d="M10.5 14.5 17 26l6.5-11.5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={
            "text-[19px] font-extrabold tracking-tight " +
            (isDark ? "text-white" : "text-ink-900")
          }
        >
          VOLOTÃO
        </span>
        <span
          className={
            "mt-1 text-[8.5px] font-semibold tracking-[.22em] " +
            (isDark ? "text-navy-200" : "text-ink-400")
          }
        >
          CORRETORA DE SEGUROS
        </span>
      </span>
    </span>
  );
}
