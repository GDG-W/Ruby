"use client";

import clsx from "clsx";
import {
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
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
const SPRING_CONFIG = { stiffness: 400, damping: 30, mass: 1 };

const TARGET_FRAME_TIME = 16.67; // 1000ms / 60fps
const SETTLING_VELOCITY_THRESHOLD = 50;

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

  // Track settling flags outside of React state to avoid re-renders
  const settlingFlags = useRef<boolean[]>(
    CIRCLES_CONFIG.map(() => false),
  ).current;

  const circleRefs = useRef(
    Array.from({ length: 5 }, () => ({
      // biome-ignore lint/correctness/useHookAtTopLevel: tbh I have no idea what happened here but it's working and i'm scared to touch it
      animatedSize: useMotionValue(100),
      // biome-ignore lint/correctness/useHookAtTopLevel: see above
      animatedX: useMotionValue(CENTER_X - CIRCLE_SIZE / 2),
      // biome-ignore lint/correctness/useHookAtTopLevel: see above
      animatedY: useMotionValue(CENTER_Y - CIRCLE_SIZE / 2),
    })),
  ).current;

  const springs = useRef(
    circleRefs.map((c) => ({
      springX: useSpring(c.animatedX, SPRING_CONFIG),
      springY: useSpring(c.animatedY, SPRING_CONFIG),
      springSize: useSpring(c.animatedSize, SPRING_CONFIG),
    })),
  ).current;

  springs.forEach((spr, idx) => {
    // settling detection on X updates only
    useMotionValueEvent(spr.springX, "change", () => {
      if (!settlingFlags[idx]) return;
      const vx = spr.springX.getVelocity();
      const vy = spr.springY.getVelocity();
      const totalV = Math.sqrt(vx * vx + vy * vy);
      if (totalV < SETTLING_VELOCITY_THRESHOLD) settlingFlags[idx] = false;
    });
  });

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

  // Orbiting update on angle change
  useEffect(() => {
    CIRCLES_CONFIG.forEach((cfg, idx) => {
      const isExpanded = expandedCircleId === cfg.id;
      if (isExpanded || settlingFlags[idx]) return;
      const a = angle + cfg.angleOffset;
      const x = CENTER_X + cfg.radius * Math.cos(a);
      const y = CENTER_Y + cfg.radius * Math.sin(a);
      circleRefs[idx].animatedX.set(x - CIRCLE_SIZE / 2);
      circleRefs[idx].animatedY.set(y - CIRCLE_SIZE / 2);
    });
  }, [angle, expandedCircleId, circleRefs, settlingFlags]);

  // Handle expand/collapse
  useEffect(() => {
    if (expandedCircleId !== null) {
      const idx = CIRCLES_CONFIG.findIndex((c) => c.id === expandedCircleId);
      circleRefs[idx].animatedSize.set(expandedSize);
      circleRefs[idx].animatedX.set(CENTER_X - expandedSize / 2);
      circleRefs[idx].animatedY.set(CENTER_Y - expandedSize / 2);
    } else {
      CIRCLES_CONFIG.forEach((cfg, idx) => {
        settlingFlags[idx] = true;
        circleRefs[idx].animatedSize.set(CIRCLE_SIZE);
        const a = angle + cfg.angleOffset;
        const x = CENTER_X + cfg.radius * Math.cos(a);
        const y = CENTER_Y + cfg.radius * Math.sin(a);
        circleRefs[idx].animatedX.set(x - CIRCLE_SIZE / 2);
        circleRefs[idx].animatedY.set(y - CIRCLE_SIZE / 2);
      });
    }
  }, [expandedCircleId, expandedSize, angle, circleRefs, settlingFlags]);

  const handleCircleClick = (id: CircleId) =>
    setExpandedCircleId((prev) => (prev === id ? null : id));

  return (
    <div ref={wrapperRef} className={clsx(styles.orbit, className)}>
      {/** biome-ignore lint/a11y/noSvgWithoutTitle: Inline SVG */}
      <svg
        viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
        width="100%"
        height="auto"
        preserveAspectRatio="xMidYMid meet"
        className={styles.svg}
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
          const size = springs[idx].springSize.get();
          const xPos = springs[idx].springX.get();
          const yPos = springs[idx].springY.get();
          const scale = size / CIRCLE_SIZE;
          const isExpanded = expandedCircleId === cfg.id;
          const isVisible = expandedCircleId === null || isExpanded;
          const effStrokeWidth = isExpanded
            ? STROKE_WIDTH / scale
            : (CIRCLE_SIZE * 0.025) / scale;

          return (
            <foreignObject
              key={cfg.id}
              x={xPos}
              y={yPos}
              width={size}
              height={size}
              style={{
                overflow: "visible",
                opacity: isVisible && isInitialDelayComplete ? 1 : 0,
                transition: `opacity ${FADE_DURATION}ms ${isVisible ? "ease-out" : "ease-in"}`,
                pointerEvents:
                  isVisible && isInitialDelayComplete ? "auto" : "none",
              }}
            >
              <div
                style={{
                  width: CIRCLE_SIZE,
                  height: CIRCLE_SIZE,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
              >
                <CircleWithRings
                  size={CIRCLE_SIZE}
                  fillImage={cfg.image}
                  isExpanded={isExpanded}
                  strokeWidth={effStrokeWidth}
                  onClick={() => handleCircleClick(cfg.id)}
                />
              </div>
            </foreignObject>
          );
        })}
      </svg>
    </div>
  );
}

// Export the shared constant for sibling components
export { Orbit as default, OUTER_RING_RATIO };
