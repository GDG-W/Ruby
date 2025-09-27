'use client';

import { ScheduleDayCard, type ScheduleDayCardProps } from "./schedule-day-card";
import styles from "./schedule-day-group.module.scss";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";

export interface ScheduleDayGroupProps {
  days: (Omit<ScheduleDayCardProps, "dayIndex" | "isFocused" | "onFocus"> & { 
    date: string; 
    shortLabel: string; 
  })[];
  className?: string;
}

export function ScheduleDayGroup({
  days,
  className
}: ScheduleDayGroupProps) {
  const [activeDay, setActiveDay] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        
        let newIndex: number;

        if (event.key === "ArrowLeft") {
          newIndex = activeDay <= 0 ? days.length - 1 : activeDay - 1;
        } else {
          newIndex = activeDay >= days.length - 1 ? 0 : activeDay + 1;
        }

        setActiveDay(newIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("keydown", handleKeyDown);
      return () => container.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeDay, days.length]);

  const handleTabClick = (dayIndex: number) => {
    setActiveDay(dayIndex);
  };

  return (
    <div 
      className={clsx(styles.scheduleDayGroup, className)}
      ref={containerRef}
      tabIndex={0}
    >
      <div className={styles.dayTabs}>
        {days.map((day, index) => (
          <button
            key={index}
            className={clsx(
              styles.dayTab,
              styles[`day${index}`],
              activeDay === index && styles.active
            )}
            onClick={() => handleTabClick(index)}
          >
            <span className={styles.tabLabel}>{day.shortLabel}</span>
          </button>
        ))}
      </div>

      <div className={styles.dayCardContainer}>
        <ScheduleDayCard
          key={`day-${activeDay}`}
          dayIndex={activeDay}
          {...days[activeDay]}
          className={styles.activeDayCard}
        />
      </div>
    </div>
  );
}