import styles from "./schedule-day-card.module.scss";
import clsx from "clsx";
import { ScheduleItemCard, type Speaker } from "./schedule-item-card";
import { Button } from "../button/button";

export interface ScheduleItem {
  id: string;
  title: string;
  speakers: Speaker[];
  room: number;
  isBreakoutSession?: boolean;
  sessionType?: "keynote" | "workshop" | "regular";
}

export interface ScheduleDayCardProps {
  dayIndex: number;
  title: string;
  description: string;
  scheduleItems: ScheduleItem[];
  onRSVP?: () => void;
  className?: string;
  isFocused?: boolean;
  onFocus?: () => void;
}

export function ScheduleDayCard({
  dayIndex,
  title,
  description,
  scheduleItems,
  onRSVP,
  className,
  isFocused,
  onFocus
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
        className
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
            <p className={styles.dayDescription}>{description}</p>
            
            <div className={styles.dayActions}>
              <Button 
                className={styles.rsvpButton}
                onClick={handleRSVPClick}
              >
                RSVP
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scheduleItems}>
        {scheduleItems.length > 0 ? (
          scheduleItems.map((item) => (
            <ScheduleItemCard
              key={item.id}
              title={item.title}
              speakers={item.speakers}
              room={item.room}
              isBreakoutSession={item.isBreakoutSession}
              sessionType={item.sessionType}
              dayIndex={dayIndex}
            />
          ))
        ) : (
          <div className={styles.emptyState}>
            <h3>Coming Soon</h3>
            <p>Schedule details for this day will be announced soon. Stay tuned!</p>
          </div>
        )}
      </div>
    </div>
  );
}