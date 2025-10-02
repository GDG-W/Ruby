import type { IconName } from "@/types/icons";

interface IconProps {
  name: IconName;
  className?: string;
  size?: number | string;
  style?: React.CSSProperties;
}

export function SvgIcon({ name, className, size = 24, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/*<use href={`/sprite.svg#${name}`} />*/}
      <use href={`#${name}`} />
    </svg>
  );
}
