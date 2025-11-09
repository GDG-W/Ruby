import Image from "next/image";
import fiveDays from "@/assets/five-days.svg";
import networkIcon from "@/assets/network.svg";
import { fetchAllSchedule } from "@/lib/actions";
import type { Session } from "@/types/api";
import classes from "./schedule.module.scss";
import { ScheduleWrapper } from "./schedule-wrapper";

type Speaker = {
  speaker_id: string;
  speaker_name: string;
  speaker_tagline: string;
  speaker_bio: string;
  speaker_img: string;
  speaker_twitter: string;
  speaker_linkedin: string;
};

export type ScheduleData = {
  title: string;
  date: string;
  shortLabel: string;
  description: string;
  sessions: Session[];
  speakers: Speaker[];
};
function transformApiScheduleToScheduleData(
  allSchedule: Record<string, Session[]>,
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
      title: "ENGINEERING & SECURITY",
      date: "Fri 21",
      shortLabel: "Day 4",
    },
    "Day 5": {
      title: "AI & CLOUD",
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

      // Get unique speakers from the sessions
      const uniqueSpeakers = limitedSessions
        .filter((session) => session.speaker_name && session.speaker_id)
        .reduce((acc, session) => {
          if (
            !acc.some((speaker) => speaker.speaker_id === session.speaker_id)
          ) {
            acc.push({
              // biome-ignore lint/style/noNonNullAssertion: We're certain the value will be defined
              speaker_id: session.speaker_id!,
              // biome-ignore lint/style/noNonNullAssertion: We're certain the value will be defined
              speaker_name: session.speaker_name!,
              speaker_tagline: "",
              speaker_bio: "",
              speaker_img: "",
              speaker_twitter: "",
              speaker_linkedin: "",
            });
          }
          return acc;
        }, [] as Speaker[]);

      return {
        ...dayInfo,
        description: `Join us for a full day of ${dayInfo.title.toLowerCase()} sessions. From concept to execution, this track guides you through impactful practices and real-world innovation.`,
        sessions: limitedSessions,
        speakers: uniqueSpeakers,
      };
    });
}

export async function ScheduleSection() {
  const allSchedule = await fetchAllSchedule();

  const transformedSchedule = transformApiScheduleToScheduleData(
    allSchedule as Record<string, Session[]>,
  );
  const _totalSessions = Object.values(allSchedule).reduce(
    (total, sessions) => total + sessions.length,
    0,
  );
  const totalDays = Object.keys(allSchedule).length || 5;

  return (
    <section className={classes.schedule}>
      <div className={classes.hero}>
        <h2 className={classes.title}>
          ALL INCLUSIVE <br /> SESSIONS
        </h2>
        <p className={classes.description}>
          We promised to go bigger this year and we are delivering. {totalDays}{" "}
          days of field specific sessions that you don't want to miss. Yes, we
          have something for everyone.
        </p>
        <Image src={fiveDays} alt="Five Days" className={classes.fiveDays} />
      </div>
      <ScheduleWrapper scheduleData={transformedSchedule} />
      <Image src={networkIcon} alt="Network" className={classes.networkIcon} />
    </section>
  );
}
