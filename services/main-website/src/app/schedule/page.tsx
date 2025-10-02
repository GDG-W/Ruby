import { ScheduleDayGroup } from "@/components/schedule/schedule-day-group";
import styles from "./page.module.scss";
import { SvgIcon } from "@/components/icon";
import { sampleScheduleData } from "@/lib/schedule";

export default function SchedulePage() {
  return (
    <div className={styles.schedulePage}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          EXPLORE OUR ALL
          <br />
          INCLUSIVE SCHEDULE
        </h1>
        <SvgIcon name="five-days" className={styles.fiveDaysIcon} />
      </div>

      <ScheduleDayGroup days={sampleScheduleData} />
    </div>
  );
}
