import Image from "next/image";
import fiveDaysIcon from "@/assets/five-days.svg";
import { ScheduleDayGroup } from "@/components/schedule/schedule-day-group";
import { fetchConferenceData } from "@/lib/actions";
import type { Session } from "@/types/api";
import styles from "./page.module.scss";

const dayLabels = [
  { title: "TUE 18", shortLabel: "Day 1" },
  { title: "WED 19", shortLabel: "Day 2" },
  { title: "THU 20", shortLabel: "Day 3" },
  { title: "FRI 21", shortLabel: "Day 4" },
  { title: "SAT 22", shortLabel: "Day 5" },
];

const defaultDayDescriptions = [
  "Kick off DevFest Lagos 2025 with inspiring keynotes, networking, and community building.",
  "Explore the intersection of design and artificial intelligence with hands-on sessions and expert insights.",
  "Dive deep into Web3 technologies, blockchain development, and decentralized applications.",
  "Focus on modern development practices, frameworks, and emerging technologies shaping software development.",
  "Connect with industry leaders, explore career opportunities, and build meaningful professional relationships.",
];

export default async function SchedulePage() {
  const conferenceData = await fetchConferenceData();

  if (!conferenceData) {
    return (
      <div className={styles.schedulePage}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            EXPLORE OUR ALL
            <br />
            INCLUSIVE SCHEDULE
          </h1>
          <Image
            src={fiveDaysIcon}
            alt="Five Days"
            className={styles.fiveDaysIcon}
          />
        </div>
        <p>Unable to load schedule data</p>
      </div>
    );
  }

  // Transform API data to schedule format
  const scheduleData = [];
  for (let dayIndex = 1; dayIndex <= 5; dayIndex++) {
    const dayKey = `Day ${dayIndex}` as keyof typeof conferenceData;
    const dayData = conferenceData[dayKey];

    // Ensure we're working with Session arrays
    const sessions = Array.isArray(dayData) ? (dayData as Session[]) : [];

    // Include all sessions (don't filter by speaker presence)
    const allSessions = sessions;

    // Get day title from API Days data
    const dayInfo = conferenceData.Days?.find((d) => d.day === dayIndex);
    const dayTitle = dayInfo?.day_title || `DAY ${dayIndex}`;

    scheduleData.push({
      title: dayTitle.toUpperCase(),
      description:
        defaultDayDescriptions[dayIndex - 1] ||
        `Day ${dayIndex} activities and sessions.`,
      date: dayLabels[dayIndex - 1]?.title || `Day ${dayIndex}`,
      shortLabel: dayLabels[dayIndex - 1]?.shortLabel || `Day ${dayIndex}`,
      sessions: allSessions,
      speakers: conferenceData.Speakers,
    });
  }

  return (
    <div className={styles.schedulePage}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          EXPLORE OUR ALL
          <br />
          INCLUSIVE SCHEDULE
        </h1>
        <Image
          src={fiveDaysIcon}
          alt="Five Days"
          className={styles.fiveDaysIcon}
        />
      </div>
      <ScheduleDayGroup days={scheduleData} />
    </div>
  );
}
