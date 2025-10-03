import classes from "./schedule.module.scss";
import FiveDays from "@/assets/five-days.svg";
import { ScheduleDayGroup } from "@/components/schedule/schedule-day-group";
import { sampleScheduleData } from "@/lib/schedule";
import NetworkIcon from "@/assets/network.svg";

export function ScheduleSection() {
  return (
    <section className={classes.schedule}>
      <div className={classes.hero}>
        <h2 className={classes.title}>
          ALL INCLUSIVE <br /> SESSIONS
        </h2>
        <p className={classes.description}>
          We promised to go bigger this year and we are delivering. 5 days of
          field specific sessions that you don’t want to miss. Yes, we have
          something for everyone.
        </p>
        <FiveDays className={classes.fiveDays} />
      </div>
      <ScheduleDayGroup hideDescription days={sampleScheduleData} />
      <NetworkIcon className={classes.networkIcon} />
    </section>
  );
}
