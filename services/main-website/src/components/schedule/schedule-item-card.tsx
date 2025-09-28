import styles from "./schedule-item-card.module.scss";
import clsx from "clsx";
import BreakoutIcon from "@/assets/breakout.svg";
import defaultAvatar from "@/assets/default-avatar.png";

export interface Speaker {
  name: string;
  avatar?: string;
}

export interface ScheduleItemCardProps {
  title: string;
  speakers: Speaker[];
  room: number;
  isBreakoutSession?: boolean;
  sessionType?: "keynote" | "workshop" | "regular";
  dayIndex?: number;
  className?: string;
}

export function ScheduleItemCard({
  title,
  speakers,
  room,
  isBreakoutSession = false,
  sessionType = "regular",
  dayIndex = 0,
  className
}: ScheduleItemCardProps) {
  const hasMultipleSpeakers = speakers.length > 1;

  return (
    <div className={clsx(
      styles.scheduleItemCard,
      styles[`day${dayIndex}`],
      className
    )}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{title}</h3>
        {isBreakoutSession && (
          <div className={clsx(
            styles.breakoutTag,
            styles[`room${room}`]
          )}>
            <BreakoutIcon className={styles.breakoutIcon} />
            <span className={styles.breakoutText}>Breakout session</span>
          </div>
        )}
      </div>
      
      <div className={clsx(
        styles.speakers,
        hasMultipleSpeakers && styles.multipleSpeakers
      )}>
        <div className={styles.speakerAvatars}>
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className={styles.speakerAvatar}
              style={{ zIndex: index + 1 }}
            >
              <img 
                src={speaker.avatar || defaultAvatar.src} 
                alt={`${speaker.name} avatar`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <div className={styles.speakerInfo}>
          <div className={styles.speakerNames}>
            {speakers.map((speaker, index) => (
              <span key={index}>
                <span className={styles.speakerName}>
                  {speaker.name}
                </span>
                {index < speakers.length - 1 && (
                  <div className={styles.separator}></div>
                )}
              </span>
            ))}
          </div>
          <div className={clsx(
            styles.separator,
            styles[`room${room}`]
          )}></div>
          <div className={clsx(
            styles.roomTag,
            styles[`room${room}`]
          )}>
            Room {room}
          </div>
        </div>
      </div>
    </div>
  );
}