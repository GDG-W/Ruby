import FiveDaysIcon from "@/assets/five-days.svg";
import { ScheduleDayGroup } from "@/components/schedule/schedule-day-group";
import { sampleScheduleData } from "@/lib/schedule";
import styles from "./page.module.scss";

export default function SchedulePage() {
  return (
    <div className={styles.schedulePage}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          EXPLORE OUR ALL
          <br />
          INCLUSIVE SCHEDULE
        </h1>
        <FiveDaysIcon className={styles.fiveDaysIcon} />
      </div>

      <ScheduleDayGroup days={sampleScheduleData} />
    </div>
  );
}
