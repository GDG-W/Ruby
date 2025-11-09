"use client";

import clsx from "clsx";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import devfestLogo from "@/assets/devfest-logo.svg";

import CircleWithRings from "./CircleWithRings";
import styles from "./orbit.module.scss";

function deg(d: number) {
  return (d * Math.PI) / 180;
}

const SVG_SIZE = 600;
const CENTER_X = SVG_SIZE / 2;
const CENTER_Y = SVG_SIZE / 2;

const OUTER_RING_RATIO = 0.47;
const INNER_GUIDE_RADIUS = 100;
const MIDDLE_ORBIT_RADIUS = 190;
const OUTER_ORBIT_RADIUS = 280;

const CIRCLE_SIZE = 100;
const STROKE_WIDTH = 2;

const EXPAND_GAP = 10;
const FADE_DURATION = 135;
const ORBIT_SPEED = 0.0025;

const TARGET_FRAME_TIME = 16.67; // 1000ms / 60fps

const CIRCLES_CONFIG = [
  {
    id: 0,
    angleOffset: deg(79),
    radius: OUTER_ORBIT_RADIUS,
    image: "/images/devfest-2024-digital-working-group.jpg",
  },
  {
    id: 1,
    angleOffset: deg(151),
    radius: MIDDLE_ORBIT_RADIUS,
    image: "/images/devfest-2024-volunteers.jpg",
  },
  {
    id: 2,
    angleOffset: deg(19),
    radius: MIDDLE_ORBIT_RADIUS,
    image: "/images/devfest-2024-audience.jpg",
  },
  {
    id: 3,
    angleOffset: deg(230),
    radius: OUTER_ORBIT_RADIUS,
    image: "/images/devfest-2024-stage.jpg",
  },
  {
    id: 4,
    angleOffset: deg(305),
    radius: OUTER_ORBIT_RADIUS,
    image: "/images/devfest-2024-attendees.jpg",
  },
] as const;

type CircleId = (typeof CIRCLES_CONFIG)[number]["id"];

function Orbit({ className }: { className: string }) {
  const [angle, setAngle] = useState(0);
  const [pageVisible, setPageVisible] = useState(true);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(wrapperRef, { margin: "0px" });
  const [isInitialDelayComplete, setIsInitialDelayComplete] = useState(false);
  const [expandedCircleId, setExpandedCircleId] = useState<CircleId | null>(
    null,
  );

  // State to track circle positions for rendering
  const [circlePositions, setCirclePositions] = useState(() =>
    CIRCLES_CONFIG.map((cfg) => {
      const initialAngle = cfg.angleOffset;
      const initialCenterX = CENTER_X + cfg.radius * Math.cos(initialAngle);
      const initialCenterY = CENTER_Y + cfg.radius * Math.sin(initialAngle);
      return {
        x: initialCenterX,
        y: initialCenterY,
        size: CIRCLE_SIZE,
      };
    }),
  );

  // Expanded size memo
  const expandedSize = (OUTER_ORBIT_RADIUS - EXPAND_GAP) / OUTER_RING_RATIO;

  // Initial delay
  useEffect(() => {
    const t = setTimeout(() => setIsInitialDelayComplete(true), 150);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = () =>
      setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, []);

  // Animate angle continuously
  useEffect(() => {
    let raf: number;
    let last = performance.now();
    const animate = (now: number) => {
      const dt = (now - last) / TARGET_FRAME_TIME;
      last = now;
      if (isInView && pageVisible) {
        setAngle((prev) => (prev + ORBIT_SPEED * dt) % (2 * Math.PI));
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, pageVisible]);

  // Update positions based on angle
  useEffect(() => {
    setCirclePositions((prev) => {
      const newPositions = [...prev];
      CIRCLES_CONFIG.forEach((cfg, idx) => {
        const isExpanded = expandedCircleId === cfg.id;
        if (isExpanded) {
          // Expanded circle stays centered
          newPositions[idx] = {
            x: CENTER_X,
            y: CENTER_Y,
            size: expandedSize,
          };
        } else {
          // Orbiting circles
          const a = angle + cfg.angleOffset;
          const x = CENTER_X + cfg.radius * Math.cos(a);
          const y = CENTER_Y + cfg.radius * Math.sin(a);
          newPositions[idx] = {
            x,
            y,
            size: CIRCLE_SIZE,
          };
        }
      });
      return newPositions;
    });
  }, [angle, expandedCircleId, expandedSize]);

  const handleCircleClick = (id: CircleId) =>
    setExpandedCircleId((prev) => (prev === id ? null : id));

  return (
    <div ref={wrapperRef} className={clsx(styles.orbit, className)}>
      {/** biome-ignore lint/a11y/noSvgWithoutTitle: Inline SVG */}
      <svg
        width="100%"
        height="100%"
        className={styles.svg}
        preserveAspectRatio="xMidYMid meet"
        viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
      >
        {/* Concentric guide rings */}
        {[INNER_GUIDE_RADIUS, MIDDLE_ORBIT_RADIUS, OUTER_ORBIT_RADIUS].map(
          (r) => (
            <circle
              key={r}
              cx={CENTER_X}
              cy={CENTER_Y}
              r={r}
              fill="none"
              stroke="#D4AF74"
              strokeWidth="3"
            />
          ),
        )}

        {/* Center logo */}
        <image
          href={devfestLogo.src}
          x={CENTER_X - 56}
          y={CENTER_Y - 31}
          width={112}
          height={62}
        />

        {/* Orbiting circles */}
        {CIRCLES_CONFIG.map((cfg, idx) => {
          const position = circlePositions[idx];
          const isExpanded = expandedCircleId === cfg.id;
          const isVisible = expandedCircleId === null || isExpanded;
          const scale = position.size / CIRCLE_SIZE;
          const effStrokeWidth = isExpanded
            ? STROKE_WIDTH
            : (CIRCLE_SIZE * 0.025) / scale;

          return (
            <g
              key={cfg.id}
              style={{
                opacity: isVisible && isInitialDelayComplete ? 1 : 0,
                transition: `opacity ${FADE_DURATION}ms ${isVisible ? "ease-out" : "ease-in"}`,
                pointerEvents:
                  isVisible && isInitialDelayComplete ? "auto" : "none",
              }}
            >
              <g
                transform={`translate(${position.x}, ${position.y})`}
                style={{
                  transition: isExpanded
                    ? "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)"
                    : "none",
                }}
              >
                <g
                  transform={`scale(${scale})`}
                  style={{
                    transition: isExpanded
                      ? "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)"
                      : "none",
                  }}
                >
                  <CircleWithRings
                    size={CIRCLE_SIZE}
                    fillImage={cfg.image}
                    isExpanded={isExpanded}
                    strokeWidth={effStrokeWidth}
                    onClick={() => handleCircleClick(cfg.id)}
                  />
                </g>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// Export the shared constant for sibling components
export { Orbit as default, OUTER_RING_RATIO };
