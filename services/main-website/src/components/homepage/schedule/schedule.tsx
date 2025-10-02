import classes from "./schedule.module.scss";
import { SvgIcon } from "@/components/icon";
import { ScheduleDayGroup } from "@/components/schedule/schedule-day-group";
import { sampleScheduleData } from "@/lib/schedule";

export function ScheduleSection() {
  return (
    <section className={classes.schedule}>
      <div className={classes.hero}>
        <h2 className={classes.title}>
          ALL INCLUSIVE <br /> SESSIONS
        </h2>
        <p className={classes.description}>
          We promised to go bigger this year and we are delivering. 5 days of field specific sessions that you don’t want to miss. Yes, we have something for everyone.
        </p>
        <SvgIcon name="five-days" className={classes.fiveDays} />
      </div>
      <ScheduleDayGroup hideDescription days={sampleScheduleData} />
      <SvgIcon name="network" className={classes.networkIcon} />
    </section>
  )
}
