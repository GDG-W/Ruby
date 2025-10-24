"use client";

import Image from "next/image";
import learnListenRepeat from "@/assets/learn-listen-repeat.svg";
import carouselLeft from "@/assets/carousel-left.svg";
import carouselRight from "@/assets/carousel-right.svg";
import { Button } from "@/components/button/button";
import classes from "./speakers.module.scss";
import { motion } from "framer-motion";

interface SpeakersHeaderProps {
  speakerCount: number;
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

export function SpeakersHeader({ speakerCount, onScrollLeft, onScrollRight }: SpeakersHeaderProps) {
  return (
    <motion.div
      className={classes.header}
      initial={{
        y: 75,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
        ease: [0, 0, 0, 1],
      }}
    >
      <div className={classes.content}>
        <Image src={learnListenRepeat} alt="Learn Listen Repeat" className={classes.learnListenIcon} />
        <div>
          <h2 className={classes.title}>
            {speakerCount}<sup>+</sup> speakers
          </h2>
          <p className={classes.description}>
            Meet the speakers for this year's edition. From industry pros to
            rising voices, they're bringing real stories, hard-earned lessons,
            and bold ideas to spark your next big move.
          </p>
        </div>
        <Button>SEE FULL LINEUP</Button>
      </div>
      <div className={classes.controlButtons}>
        <button type="button" onClick={onScrollLeft}>
          <Image src={carouselLeft} alt="Scroll left" />
        </button>
        <button type="button" onClick={onScrollRight}>
          <Image src={carouselRight} alt="Scroll right" />
        </button>
      </div>
    </motion.div>
  );
}