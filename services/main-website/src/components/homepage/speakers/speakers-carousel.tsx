"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import laptopImage from "@/assets/speakers-laptop.png";
import type { SpeakerProps } from "@/components/speaker/speaker";
import { Speaker } from "@/components/speaker/speaker";
import classes from "./speakers.module.scss";

const MotionImage = motion(Image);

interface SpeakersCarouselProps {
  speakers: SpeakerProps[];
  carouselRef: React.RefObject<HTMLDivElement | null>;
  carouselInView: boolean;
}

export function SpeakersCarousel({
  speakers,
  carouselRef,
  carouselInView,
}: SpeakersCarouselProps) {
  const displaySpeakers = speakers.concat(speakers).concat(speakers);

  return (
    <>
      <div className={classes.carousel} ref={carouselRef}>
        {displaySpeakers.map((speaker, index) => (
          <motion.div
            initial="hidden"
            animate={carouselInView ? "visible" : "hidden"}
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
              },
            }}
            transition={{
              delay: 0.4 + index * 0.1,
              duration: 0.8,
              ease: [0, 0, 0, 1],
            }}
            key={`${speaker.name}-${index}`}
          >
            <Speaker {...speaker} />
          </motion.div>
        ))}
      </div>
      <MotionImage
        src={laptopImage}
        alt="Speakers Laptop"
        className={classes.speakerLaptop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </>
  );
}
