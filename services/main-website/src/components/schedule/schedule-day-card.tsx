import clsx from "clsx";
import type { Speaker as APISpeaker, Session } from "@/types/api";
import { Button } from "../button/button";
import styles from "./schedule-day-card.module.scss";
import { ScheduleItemCard } from "./schedule-item-card";
import Link from "next/link";

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
}: ScheduleDayCardProps) {
  const handleRSVPClick = () => {
    if (onRSVP) {
      onRSVP();
    }
  };

  const handleCardFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };

  return (
    <div
      className={clsx(
        styles.scheduleDayCard,
        styles[`day${dayIndex}`],
        isFocused && styles.focused,
        className,
      )}
      tabIndex={0}
      onFocus={handleCardFocus}
      onMouseEnter={handleCardFocus}
    >
      <div className={styles.dayHeader}>
        <div className={styles.titleColumn}>
          <h2 className={styles.dayTitle}>{title}</h2>
        </div>

        <div className={styles.contentColumn}>
          <div className={styles.contentWrapper}>
            {!hideDescription && (
              <p className={styles.dayDescription}>{description}</p>
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
                    : "https://tickets.devfestlagos.com"
                }
                target={hideDescription ? "_self" : "_blank"}
              >
                <Button className={styles.rsvpButton}>
                  {hideDescription ? "See Full Schedule" : "RSVP Now"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scheduleItems}>
        {sessions.length > 0 ? (
          sessions.map((session, index) => (
            <ScheduleItemCard
              key={`${dayIndex}-${index}`}
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
