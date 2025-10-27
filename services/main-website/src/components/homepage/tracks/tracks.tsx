"use client";

import Image, { StaticImageData } from "next/image";
import cloudTrack from "@/assets/tracks/cloud.png";
import cloudTrackOutline from "@/assets/tracks/cloud-outline.png";
import designTrack from "@/assets/tracks/design.png";
import designTrackOutline from "@/assets/tracks/design-outline.png";
import docsTrack from "@/assets/tracks/docs.png";
import docsTrackOutline from "@/assets/tracks/docs-outline.png";
import prodTrack from "@/assets/tracks/prod.png";
import prodTrackOutline from "@/assets/tracks/prod-outline.png";
import productTrack from "@/assets/tracks/product.png";
import productTrackOutline from "@/assets/tracks/product-outline.png";
import promptsTrack from "@/assets/tracks/prompts.png";
import promptsTrackOutline from "@/assets/tracks/prompts-outline.png";
import webTrack from "@/assets/tracks/web.png";
import webTrackOutline from "@/assets/tracks/web-outline.png";
import classes from "./tracks.module.scss";
import { motion } from "motion/react";
import { useState } from "react";

interface TrackImageProps {
  className: string;
  outlineImage: StaticImageData;
  outlineAlt: string;
  baseImage: StaticImageData;
  baseAlt: string;
}

const MotionImage = motion(Image);

function TrackImage({
  className,
  outlineImage,
  outlineAlt,
  baseImage,
  baseAlt,
}: TrackImageProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={className} onClick={() => setVisible(true)}>
      <Image src={outlineImage} alt={outlineAlt} />
      <MotionImage
        src={baseImage}
        alt={baseAlt}
        className={classes.baseImage}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1.3 },
        }}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        transition={{
          stiffness: 800,
          damping: 15,
          mass: 1,
          visualDuration: 0.15,
          type: "spring"
        }}
      />
    </div>
  );
}

export function Tracks() {
  return (
    <section className={classes.tracks}>
      <div className={classes.textWrapper}>
        <h2 className={classes.text}>
          {"Whatever you’re into, there's a track at".split(" ").map((word, index) => (
            <motion.span
              key={word}
              initial={{ translateY: "50%", opacity: 0, filter: "blurRadius(10px)" }}
              whileInView={{ translateY: 0, opacity: 1, filter: "blurRadius(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0, 0, 0, 1] }}
              className={classes.letter}
            >
              {word}{" "}
            </motion.span>
          ))}
          <span className={classes.subText}>
            {"DevFest Lagos made just for you.".split(" ").map((word, index) => (
              <motion.span
                key={word}
                initial={{ translateY: "50%", opacity: 0, filter: "blurRadius(10px)" }}
                whileInView={{ translateY: 0, opacity: 1, filter: "blurRadius(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 + index * 0.05, ease: [0, 0, 0, 1] }}
                className={classes.letter}
              >
                {word}{" "}
              </motion.span>
            ))}
            </span>
        </h2>
        <TrackImage
          className={classes.webTrack}
          outlineImage={webTrackOutline}
          outlineAlt="Web Track Outline"
          baseImage={webTrack}
          baseAlt="Web Track"
        />
        <TrackImage
          className={classes.promptTrack}
          outlineImage={promptsTrackOutline}
          outlineAlt="Prompts Track Outline"
          baseImage={promptsTrack}
          baseAlt="Prompts Track"
        />
        <TrackImage
          className={classes.productTrack}
          outlineImage={productTrackOutline}
          outlineAlt="Product Track Outline"
          baseImage={productTrack}
          baseAlt="Product Track"
        />
        <TrackImage
          className={classes.prodTrack}
          outlineImage={prodTrackOutline}
          outlineAlt="Production Track Outline"
          baseImage={prodTrack}
          baseAlt="Production Track"
        />
        <TrackImage
          className={classes.docsTrack}
          outlineImage={docsTrackOutline}
          outlineAlt="Documentation Track Outline"
          baseImage={docsTrack}
          baseAlt="Documentation Track"
        />
        <TrackImage
          className={classes.designTrack}
          outlineImage={designTrackOutline}
          outlineAlt="Design Track Outline"
          baseImage={designTrack}
          baseAlt="Design Track"
        />
        <TrackImage
          className={classes.cloudTrack}
          outlineImage={cloudTrackOutline}
          outlineAlt="Cloud Track Outline"
          baseImage={cloudTrack}
          baseAlt="Cloud Track"
        />
      </div>
    </section>
  );
}
