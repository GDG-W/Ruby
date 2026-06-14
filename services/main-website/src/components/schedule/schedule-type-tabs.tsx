"use client";

import clsx from "clsx";
import styles from "./schedule-type-tabs.module.scss";

interface ScheduleTypeTabsProps {
  activeTab: "standard" | "pro";
  onTabChange: (tab: "standard" | "pro") => void;
}

export function ScheduleTypeTabs({
  activeTab,
  onTabChange,
}: ScheduleTypeTabsProps) {
  return (
    <div className={styles.tabs}>
      <button
        type="button"
        className={clsx(styles.tab, activeTab === "standard" && styles.active)}
        onClick={() => onTabChange("standard")}
      >
        STANDARD
      </button>
      <button
        type="button"
        className={clsx(styles.tab, activeTab === "pro" && styles.active)}
        onClick={() => onTabChange("pro")}
      >
        PRO
      </button>
    </div>
  );
}
