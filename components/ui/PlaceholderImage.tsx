export function PlaceholderImage({
  label,
  aspect = "aspect-[4/3]",
  tone = "light",
  rounded = "rounded-2xl",
  className = "",
}: {
  label: string;
  aspect?: string;
  tone?: "light" | "dark";
  rounded?: string;
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`${aspect} w-full flex items-center justify-center ${rounded} border ${
        isDark
          ? "border-white/20 bg-[#0E3468]"
          : "border-brand-200 bg-brand-100/60"
      } ${className}`}
      style={{
        backgroundImage: isDark
          ? "repeating-linear-gradient(135deg, rgba(255,255,255,.07) 0 12px, rgba(255,255,255,.02) 12px 24px)"
          : "repeating-linear-gradient(135deg, #E2ECF7 0 12px, #EDF3FA 12px 24px)",
      }}
    >
      <span
        className={`rounded-lg border px-3.5 py-2.5 text-center font-mono text-[12px] ${
          isDark
            ? "border-white/20 bg-[#0A2A54]/70 text-brand-300"
            : "border-brand-200 bg-white/90 text-ink-600"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
