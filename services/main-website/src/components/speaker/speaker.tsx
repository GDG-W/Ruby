"use client"

import { StaticImageData } from "next/image"
import classes from "./speaker.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

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
  className?: string;
}

const colorCombos = [
  ["#CCF6C5", "#34A853"],
  ["#FFE7A5", "#F6B51E"],
  ["#C3ECF6", "#4285F4"],
  ["#F8D8D8", "#EA4335"]
]

const closedConfig = {
  tension: 400,
  friction: 20,
  mass: 0.3
}

const openConfig = {
  tension: 500,
  friction: 25,
  mass: 0.4
}

export function Speaker({ image, name, tagline, bio, socialMedia, className }: SpeakerProps) {
  const [[background, hoverBackground]] = useState(colorCombos[Math.floor(Math.random() * colorCombos.length)]);
  const speakerDivRef = useRef<HTMLDivElement>(null);
  const cardState = useRef<"image" | "bio">("image");

  const [imageWrapperProps, imageWrapperApi] = useSpring(() => ({
    from: { height: 308, backgroundColor: background, borderBottomLeftRadius: 2, borderBottomRightRadius: 2 },
    config: closedConfig
  }));

  const [imageProps, imageApi] = useSpring(() => ({
    from: { opacity: 1 }
  }))

  const [infoProps, infoApi] = useSpring(() => ({
    from: { height: 104 },
    config: openConfig
  }));

  const [bioProps, bioApi] = useSpring(() => ({
    from: { opacity: 0 },
  }))

  useEffect(() => {
    speakerDivRef.current?.addEventListener("mouseenter", () => {
      if (cardState.current === "image") {
        imageWrapperApi.start({ height: 300, backgroundColor: hoverBackground })
        infoApi.start({ height: 112 })
      }
    })

    speakerDivRef.current?.addEventListener("mouseleave", () => {
      if (cardState.current === "image") {
        imageWrapperApi.start({ height: 308, backgroundColor: background })
        infoApi.start({ height: 104 })
      }
    })
  }, [imageWrapperApi, infoApi, background])

  const onClickImageWrapper = () => {
    if (cardState.current === "image") {
      cardState.current = "bio";

      imageWrapperApi.update({ config: closedConfig });
      infoApi.update({ config: closedConfig });

      imageWrapperApi.start({ height: 8, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: hoverBackground })
      infoApi.start({ height: 404 })

      imageApi.start({ opacity: 0 });
      bioApi.start({ opacity: 1 });
    } else {
      cardState.current = "image";

      imageWrapperApi.start({ height: 308 })
      infoApi.start({ height: 104 })

      imageApi.start({ opacity: 1 });
      bioApi.start({ opacity: 0 });


      imageWrapperApi.update({ config: openConfig });
      infoApi.update({ config: openConfig });
    }
  }

  const onClickInfo = () => {

  }

  return (
    <article
      className={`${classes.speaker} ${className || ''}`}
      ref={speakerDivRef}
      onClick={onClickImageWrapper}
    >
      <animated.div
        className={classes.imageWrapper}
        style={{ ...imageWrapperProps }}
      >
        <animated.div style={imageProps} className={classes.image}>
          <Image src={image} alt={name} />
        </animated.div>
      </animated.div>
      <animated.div className={classes.info} style={infoProps} onClick={onClickInfo}>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.tagline}>{tagline}</p>
        <animated.div style={bioProps} className={classes.bioContent}>
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
        </animated.div>
      </animated.div>
    </article>
  )
}
