import type { ConferenceData, Speaker, Session } from "@/types/api";

export type DayKey = "Day 1" | "Day 2" | "Day 3" | "Day 4";

export interface SpeakerWithDays extends Speaker {
  days: number[];
}

/**
 * Maps speakers to the days they are presenting
 */
export function mapSpeakersToDays(conferenceData: ConferenceData): SpeakerWithDays[] {
  const speakers = conferenceData.Speakers;
  const dayKeys: DayKey[] = ["Day 1", "Day 2", "Day 3", "Day 4"];
  
  return speakers.map(speaker => {
    const speakerDays: number[] = [];
    
    dayKeys.forEach((dayKey, dayIndex) => {
      const daySessions = conferenceData[dayKey] || [];
      const hasSessions = daySessions.some((session: Session) => {
        return session.speaker_id === speaker.speaker_name;
      });
      
      if (hasSessions) {
        speakerDays.push(dayIndex + 1); // Day 1, Day 2, etc.
      }
    });
    
    return {
      ...speaker,
      days: speakerDays
    };
  });
}

/**
 * Filter speakers by day
 */
export function filterSpeakersByDay(speakers: SpeakerWithDays[], day: number | "All"): SpeakerWithDays[] {
  if (day === "All") {
    return speakers;
  }
  
  return speakers.filter(speaker => speaker.days.includes(day));
}