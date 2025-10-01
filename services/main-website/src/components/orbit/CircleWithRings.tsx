"use client";

import React, { useState, useId } from "react";
import { OUTER_RING_RATIO } from "./Orbit";

const RING_GAP = 0.06;
const HOVER_SCALE = 1.1;

type CircleWithRingsProps = {
  size: number;
  fillImage: string;
  strokeWidth: number;
  onClick: () => void;
  isExpanded: boolean;
};

function CircleWithRings({
  size,
  onClick,
  fillImage,
  isExpanded,
  strokeWidth,
}: CircleWithRingsProps) {
  const clipPathId = useId();
  const centerRadius = size * 0.35;
  const [isHovered, setIsHovered] = useState(false);

  // When expanded: use fixed OUTER_RING_RATIO independent of ringGap
  // When collapsed: calculate based on ringGap slider value
  const outerStrokeRadius = isExpanded
    ? size * OUTER_RING_RATIO // Fixed ratio for expanded state
    : centerRadius + size * RING_GAP; // Dynamic gap for collapsed state

  // Scale logic: hover enlarges when collapsed, shrinks slightly when expanded
  const scale = isHovered ? (isExpanded ? 0.98 : HOVER_SCALE) : 1;

  // Mask radius changes on hover when collapsed
  const currentRadius = (isHovered && !isExpanded) || isExpanded ? outerStrokeRadius : centerRadius;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="drop-shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        cursor: "pointer",
        transform: `scale(${scale})`,
        transformOrigin: "center",
        transition: "transform 100ms cubic-bezier(0, 0, 0.58, 1)",
      }}
    >
      <defs>
        <clipPath id={clipPathId}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={currentRadius}
            style={{ transition: isExpanded ? "none" : "r 100ms cubic-bezier(0, 0, 0.58, 1)" }}
          />
        </clipPath>
      </defs>

      {/* Outer decorative ring */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={outerStrokeRadius}
        fill="none"
        stroke="#D4AF74"
        strokeWidth={strokeWidth}
      />

      {/* Inner fill – either solid color or an image */}
      <g clipPath={`url(#${clipPathId})`}>
        <image
          href={fillImage}
          x={size / 2 - currentRadius}
          y={size / 2 - currentRadius}
          width={currentRadius * 2}
          height={currentRadius * 2}
          preserveAspectRatio="xMidYMid slice"
          style={{ transition: isExpanded ? "none" : "all 100ms cubic-bezier(0, 0, 0.58, 1)" }}
        />
      </g>

      {/* Inner stroke overlay for crisp edge */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={currentRadius}
        fill="none"
        stroke="#D4AF74"
        strokeWidth={strokeWidth}
        style={{ transition: isExpanded ? "none" : "r 100ms cubic-bezier(0, 0, 0.58, 1)" }}
      />
    </svg>
  );
}

export default React.memo(CircleWithRings);
