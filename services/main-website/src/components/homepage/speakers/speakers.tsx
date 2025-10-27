import laptop from "@/assets/speakers-laptop.png";
import { fetchSpeakers } from "@/lib/actions";
import { demoSpeakers } from "@/lib/speakers";
import type { Speaker as ApiSpeaker } from "@/types/api";
import classes from "./speakers.module.scss";
import { SpeakersWrapper } from "./speakers-wrapper";

function transformApiSpeakerToSpeakerProps(apiSpeaker: ApiSpeaker) {
  const socialMedia = [];

  if (apiSpeaker.speaker_twitter) {
    socialMedia.push({
      type: "twitter" as const,
      url: apiSpeaker.speaker_twitter,
    });
  }

  if (apiSpeaker.speaker_linkedin) {
    socialMedia.push({
      type: "linkedin" as const,
      url: apiSpeaker.speaker_linkedin,
    });
  }

  return {
    name: apiSpeaker.speaker_name,
    tagline: apiSpeaker.speaker_tagline,
    bio: apiSpeaker.speaker_bio,
    image: apiSpeaker.speaker_img,
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
      <SpeakersWrapper speakers={speakers} laptopImage={laptop} />
    </section>
  );
}
