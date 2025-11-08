"use client";

import { animated, useSpring } from "@react-spring/web";
import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { SocialIcon } from "../socials/SocialIcon";
// Removed Next.js Image import to use regular img tags
import classes from "./speaker.module.scss";

type SocialMedia = "twitter" | "linkedin" | "github" | "instagram";

export type SpeakerProps = {
  image: string;
  name: string;
  tagline: string;
  bio: string;
  socialMedia?: {
    type: SocialMedia;
    url: string;
  }[];
  className?: string;
  reduceHeightOnMobile?: boolean;
};

const colorCombos = [
  ["#CCF6C5", "#34A853"],
  ["#FFE7A5", "#F6B51E"],
  ["#C3ECF6", "#4285F4"],
  ["#F8D8D8", "#EA4335"],
];

const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

const closedConfig = {
  tension: 400,
  friction: 20,
  mass: 0.3,
};

const openConfig = {
  tension: 500,
  friction: 25,
  mass: 0.4,
};

const MOBILE_BREAKPOINT = 440;

export function Speaker({
  image,
  name,
  tagline,
  bio,
  socialMedia,
  className,
  reduceHeightOnMobile,
}: SpeakerProps) {
  const [[background, hoverBackground]] = useState(
    colorCombos[hashString(name) % colorCombos.length],
  );
  const speakerDivRef = useRef<HTMLDivElement>(null);
  const cardState = useRef<"image" | "bio">("image");

  const windowWidth = useWindowWidth();

  //P.S Used a ref instead of a state variable so that I can use the ref in the event listeners
  const isOnMobileRef = useRef(
    typeof window !== "undefined"
      ? window.innerWidth < MOBILE_BREAKPOINT
      : false,
  );

  useEffect(() => {
    const currentWidth =
      typeof window !== "undefined" ? window.innerWidth : windowWidth;
    if (currentWidth > 0) {
      isOnMobileRef.current = currentWidth < MOBILE_BREAKPOINT;
    }
  }, [windowWidth]);

  const heights = useMemo(() => {
    // Use window.innerWidth for immediate check, fallback to windowWidth hook
    const currentWidth =
      typeof window !== "undefined" ? window.innerWidth : windowWidth;
    const isOnMobile = currentWidth > 0 && currentWidth < MOBILE_BREAKPOINT;
    const isMobileAndReducedHeight = isOnMobile && reduceHeightOnMobile;

    return {
      imageWrapper: {
        open: isMobileAndReducedHeight ? 186 : 308,
      },
      info: {
        open: isMobileAndReducedHeight ? 242 : 404,
        minimized: isMobileAndReducedHeight ? 64 : 104,
      },
    };
  }, [windowWidth]);

  const [imageWrapperProps, imageWrapperApi] = useSpring(() => ({
    from: {
      height: heights.imageWrapper.open,
      backgroundColor: background,
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 2,
    },
    config: closedConfig,
  }));

  const [imageProps, imageApi] = useSpring(() => ({
    from: { opacity: 1 },
  }));

  const [infoProps, infoApi] = useSpring(() => ({
    from: { height: heights.info.minimized },
    config: openConfig,
  }));

  const [bioProps, bioApi] = useSpring(() => ({
    from: { opacity: 0 },
  }));

  useEffect(() => {
    speakerDivRef.current?.addEventListener("mouseenter", () => {
      if (cardState.current === "image" && !isOnMobileRef.current) {
        imageWrapperApi.start({
          height: 300,
          backgroundColor: hoverBackground,
        });
        infoApi.start({ height: 112 });
      }
    });

    speakerDivRef.current?.addEventListener("mouseleave", () => {
      if (cardState.current === "image" && !isOnMobileRef.current) {
        imageWrapperApi.start({ height: 308, backgroundColor: background });
        infoApi.start({ height: 104 });
      }
    });
  }, [imageWrapperApi, infoApi, background]);

  const onClickImageWrapper = () => {
    if (cardState.current === "image") {
      cardState.current = "bio";

      imageWrapperApi.update({ config: closedConfig });
      infoApi.update({ config: closedConfig });

      imageWrapperApi.start({
        height: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: hoverBackground,
      });
      infoApi.start({ height: heights.info.open });

      imageApi.start({ opacity: 0 });
      bioApi.start({ opacity: 1 });
    } else {
      cardState.current = "image";

      imageWrapperApi.start({ height: heights.imageWrapper.open });
      infoApi.start({ height: heights.info.minimized });

      imageApi.start({ opacity: 1 });
      bioApi.start({ opacity: 0 });

      imageWrapperApi.update({ config: openConfig });
      infoApi.update({ config: openConfig });
    }
  };

  return (
    <article
      className={clsx(classes.speaker, className, {
        [classes.reduceHeightOnMobile]: reduceHeightOnMobile,
      })}
      ref={speakerDivRef}
      onClick={onClickImageWrapper}
    >
      <animated.div
        className={classes.imageWrapper}
        style={{ ...imageWrapperProps }}
      >
        <animated.div style={imageProps} className={classes.image}>
          <img width="100%" src={image} alt={name} />
        </animated.div>
      </animated.div>
      <animated.div className={classes.info} style={infoProps}>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.tagline}>{tagline}</p>
        <animated.div style={bioProps} className={classes.bioContent}>
          <p className={classes.description}>{bio}</p>
          <div className={classes.socialMediaLinks}>
            {socialMedia?.map((media) => (
              <a
                key={media.type}
                href={media.url}
                aria-label={media.type}
                className={classes.socialMediaLink}
                target="_blank"
              >
                <SocialIcon name={media.type} size={24} />
              </a>
            ))}
          </div>
        </animated.div>
      </animated.div>
    </article>
  );
}
