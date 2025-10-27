"use server";

import { fetchConferenceData } from "@/lib/actions";
import { mapSpeakersToDays } from "@/lib/speakerUtils";
import { SpeakersClient } from "./speakers-client";
import classes from "./page.module.scss";

export default async function SpeakersPage() {
  const conferenceData = await fetchConferenceData();

  if (!conferenceData) {
    return (
      <div className={classes.speakersPage}>
        <h1 className={classes.title}>
          Meet our 2025 <br /> Speakers
        </h1>
        <p>Unable to load speakers data</p>
      </div>
    );
  }

  // Map speakers to their presentation days
  const speakersWithDays = mapSpeakersToDays(conferenceData);

  // Transform API speakers to match component props
  const transformedSpeakers = speakersWithDays.map((speaker) => ({
    name: speaker.speaker_name,
    tagline: speaker.speaker_tagline,
    bio: speaker.speaker_bio,
    image: speaker.speaker_img,
    twitter: speaker.speaker_twitter,
    linkedin: speaker.speaker_linkedin,
    days: speaker.days,
  }));

  return (
    <div className={classes.speakersPage}>
      <h1 className={classes.title}>
        Meet our 2025 <br /> Speakers
      </h1>
      <SpeakersClient speakers={transformedSpeakers} />
    </div>
  );
}
