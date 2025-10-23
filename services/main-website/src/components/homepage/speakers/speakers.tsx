"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import carouselLeft from "@/assets/carousel-left.svg";
import carouselRight from "@/assets/carousel-right.svg";
import learnListenRepeat from "@/assets/learn-listen-repeat.svg";
import laptop from "@/assets/speakers-laptop.png";
import { Button } from "@/components/button/button";
import { Speaker } from "@/components/speaker/speaker";
import { demoSpeakers } from "@/lib/speakers";
import classes from "./speakers.module.scss";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const MotionImage = motion(Image);

export function Speakers() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselInView, setCarouselInView] = useState(false);

  useIntersectionObserver(carouselRef, {
    once: true,
    onEnter: () => {
      setCarouselInView(true)
    }
  })

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
      </motion.div>
      <div className={classes.carousel} ref={carouselRef}>
        {demoSpeakers
          .concat(demoSpeakers)
          .concat(demoSpeakers)
          .map((speaker, index) => (
            <motion.div
              initial={"hidden"}
              animate={carouselInView ? "visible": " hidden"}
              variants={{
                hidden: {
                  filter: "blur(20px)",
                  x: 160,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                }
              }}
              transition={{
                delay: 0.4 + index * 0.1,
                duration: 0.8,
                ease: [0, 0, 0, 1],
              }}
              key={speaker.name}
            >
              <Speaker {...speaker} />
            </motion.div>
          ))}
      </div>
      <MotionImage
        src={laptop}
        alt="Speakers Laptop"
        className={classes.speakerLaptop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </section>
  );
}
