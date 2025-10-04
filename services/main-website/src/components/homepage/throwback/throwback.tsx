"use client";

import Image from "next/image";
import { motion, useAnimate } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import styles from "./throwback.module.scss";

import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { Button } from "@/components/button/button";

const MotionImage = motion(Image);

const memories = [
  {
    width: 765,
    height: 379,
    type: "tweet",
    src: "/images/@dev_leoo-tweet.png",
    alt: "@dev_leoo's tweet on DevFest Lagos 2024 saying: 'No tech event in the country beats #DevFestLagos!Good job team @gdglagos #DevFestLagos2024'",
  },
  {
    width: 488,
    height: 488,
    type: "photo",
    src: "/images/devfest-2024-dancing.png",
    alt: "Some attendees of DevFest Lagos 2024 dancing during the after-party",
  },
  {
    width: 750,
    height: 413,
    type: "tweet",
    src: "/images/@Motushbae-tweet.png",
    alt: "@Motushbae's tweet on DevFest Lagos 2024 saying: 'Last Saturday, I had an incredible time at #DevFestLagos leading a codelab on OAuth 2.0. I walked participants through the concepts and hands-on implementation, it was rewarding to see so much interaction and learning. Thanks to everyone who came through—y’all made it engaging.'",
  },
  {
    width: 517,
    height: 589,
    type: "photo",
    src: "/images/devfest-2024-trio.png",
    alt: "Three attendees of DevFest Lagos 2024 at the DevFest photo booth",
  },
  {
    width: 750,
    height: 380,
    type: "tweet",
    src: "/images/@adesay0-tweet.png",
    alt: "@adesay0's tweet on DevFest Lagos 2024 saying: 'My very first devfest. My &ldquo;devfirst&rdquo;. I had so much fun and met new people. I must be there next year *if I never japa sha*'",
  },
  {
    width: 450,
    height: 510,
    type: "photo",
    src: "/images/devfest-2024-speaker.png",
    alt: "John Ohio speaking at DevFest Lagos 2024 on 'Design Thinking for Problem-Solving: Beyond UX Design'",
  },
  {
    width: 750,
    height: 446,
    type: "tweet",
    src: "/images/@mutiatadebimpe-tweet.png",
    alt: "@mutiatadebimpe's tweet on DevFest Lagos 2024 saying: 'I had an incredible time at #DevFest2024! I met amazing people, gained valuable insights and had a blast! Huge thanks to the team for putting together such an amazing event!@gdglagos #DevFestLagos #Networking #Techcommunity #GrowthJourney'",
  },
];

const DELAY = 3.5;
const DURATION = 5;

interface MemoryItemProps {
  idx: number;
  isPaused: boolean;
  memory: (typeof memories)[0];
}

const MemoryItem = ({ memory, idx, isPaused }: MemoryItemProps) => {
  const animationRef = useRef<ReturnType<typeof animate>>(null);
  const [scope, animate] = useAnimate();
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    animationRef.current = animate(
      scope.current,
      {
        y: "100vh",
        scale: 1.4,
        opacity: [0, 1, 1],
      },
      {
        ease: "linear",
        delay: idx * DELAY,
        duration: DURATION,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: (memories.length - 1) * DELAY,
        opacity: {
          ease: "linear",
          times: [0, 0.2, 1],
          delay: idx * DELAY,
          duration: DURATION,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: (memories.length - 1) * DELAY,
        },
      },
    );
  }, [scope, animate, idx]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && animationRef.current) {
        animationRef.current.play();
        if (!isPausedRef.current) animationRef.current.speed = 1;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (animationRef.current) {
      if (isPaused) {
        animate(
          animationRef.current,
          { speed: 0.1 },
          {
            duration: 0.6,
            ease: "easeIn",
          },
        );
      } else {
        animate(
          animationRef.current,
          { speed: 1 },
          {
            duration: 0.7,
            ease: "easeOut",
          },
        );
      }
    }
  }, [isPaused, animate]);

  return (
    <MotionImage
      ref={scope}
      src={memory.src}
      alt={memory.alt}
      width={memory.width}
      height={memory.height}
      className={styles[memory.type]}
      initial={{ opacity: 0, scale: 1, x: "-50%", y: "-150%" }}
    />
  );
};

const Throwback = () => {
  const isTouchDevice = useIsTouchDevice();
  const [isPaused, setIsPaused] = useState(false);

  const props = isTouchDevice ? { onClick: () => setIsPaused(!isPaused) } : {
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
  };

  return (
    <div className={styles.throwback}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Let's take you down memory lane</h2>
          <p className={styles.description}>
            DevFest Lagos 2024 was unforgettable. A time was thoroughly had and
            no be by cho cho cho, we have receipts.
          </p>
          <div className={styles.buttons}>
            <Button
              type="link"
              className={styles.button}
              href="https://youtu.be/4HeUaiZLZ34?si=_-n9psHWDKjv36wL"
            >
              Watch 2024 Recap
            </Button>
            <Button
              type="link"
              variant="secondary"
              className={styles.button}
              href="https://photos.app.goo.gl/LyuJgDDFsefN2r5i6"
            >
              View 2024 Photos
            </Button>
          </div>
        </div>
        <div className={styles.road} {...props}>
          <Image
            alt="road"
            width={250}
            height={914}
            src="/lane.svg"
            className={styles.lane}
          />
          {memories.map((memory, idx) => (
            <MemoryItem
              key={idx}
              idx={idx}
              memory={memory}
              isPaused={isPaused}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Throwback;
