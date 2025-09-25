"use client"

import { StaticImageData } from "next/image"
import classes from "./speaker.module.scss";
import Image from "next/image";
import { useState } from "react";

type SocialMedia = "twitter" | "linkedin" | "github" | "instagram";

export type SpeakerProps = {
  image: StaticImageData;
  name: string;
  tagline: string;
  bio: string;
  socialMedia: {
    type: SocialMedia;
    url: string;
  }[];
}

const colorCombos = [
  ["#CCF6C5", "#34A853"],
  ["#FFE7A5", "#F6B51E"],
  ["#C3ECF6", "#4285F4"],
  ["#F8D8D8", "#EA4335"]
]

export function Speaker({ image, name, tagline, bio, socialMedia }: SpeakerProps) {
  const [[background, foreground]] = useState(colorCombos[Math.floor(Math.random() * colorCombos.length)]);

  return (
    <article className={classes.speaker}>
      <div className={classes.imageWrapper} style={{ backgroundColor: background }}>
        <Image src={image} alt={name} className={classes.image} />
      </div>
      <div className={classes.info}>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.tagline}>{tagline}</p>
        <p className={classes.description}>{bio}</p>
        <div className={classes.socialMedia}>
          {socialMedia.map((media) => (
            <a
              key={media.type}
              href={media.url}
              className={classes.socialMediaLink}
            >
              {media.type}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
