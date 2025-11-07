"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/button/button";
import styles from "./hero.module.scss";

const MotionImage = motion(Image);

const words = [
  { text: "Meet", delay: 0.8 },
  { text: "the", delay: 1.02 },
  { text: "awesome", delay: 1.28 },
  { text: "Devfest", delay: 1.42 },
  { text: "Team", delay: 1.59 },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [polaroidsTriggered, setPolaroidsTriggered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    if (polaroidsTriggered) return;

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.1) setPolaroidsTriggered(true);
    });
    return () => unsubscribe();
  }, [scrollYProgress, polaroidsTriggered]);

  return (
    <div ref={heroRef} className={styles.hero}>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        className={styles.title}
        viewport={{ once: true, amount: 0.3 }}
      >
        {words.map((word, idx) => (
          <span key={idx} className={styles.wordMask}>
            <motion.span
              className={styles.word}
              variants={{
                visible: { y: "0%" },
                hidden: { y: "100%" },
              }}
              transition={{
                duration: 1,
                delay: word.delay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {word.text}
            </motion.span>
          </span>
        ))}
      </motion.h1>
      <div className={styles.content}>
        <MotionImage
          width={119}
          height={147}
          className={styles.sticker}
          src="/stickers/designers-make-it-pretty-and-usable.svg"
          alt="'Designers Make It Pretty And Usable' written underneath a smiley face"
          viewport={{ once: true, amount: 1 }}
          initial={{ rotate: -56.54, scale: 0, opacity: 0 }}
          whileInView={{ rotate: -11.54, scale: 1, opacity: 1 }}
          transition={{
            delay: 1.9,
            duration: 0.69,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
        <div className={styles.inner}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 1.73, duration: 0.6, ease: "linear" }}
            className={styles.description}
          >
            Meet the incredible superstars behind this year&apos;s edition of
            DevFest Lagos!
          </motion.p>
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 1.82,
              duration: 0.6,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            <Button className={styles.button} variant="tertiary">
              See All
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: "80%" }}
        animate={polaroidsTriggered ? { y: "10%" } : { y: "80%" }}
        transition={{ delay: 0, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className={styles.polaroids}
      >
        <MotionImage
          initial={{ scale: 0.8, opacity: 0, rotate: 15 }}
          animate={
            polaroidsTriggered
              ? { scale: 1, opacity: 1, rotate: -10 }
              : { scale: 0.8, opacity: 0, rotate: 15 }
          }
          transition={{
            scale: { delay: 0, duration: 1, ease: [0.33, 1, 0.68, 1] },
            opacity: { delay: 0, duration: 1, ease: [0.33, 1, 0.68, 1] },
            rotate: { delay: 0.37, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
          }}
          src="/team/polaroid-1.png"
          className={styles.polaroid}
          alt="Polaroid 1"
          width={320}
          height={427}
        />
        <MotionImage
          initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
          animate={
            polaroidsTriggered
              ? { scale: 1, opacity: 1, rotate: 0 }
              : { scale: 0.8, opacity: 0, rotate: 5 }
          }
          transition={{
            scale: { delay: 0, duration: 1, ease: [0.33, 1, 0.68, 1] },
            opacity: { delay: 0, duration: 1, ease: [0.33, 1, 0.68, 1] },
            rotate: { delay: 0, duration: 1, ease: [0.33, 1, 0.68, 1] },
          }}
          src="/team/polaroid-2.png"
          className={styles.polaroid}
          alt="Polaroid 2"
          width={320}
          height={427}
        />
        <MotionImage
          initial={{ scale: 0.8, opacity: 0, rotate: -14.01 }}
          animate={
            polaroidsTriggered
              ? { scale: 1, opacity: 1, rotate: 10 }
              : { scale: 0.8, opacity: 0, rotate: -14.01 }
          }
          transition={{
            scale: { delay: 0, duration: 1, ease: [0.33, 1, 0.68, 1] },
            opacity: { delay: 0, duration: 1, ease: [0.33, 1, 0.68, 1] },
            rotate: { delay: 0.44, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
          }}
          src="/team/polaroid-3.png"
          className={styles.polaroid}
          alt="Polaroid 3"
          width={320}
          height={427}
        />
      </motion.div>
    </div>
  );
}
