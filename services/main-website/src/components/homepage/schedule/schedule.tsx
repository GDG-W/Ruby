import classes from "./schedule.module.scss";
import fiveDays from "@/assets/five-days.svg";
import { ScheduleDayGroup } from "@/components/schedule/schedule-day-group";
import networkIcon from "@/assets/network.svg";
import Image from "next/image";
import { fetchAllSchedule } from "@/lib/actions";
import type { Session } from "@/types/api";

export async function ScheduleSection() {
  const allSchedule = await fetchAllSchedule();
  
  const totalSessions = Object.values(allSchedule).reduce((total, sessions) => total + sessions.length, 0);
  const totalDays = Object.keys(allSchedule).length || 5;

  return (
    <section className={classes.schedule}>
      <div className={classes.hero}>
        <h2 className={classes.title}>
          ALL INCLUSIVE <br /> SESSIONS
        </h2>
        <p className={classes.description}>
          We promised to go bigger this year and we are delivering. {totalDays} days of
          field specific sessions that you don't want to miss. Yes, we have
          something for everyone.
        </p>
        <Image src={fiveDays} alt="Five Days" className={classes.fiveDays} />
      </div>
      {totalSessions > 0 ? (
        <div className={classes.schedulePreview}>
          <p>{totalSessions} sessions across {totalDays} days</p>
          <p>Full schedule details coming soon...</p>
        </div>
      ) : (
        <div className={classes.schedulePreview}>
          <p>Schedule details coming soon...</p>
        </div>
      )}
      <Image src={networkIcon} alt="Network" className={classes.networkIcon} />
    </section>
  );
}
