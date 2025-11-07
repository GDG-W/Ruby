import clsx from "clsx";
import Image from "next/image";
import breakoutIcon from "@/assets/breakout.svg";
import defaultAvatar from "@/assets/default-avatar.png";
import type { Speaker as APISpeaker, Session } from "@/types/api";
import styles from "./schedule-item-card.module.scss";

export interface Speaker {
  name: string;
  avatar?: string;
}

export interface ScheduleItemCardProps {
  session: Session;
  speakers: APISpeaker[];
  dayIndex?: number;
  className?: string;
}

export function ScheduleItemCard({
  session,
  speakers,
  dayIndex = 0,
  className,
}: ScheduleItemCardProps) {
  // Find speaker data for this session
  const sessionSpeaker = speakers.find(
    (speaker) => speaker.speaker_name === session.speaker_id,
  );

  const sessionSpeakers: Speaker[] = sessionSpeaker
    ? [
        {
          name: sessionSpeaker.speaker_name,
          avatar:
            sessionSpeaker.speaker_img !== "NULL"
              ? sessionSpeaker.speaker_img
              : undefined,
        },
      ]
    : [];

  const hasMultipleSpeakers = sessionSpeakers.length > 1;

  // Determine session type
  const sessionType = session.session_type?.toLowerCase().includes("broadcast")
    ? "keynote"
    : session.session_type?.toLowerCase().includes("workshop") ||
        session.session_type?.toLowerCase().includes("codelab")
      ? "workshop"
      : "regular";

  const isBreakoutSession = false;

  // Room mapping to class numbers and display names
  const ROOM_MAPPING = {
    RUBY: { class: "room1", name: "Ruby" },
    EMERALD: { class: "room2", name: "Emerald" },
    SAPPHIRE: { class: "room3", name: "Sapphire" },
    OPAL: { class: "room4", name: "Opal" },
    OUTSIDE: { class: "room5", name: "Outside" },
  } as const;

  // Get room info from session
  const roomType =
    session.room_type?.toUpperCase() as keyof typeof ROOM_MAPPING;
  const roomInfo = ROOM_MAPPING[roomType] || {
    class: "room1",
    name: session.room_type || "TBD",
  };

  // Format time
  function formatTime(timeString?: string): string {
    if (!timeString || timeString === "NULL") return "";
    
    // Handle different time formats that might come from the API
    
    // If it's already in 12-hour format (e.g., "2:30 PM"), return as is
    if (/^\d{1,2}:\d{2}\s?(AM|PM)$/i.test(timeString.trim())) {
      return timeString.trim();
    }
    
    // If it's in 24-hour format (e.g., "14:30" or "14:30:00")
    if (/^\d{1,2}:\d{2}(:\d{2})?$/.test(timeString)) {
      const [hours, minutes] = timeString.split(':').map(Number);
      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    }
    
    // Handle ISO datetime strings from Google Sheets (Excel epoch: 1899-12-30)
    if (timeString.includes("1899-12-30T")) {
      // Extract just the time part and treat as local time
      const timeMatch = timeString.match(/T(\d{2}):(\d{2}):(\d{2})/);
      if (timeMatch) {
        const [, hours, minutes] = timeMatch;
        const date = new Date();
        date.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
        return date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
      }
    }
    
    // Try to parse as a full date/datetime string
    const date = new Date(timeString);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      // If parsing fails, return the original string as a fallback
      return timeString;
    }
    
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  const startTime = formatTime(session.start_time);
  const endTime = formatTime(session.end_time);
  const timeRange = startTime && endTime ? `${startTime} - ${endTime}` : "";

  return (
    <div
      className={clsx(
        styles.scheduleItemCard,
        styles[`day${dayIndex}`],
        className,
      )}
    >
      <div className={styles.cardHeader}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{session.session_title}</h3>
          {timeRange && <div className={styles.timeRange}>{timeRange}</div>}
        </div>
        {isBreakoutSession && (
          <div className={clsx(styles.breakoutTag, styles[roomInfo.class])}>
            <Image src={breakoutIcon} alt="" className={styles.breakoutIcon} />
            <span className={styles.breakoutText}>Breakout session</span>
          </div>
        )}
      </div>

      <div
        className={clsx(
          styles.speakers,
          hasMultipleSpeakers && styles.multipleSpeakers,
        )}
      >
        <div className={styles.speakerAvatars}>
          {sessionSpeakers.map((speaker, index) => (
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
            {sessionSpeakers.map((speaker, index) => (
              <span key={index}>
                <span className={styles.speakerName}>{speaker.name}</span>
                {index < sessionSpeakers.length - 1 && (
                  <div className={styles.separator}></div>
                )}
              </span>
            ))}
          </div>
          <div className={clsx(styles.separator, styles[roomInfo.class])}></div>
          <div className={clsx(styles.roomTag, styles[roomInfo.class])}>
            {roomInfo.name}
          </div>
        </div>
      </div>
    </div>
  );
}
