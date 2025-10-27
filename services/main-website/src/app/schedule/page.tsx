import { ScheduleDayGroup } from "@/components/schedule/schedule-day-group";
import styles from "./page.module.scss";
import fiveDaysIcon from "@/assets/five-days.svg";
import { fetchConferenceData } from "@/lib/actions";
import { Session } from "@/types/api";
import Image from "next/image";

const dayLabels = [
  { title: "TUE 18", shortLabel: "Day 1" },
  { title: "WED 19", shortLabel: "Day 2" },
  { title: "THU 20", shortLabel: "Day 3" },
  { title: "FRI 21", shortLabel: "Day 4" },
  { title: "SAT 22", shortLabel: "Day 5" },
];

const dayTitles = [
  "OPENING DAY",
  "DESIGN & AI DAY",
  "WEB3 & BLOCKCHAIN DAY",
  "DEVELOPMENT DAY",
  "NETWORKING DAY",
];

const dayDescriptions = [
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

    // Filter sessions with speakers
    const sessionsWithSpeakers = sessions.filter(
      (session) =>
        session.speaker_id &&
        session.speaker_id !== "NULL" &&
        session.speaker_id.trim() !== "",
    );

    scheduleData.push({
      title: dayTitles[dayIndex - 1] || `DAY ${dayIndex}`,
      description:
        dayDescriptions[dayIndex - 1] ||
        `Day ${dayIndex} activities and sessions.`,
      date: dayLabels[dayIndex - 1]?.title || `Day ${dayIndex}`,
      shortLabel: dayLabels[dayIndex - 1]?.shortLabel || `Day ${dayIndex}`,
      sessions: sessionsWithSpeakers,
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
