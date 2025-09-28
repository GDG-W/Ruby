"use client";

import { useState } from "react";
import classes from "./page.module.scss";
import clsx from "clsx";
import { demoSpeakers } from "@/lib/speakers";
import { Speaker } from "@/components/speaker/speaker";

type Day = "TUE" | "WED" | "THU" | "FRI" | "SAT";

const tags: { day: Day; label: string }[] = [
  { day: "TUE", label: "TUE 18" },
  { day: "WED", label: "WED 19" },
  { day: "THU", label: "THU 20" },
  { day: "FRI", label: "FRI 21" },
  { day: "SAT", label: "SAT 22" },
];

export default function SpeakersPage() {
  const [activeTag, setActiveTag] = useState<Day | "All">(tags[0].day);

  return (
    <div className={classes.speakersPage}>
      <h1 className={classes.title}>
        Meet our 2025 <br /> Speakers
      </h1>
      <div className={classes.tags}>
        <button
          className={clsx(classes.tag, { [classes.active]: activeTag === "All" })}
          onClick={() => setActiveTag("All")}
          type="button"
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag.day}
            className={clsx(classes.tag, { [classes.active]: tag.day === activeTag })}
            onClick={() => setActiveTag(tag.day)}
            type="button"
          >
            {tag.label}
          </button>
        ))}
      </div>
      <div className={classes.speakersGrid}>
        {demoSpeakers.concat(demoSpeakers).concat(demoSpeakers).map(speaker => <Speaker reduceHeightOnMobile className={classes.speaker} {...speaker} key={speaker.name} />)}
      </div>
    </div>
  )
}
