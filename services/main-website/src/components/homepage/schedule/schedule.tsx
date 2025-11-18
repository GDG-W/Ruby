import Image from "next/image";
import fiveDays from "@/assets/five-days.svg";
import networkIcon from "@/assets/network.svg";
import { fetchAllSchedule, fetchConferenceData } from "@/lib/actions";
import type { Session, Speaker as APISpeaker } from "@/types/api";
import classes from "./schedule.module.scss";
import { ScheduleWrapper } from "./schedule-wrapper";

export type ScheduleData = {
  title: string;
  date: string;
  shortLabel: string;
  description: string;
  sessions: Session[];
  speakers: APISpeaker[];
};
function transformApiScheduleToScheduleData(
  allSchedule: Record<string, Session[]>,
  allSpeakers: APISpeaker[],
): ScheduleData[] {
  const dayMappings = {
    "Day 1": {
      title: "STUDENT DAY",
      date: "Tue 18",
      shortLabel: "Day 1",
    },
    "Day 2": {
      title: "DESIGN & PRODUCT DAY",
      date: "Wed 19",
      shortLabel: "Day 2",
    },
    "Day 3": {
      title: "WEB3, OPEN SOURCE & PRO DAY",
      date: "Thu 20",
      shortLabel: "Day 3",
    },
    "Day 4": {
      title: "ENGINEERING & CYBERSECURITY DAY",
      date: "Fri 21",
      shortLabel: "Day 4",
    },
    "Day 5": {
      title: "AI & CLOUD DAY",
      date: "Sat 22",
      shortLabel: "Day 5",
    },
  };

  return Object.entries(allSchedule)
    .filter(([_, sessions]) => sessions.length > 0)
    .map(([day, sessions]) => {
      const dayInfo = dayMappings[day as keyof typeof dayMappings] || {
        title: `${day.toUpperCase()} DAY`,
        date: day,
        shortLabel: day,
      };

      const limitedSessions = sessions.slice(0, 3);

      return {
        ...dayInfo,
        description: `Join us for a full day of ${dayInfo.title.toLowerCase()} sessions. From concept to execution, this track guides you through impactful practices and real-world innovation.`,
        sessions: limitedSessions,
        speakers: allSpeakers, // Use the full speakers data from the API
      };
    });
}

export async function ScheduleSection() {
  const [allSchedule, conferenceData] = await Promise.all([
    fetchAllSchedule(),
    fetchConferenceData(),
  ]);

  const transformedSchedule = transformApiScheduleToScheduleData(
    allSchedule as Record<string, Session[]>,
    conferenceData?.Speakers || [],
  );


  const _totalSessions = Object.values(allSchedule).reduce(
    (total, sessions) => total + sessions.length,
    0,
  );
  const _totalDays = Object.keys(allSchedule).length || 5;

  return (
    <section className={classes.schedule}>
      <div className={classes.hero}>
        <h2 className={classes.title}>
          ALL INCLUSIVE <br /> SESSIONS
        </h2>
        <p className={classes.description}>
          We promised to go bigger this year, and we're delivering. Five days of
          field-specific sessions that you don't want to miss! Yes, we have
          something for everyone.
        </p>
        <Image src={fiveDays} alt="Five Days" className={classes.fiveDays} />
      </div>
      <ScheduleWrapper scheduleData={transformedSchedule} />
      <Image src={networkIcon} alt="Network" className={classes.networkIcon} />
    </section>
  );
}
