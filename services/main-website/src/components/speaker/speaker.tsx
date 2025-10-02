"use client"

import { StaticImageData } from "next/image"
import classes from "./speaker.module.scss";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import clsx from "clsx";
import { SvgIcon } from "@/components/icon";
import type { IconName } from "@/types/icons";

type SocialMedia = "twitter" | "linkedin" | "github" | "instagram";

const socialMediaIcons: Record<SocialMedia, IconName> = {
  twitter: "twitter",
  linkedin: "linkedin",
  github: "facebook",
  instagram: "instagram"
} as const;

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
  reduceHeightOnMobile?: boolean;
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

const MOBILE_BREAKPOINT = 440;

export function Speaker({ image, name, tagline, bio, socialMedia, className, reduceHeightOnMobile }: SpeakerProps) {
  const [[background, hoverBackground]] = useState(colorCombos[Math.floor(Math.random() * colorCombos.length)]);
  const speakerDivRef = useRef<HTMLDivElement>(null);
  const cardState = useRef<"image" | "bio">("image");

  const windowWidth = useWindowWidth();

  //P.S Used a ref instead of a state variable so that I can use the ref in the event listeners
  const isOnMobileRef = useRef(windowWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    isOnMobileRef.current = windowWidth < MOBILE_BREAKPOINT;
  }, [windowWidth]);

  const heights = useMemo(() => {
    const isOnMobile = windowWidth < MOBILE_BREAKPOINT;

    return {
      imageWrapper: {
        open: isOnMobile ? 186 : 308,
      },
      info: {
        open: isOnMobile ? 242 : 404,
        minimized: isOnMobile ? 64 : 104
      }
    }
  }, [windowWidth])

  const [imageWrapperProps, imageWrapperApi] = useSpring(() => ({
    from: { height: heights.imageWrapper.open, backgroundColor: background, borderBottomLeftRadius: 2, borderBottomRightRadius: 2 },
    config: closedConfig
  }));

  const [imageProps, imageApi] = useSpring(() => ({
    from: { opacity: 1 }
  }))

  const [infoProps, infoApi] = useSpring(() => ({
    from: { height: heights.info.minimized },
    config: openConfig
  }));

  const [bioProps, bioApi] = useSpring(() => ({
    from: { opacity: 0 },
  }))

  useEffect(() => {
    speakerDivRef.current?.addEventListener("mouseenter", () => {
      if (cardState.current === "image" && !isOnMobileRef.current) {
        imageWrapperApi.start({ height: 300, backgroundColor: hoverBackground })
        infoApi.start({ height: 112 })
      }
    })

    speakerDivRef.current?.addEventListener("mouseleave", () => {
      if (cardState.current === "image" && !isOnMobileRef.current) {
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
      infoApi.start({ height: heights.info.open })

      imageApi.start({ opacity: 0 });
      bioApi.start({ opacity: 1 });
    } else {
      cardState.current = "image";

      imageWrapperApi.start({ height: heights.imageWrapper.open })
      infoApi.start({ height: heights.info.minimized })

      imageApi.start({ opacity: 1 });
      bioApi.start({ opacity: 0 });


      imageWrapperApi.update({ config: openConfig });
      infoApi.update({ config: openConfig });
    }
  }

  return (
    <article
      className={clsx(classes.speaker, className, { [classes.reduceHeightOnMobile]: reduceHeightOnMobile })}
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
      <animated.div className={classes.info} style={infoProps}>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.tagline}>{tagline}</p>
        <animated.div style={bioProps} className={classes.bioContent}>
          <p className={classes.description}>{bio}</p>
          <div className={classes.socialMedia}>
            {socialMedia.map((media) => {
              const iconName = socialMediaIcons[media.type];
              return (
                <a
                  key={media.type}
                  href={media.url}
                  className={classes.socialMediaLink}
                >
                  <SvgIcon name={iconName} />
                </a>
              )
            })}
          </div>
        </animated.div>
      </animated.div>
    </article>
  )
}
