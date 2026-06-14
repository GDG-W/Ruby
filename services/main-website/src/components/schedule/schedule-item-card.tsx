import clsx from "clsx";
import Image from "next/image";
import breakoutIcon from "@/assets/breakout.svg";
import type { Speaker as APISpeaker, Session } from "@/types/api";
import styles from "./schedule-item-card.module.scss";

const defaultAvatarUrl =
  "https://storage.googleapis.com/devfestlagos2025/Ruby/Approved%20Speaker%20photos%20/Placeholder%20image.png";

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
  const sessionSpeakers: Speaker[] = [];

  if (session.speaker_id && session.speaker_id !== "NULL") {
    // Handle comma-separated speaker names in speaker_id field
    const speakerNames = session.speaker_id
      .split(",")
      .map((name) => name.trim());

    for (const speakerName of speakerNames) {
      // Skip empty names or "NULL" values
      if (speakerName && speakerName !== "NULL") {
        const speakerData = speakers.find(
          (speaker) => speaker.speaker_name === speakerName,
        );

        sessionSpeakers.push({
          name: speakerName,
          avatar:
            speakerData && speakerData.speaker_img !== "NULL"
              ? speakerData.speaker_img
              : undefined,
        });
      }
    }
  }

  const hasMultipleSpeakers = sessionSpeakers.length > 1;

  // Determine session type
  const _sessionType = session.session_type?.toLowerCase().includes("broadcast")
    ? "keynote"
    : session.session_type?.toLowerCase().includes("workshop") ||
        session.session_type?.toLowerCase().includes("codelab")
      ? "workshop"
      : "regular";

  const isBreakoutSession = false;

  // Room mapping to class numbers and display names
  const ROOM_MAPPING = {
    "EXHIBITION HALL": { class: "room1", name: "Exhibition Hall" },
    "CINEMA HALL 1": { class: "room2", name: "Cinema Hall 1" },
    "CINEMA HALL 2": { class: "room3", name: "Cinema Hall 2" },
    "CINEMA HALL 3": { class: "room4", name: "Cinema Hall 3" },
    "CINEMA HALL 4": { class: "room5", name: "Cinema Hall 4" },
    "BANQUET HALL": { class: "room6", name: "Banquet Hall" },
    OUTSIDE: { class: "room7", name: "Outside" },
  } as const;

  // Parse multiple rooms from session
  const parseRooms = (roomType?: string) => {
    if (!roomType || roomType === "NULL") return [];

    // Split by comma and process each room
    const roomNames = roomType
      .split(",")
      .map((name) => name.trim().toUpperCase());

    return roomNames.map((name) => {
      const mappedRoom = ROOM_MAPPING[name as keyof typeof ROOM_MAPPING];
      return (
        mappedRoom || {
          class: "room1",
          name: name.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase()),
        }
      );
    });
  };

  const roomInfos = parseRooms(session.room_type);

  // Fallback for backward compatibility
  const roomInfo =
    roomInfos.length > 0
      ? roomInfos[0]
      : {
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
      const [hours, minutes] = timeString.split(":").map(Number);
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
      // Parse the datetime - extract the time part which represents Lagos local time
      const timeMatch = timeString.match(/T(\d{2}):(\d{2}):(\d{2})/);
      if (timeMatch) {
        const [, hours, minutes] = timeMatch;

        // Create a date representing this time in Lagos timezone (UTC+1)
        // We'll use a known conference date (Nov 22, 2025 for Day 5)
        const lagosTime = new Date("2025-11-22T00:00:00+01:00");
        lagosTime.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

        // Now convert to user's timezone by formatting the Lagos time for local display
        return lagosTime.toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
      }
    }

    // Try to parse as a full date/datetime string
    const date = new Date(timeString);

    // Check if the date is valid
    if (Number.isNaN(date.getTime())) {
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
        {sessionSpeakers.length > 0 && (
          <>
            <div className={styles.speakerAvatars}>
              {sessionSpeakers.map((speaker, index) => (
                <div
                  key={index}
                  className={styles.speakerAvatar}
                  style={{ zIndex: index + 1 }}
                >
                  <img
                    src={speaker.avatar || defaultAvatarUrl}
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
                      <div
                        className={clsx(styles.separator, styles.grayedOut)}
                      ></div>
                    )}
                  </span>
                ))}
              </div>
              <div
                className={clsx(styles.separator, styles[roomInfo.class])}
              ></div>
              <div className={styles.roomTags}>
                {roomInfos.map((room, index) => (
                  <span key={index}>
                    <span className={clsx(styles.roomTag, styles[room.class])}>
                      {room.name}
                    </span>
                    {index < roomInfos.length - 1 && (
                      <span className={styles.roomSeparator}>, </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {sessionSpeakers.length === 0 && (
          <div className={styles.speakerInfo}>
            <div
              className={clsx(styles.separator, styles[roomInfo.class])}
            ></div>
            <div className={styles.roomTags}>
              {roomInfos.map((room, index) => (
                <span key={index}>
                  <span className={clsx(styles.roomTag, styles[room.class])}>
                    {room.name}
                  </span>
                  {index < roomInfos.length - 1 && (
                    <span className={styles.roomSeparator}>, </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
