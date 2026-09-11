import { ICON_PATHS, type IconName } from "@/lib/icons";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, size = 20, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}
