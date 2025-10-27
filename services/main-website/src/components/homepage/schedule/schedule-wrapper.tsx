"use client";

import { ScheduleDayGroup } from "@/components/schedule/schedule-day-group";

interface ScheduleWrapperProps {
  scheduleData: any[];
}

export function ScheduleWrapper({ scheduleData }: ScheduleWrapperProps) {
  if (scheduleData.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p>Schedule details coming soon...</p>
      </div>
    );
  }

  return <ScheduleDayGroup hideDescription days={scheduleData} />;
}
