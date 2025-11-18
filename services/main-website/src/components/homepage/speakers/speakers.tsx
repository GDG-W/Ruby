import { fetchSpeakers } from "@/lib/actions";
import { demoSpeakers } from "@/lib/speakers";
import type { Speaker as ApiSpeaker } from "@/types/api";
import classes from "./speakers.module.scss";
import { SpeakersWrapper } from "./speakers-wrapper";

function transformApiSpeakerToSpeakerProps(apiSpeaker: ApiSpeaker) {
  const socialMedia = [];

  if (apiSpeaker.speaker_twitter && apiSpeaker.speaker_twitter !== "NULL") {
    socialMedia.push({
      type: "twitter" as const,
      url: apiSpeaker.speaker_twitter,
    });
  }

  if (apiSpeaker.speaker_linkedin && apiSpeaker.speaker_linkedin !== "NULL") {
    socialMedia.push({
      type: "linkedin" as const,
      url: apiSpeaker.speaker_linkedin,
    });
  }

  // Use speaker image directly (all images in API are valid URLs)
  const speakerImage = apiSpeaker.speaker_img;

  return {
    name: apiSpeaker.speaker_name,
    tagline: apiSpeaker.speaker_tagline,
    bio: apiSpeaker.speaker_bio,
    image: speakerImage,
    socialMedia,
  };
}

export async function Speakers() {
  const apiSpeakers = await fetchSpeakers();

  const speakers =
    apiSpeakers.length > 0
      ? apiSpeakers.map(transformApiSpeakerToSpeakerProps)
      : demoSpeakers;

  return (
    <section className={classes.speakers}>
      <SpeakersWrapper speakers={speakers} />
    </section>
  );
}
