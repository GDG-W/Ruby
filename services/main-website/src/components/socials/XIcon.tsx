import type React from "react";

type Props = {
  size?: number;
  className?: string;
};

export function XIcon({ size = 50, className }: Props): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      focusable="false"
    >
      <title>X / Twitter</title>
      <rect width="50" height="50" rx="25" fill="var(--icon-bg, #1E1E1E)" />
      <path
        d="M31.1106 15H34.3691L27.2503 23.4718L35.625 35H29.0677L23.9317 28.0082L18.0551 35H14.7946L22.4089 25.9385L14.375 15H21.0988L25.7412 21.3908L31.1106 15ZM29.967 32.9692H31.7726L20.1177 16.9241H18.1802L29.967 32.9692Z"
        fill="currentColor"
      />
    </svg>
  );
}
