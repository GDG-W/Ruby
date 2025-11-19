"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import type { Speaker as APISpeaker, Session } from "@/types/api";
import { Button } from "../button/button";
import styles from "./schedule-day-card.module.scss";
import { ScheduleItemCard } from "./schedule-item-card";
import { ScheduleTypeTabs } from "./schedule-type-tabs";

export interface ScheduleDayCardProps {
  dayIndex: number;
  title: string;
  description: string;
  sessions: Session[];
  speakers: APISpeaker[];
  onRSVP?: () => void;
  className?: string;
  isFocused?: boolean;
  onFocus?: () => void;
  hideDescription?: boolean;
  proSessions: Session[];
  proTitle?: string;
  proDescription?: string;
}

export function ScheduleDayCard({
  dayIndex,
  title,
  description,
  sessions,
  speakers,
  onRSVP,
  className,
  isFocused,
  onFocus,
  hideDescription = false,
  proSessions,
  proTitle,
  proDescription,
}: ScheduleDayCardProps) {
  const [activeTab, setActiveTab] = useState<"standard" | "pro">("standard");

  const _handleRSVPClick = () => {
    if (onRSVP) {
      onRSVP();
    }
  };

  const handleCardFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };

  // Check if this is Day 3 with Pro sessions
  const hasProSchedule = proSessions.length > 0;

  // Determine active content based on tab
  const activeTitle = hasProSchedule && activeTab === "pro" && proTitle ? proTitle : title;
  const activeDescription = hasProSchedule && activeTab === "pro" && proDescription ? proDescription : description;
  const activeSessions = hasProSchedule && activeTab === "pro" ? proSessions : sessions;

  return (
    <div
      className={clsx(
        styles.scheduleDayCard,
        styles[`day${dayIndex}`],
        isFocused && styles.focused,
        className,
      )}
      onFocus={handleCardFocus}
      onMouseEnter={handleCardFocus}
    >
      {hasProSchedule && (
        <ScheduleTypeTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}

      <div className={styles.dayHeader}>
        <div className={styles.titleColumn}>
          <h2 className={styles.dayTitle}>{activeTitle}</h2>
        </div>

        <div className={styles.contentColumn}>
          <div className={styles.contentWrapper}>
            {!hideDescription && (
              <p className={styles.dayDescription}>{activeDescription}</p>
            )}

            <div
              className={clsx(
                styles.dayActions,
                hideDescription && styles.onlyRSVP,
              )}
            >
              <Link
                href={
                  hideDescription
                    ? "/schedule"
                    : "https://tickets.devfestlagos.com/buy"
                }
                target={hideDescription ? "_self" : "_blank"}
              >
                <Button className={styles.rsvpButton}>
                  {hideDescription ? "See Full Schedule" : "BUY TICKET"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scheduleItems}>
        {activeSessions.length > 0 ? (
          activeSessions.map((session, index) => (
            <ScheduleItemCard
              key={`${dayIndex}-${activeTab}-${index}`}
              session={session}
              speakers={speakers}
              dayIndex={dayIndex}
            />
          ))
        ) : (
          <div className={styles.emptyState}>
            <h3>Coming Soon</h3>
            <p>
              Schedule details for this day will be announced soon. Stay tuned!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
