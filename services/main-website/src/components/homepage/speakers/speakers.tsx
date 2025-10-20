"use client";

import Image from "next/image";
import { useRef } from "react";
import carouselLeft from "@/assets/carousel-left.svg";
import carouselRight from "@/assets/carousel-right.svg";
import learnListenRepeat from "@/assets/learn-listen-repeat.svg";
import laptop from "@/assets/speakers-laptop.png";
import { Button } from "@/components/button/button";
import { Speaker } from "@/components/speaker/speaker";
import { demoSpeakers } from "@/lib/speakers";
import classes from "./speakers.module.scss";

export function Speakers() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -352, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 352, behavior: "smooth" });
    }
  };

  return (
    <section className={classes.speakers}>
      <Image
        src={laptop}
        alt="Speakers Laptop"
        className={classes.speakerLaptop}
      />
      <div className={classes.header}>
        <div className={classes.content}>
          <Image src={learnListenRepeat} alt="Learn Listen Repeat" className={classes.learnListenIcon} />
          <div>
            <h2 className={classes.title}>
              20<sup>+</sup> speakers
            </h2>
            <p className={classes.description}>
              Meet the speakers for this year’s edition. From industry pros to
              rising voices, they’re bringing real stories, hard-earned lessons,
              and bold ideas to spark your next big move.
            </p>
          </div>
          <Button>SEE FULL LINEUP</Button>
        </div>
        <div className={classes.controlButtons}>
          <button type="button" onClick={scrollLeft}>
            <Image src={carouselLeft} alt="Scroll left" />
          </button>
          <button type="button" onClick={scrollRight}>
            <Image src={carouselRight} alt="Scroll right" />
          </button>
        </div>
      </div>
      <div className={classes.carousel} ref={carouselRef}>
        {demoSpeakers
          .concat(demoSpeakers)
          .concat(demoSpeakers)
          .map((speaker) => (
            <Speaker {...speaker} key={speaker.name} />
          ))}
      </div>
    </section>
  );
}
