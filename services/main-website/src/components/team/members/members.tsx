"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SocialIcon } from "@/components/socials/SocialIcon";
import { members } from "@/data/members";
import styles from "./members.module.scss";

const CAROUSEL_INTERVAL = 5000; // 5 seconds

const Members = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: "y",
      loop: true,
      align: (viewSize) => viewSize * 0.375,
      duration: 25, // Smooth transition speed (embla uses spring physics)
    },
    [Autoplay({ delay: CAROUSEL_INTERVAL, stopOnInteraction: false })],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className={styles.members}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          The <br className={styles.lineBreak} /> Team
        </h2>
      </div>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <ul className={styles.emblaContainer}>
          {members.map((member, index) => {
            const isActive = index === selectedIndex;

            return (
              <motion.li
                className={styles.emblaSlide}
                key={`${member.firstName}-${index}`}
                animate={{ opacity: isActive ? 1 : 0.1 }}
                transition={{
                  duration: 0.8,
                  ease: !isActive ? "easeOut" : "easeIn",
                }}
              >
                <div className={styles.largeItem}>
                  <div className={styles.info}>
                    <p className={styles.firstName}>{member.firstName}</p>
                    <p className={styles.lastName}>{member.lastName}</p>
                    <p className={styles.role}>did {member.role}</p>
                    <div className={styles.social}>
                      {member.socialMedia.map((social) => (
                        <a
                          target="_blank"
                          href={social.url}
                          key={social.type}
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                        >
                          <SocialIcon name={social.type.toLowerCase()} size={50} />
                        </a>
                      ))}
                    </div>
                  </div>
                  <Image
                    width={320}
                    height={427}
                    src={member.image}
                    alt={member.firstName}
                    className={`${styles.image} ${isActive ? styles.active : ''}`}
                  />
                  <div className={styles.other}>
                    <p className={styles.question}>{member.question}</p>
                    <p className={styles.answer}>"{member.answer}"</p>
                    <div className={styles.music}>
                      <Image
                        width={16}
                        height={16}
                        src="/yt-music.svg"
                        alt="YouTube Music"
                        className={styles.youtubeMusic}
                      />
                      <p>Listening to </p>
                      <p className={styles.song}>
                        {member.music.song} - {member.music.artist}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <Image
        src="/stickers/al:ml-prompt-like-a-pro.svg"
        alt="AI/ML Prompt Like a Pro"
        width={171}
        height={159}
        className={styles.sticker1}
      />
      <Image
        src="/stickers/built-for-the-web.svg"
        alt="Built for the Web"
        width={104}
        height={172}
        className={styles.sticker2}
      />
    </section>
  );
};

export default Members;
