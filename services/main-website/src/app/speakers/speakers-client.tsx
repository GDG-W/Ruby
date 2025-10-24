"use client";

import clsx from "clsx";
import { useState } from "react";
import { Speaker } from "@/components/speaker/speaker";
import classes from "./page.module.scss";

type Day = "TUE" | "WED" | "THU" | "FRI" | "SAT";

const tags: { day: Day; label: string; dayNumber: number }[] = [
  { day: "TUE", label: "TUE 18", dayNumber: 1 },
  { day: "WED", label: "WED 19", dayNumber: 2 },
  { day: "THU", label: "THU 20", dayNumber: 3 },
  { day: "FRI", label: "FRI 21", dayNumber: 4 },
  { day: "SAT", label: "SAT 22", dayNumber: 5 },
];

interface SpeakerData {
  name: string;
  tagline: string;
  bio: string;
  image: string;
  twitter: string;
  linkedin: string;
  days: number[];
}

interface SpeakersClientProps {
  speakers: SpeakerData[];
}

export function SpeakersClient({ speakers }: SpeakersClientProps) {
  const [activeTag, setActiveTag] = useState<Day | "All">("All");

  // Filter speakers based on selected day
  const filteredSpeakers = activeTag === "All" 
    ? speakers 
    : speakers.filter(speaker => {
        const selectedTag = tags.find(tag => tag.day === activeTag);
        return selectedTag && speaker.days.includes(selectedTag.dayNumber);
      });

  return (
    <>
      <div className={classes.tags}>
        <button
          className={clsx(classes.tag, {
            [classes.active]: activeTag === "All",
          })}
          onClick={() => setActiveTag("All")}
          type="button"
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag.day}
            className={clsx(classes.tag, {
              [classes.active]: tag.day === activeTag,
            })}
            onClick={() => setActiveTag(tag.day)}
            type="button"
          >
            {tag.label}
          </button>
        ))}
      </div>
      <div className={classes.speakersGrid}>
        {filteredSpeakers.map((speaker, index) => (
          <Speaker
            reduceHeightOnMobile
            className={classes.speaker}
            image={speaker.image}
            name={speaker.name}
            tagline={speaker.tagline}
            bio={speaker.bio}
            socialMedia={[
              ...(speaker.twitter ? [{ type: "twitter" as const, url: speaker.twitter }] : []),
              ...(speaker.linkedin ? [{ type: "linkedin" as const, url: speaker.linkedin }] : []),
            ]}
            key={`${speaker.name}-${index}`}
          />
        ))}
      </div>
    </>
  );
}