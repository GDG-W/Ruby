import Image from "next/image";
import fiveDays from "@/assets/five-days.svg";
import networkIcon from "@/assets/network.svg";
import { fetchAllSchedule } from "@/lib/actions";
import type { Session } from "@/types/api";
import classes from "./schedule.module.scss";
import { ScheduleWrapper } from "./schedule-wrapper";

function transformApiScheduleToScheduleData(
  allSchedule: Record<string, Session[]>,
) {
  const dayMappings = {
    "Day 1": {
      title: "OPENING DAY",
      date: "Tue 18",
      shortLabel: "Day 1",
    },
    "Day 2": {
      title: "DESIGN & AI DAY",
      date: "Wed 19",
      shortLabel: "Day 2",
    },
    "Day 3": {
      title: "WEB3 & BLOCKCHAIN DAY",
      date: "Thu 20",
      shortLabel: "Day 3",
    },
    "Day 4": {
      title: "DEVELOPMENT DAY",
      date: "Fri 21",
      shortLabel: "Day 4",
    },
    "Day 5": {
      title: "NETWORKING DAY",
      date: "Sat 22",
      shortLabel: "Day 5",
    },
  };

  return Object.entries(allSchedule)
    .filter(([_, sessions]) => sessions.length > 0)
    .map(([day, sessions]) => {
      const dayInfo = dayMappings[day as keyof typeof dayMappings] || {
        title: day.toUpperCase() + " DAY",
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
              speaker_id: session.speaker_id!,
              speaker_name: session.speaker_name!,
              speaker_tagline: "",
              speaker_bio: "",
              speaker_img: "",
              speaker_twitter: "",
              speaker_linkedin: "",
            });
          }
          return acc;
        }, [] as any[]);

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
  const totalSessions = Object.values(allSchedule).reduce(
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
