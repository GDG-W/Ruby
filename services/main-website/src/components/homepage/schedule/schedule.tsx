import classes from "./schedule.module.scss";
import fiveDays from "@/assets/five-days.svg";
import { ScheduleDayGroup } from "@/components/schedule/schedule-day-group";
import { sampleScheduleData } from "@/lib/schedule";
import networkIcon from "@/assets/network.svg";
import Image from "next/image";

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
        <Image src={fiveDays} alt="Five Days" className={classes.fiveDays} />
      </div>
      <ScheduleDayGroup hideDescription days={sampleScheduleData} />
      <Image src={networkIcon} alt="Network" className={classes.networkIcon} />
    </section>
  );
}
