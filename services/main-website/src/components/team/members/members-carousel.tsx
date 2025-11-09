"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { SocialIcon } from "@/components/socials/SocialIcon";
import type { Member } from "@/data/members";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import sharedStyles from "./members.module.scss";
import styles from "./members-carousel.module.scss";

const CAROUSEL_INTERVAL = 5000; // 5 seconds

interface MembersCarouselProps {
  members: readonly Member[];
}

export const MembersCarousel = ({ members }: MembersCarouselProps) => {
  const width = useWindowWidth();
  const isMobile = width <= 950;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: "y",
      loop: true,
      align: (viewSize: number) =>
        isMobile ? viewSize * 0.225 : viewSize * 0.375,
      duration: 25,
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

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit({
      axis: "y",
      loop: true,
      align: (viewSize: number) =>
        isMobile ? viewSize * 0.225 : viewSize * 0.375,
      duration: 25,
    });
  }, [isMobile, emblaApi]);

  return (
    <div className={styles.emblaViewport} ref={emblaRef}>
      <ul className={styles.emblaContainer}>
        {members.map((member, index) => {
          const isActive = index === selectedIndex;

          return (
            <motion.li
              className={styles.emblaSlide}
              key={`${member.firstName}-${member.lastName}-${index}`}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: isActive ? 1 : 0.1 }}
              transition={{
                duration: 0.8,
                ease: !isActive ? "easeOut" : "easeIn",
              }}
            >
              <div className={styles.largeItem}>
                <div className={styles.info}>
                  <p className={sharedStyles.firstName}>{member.firstName}</p>
                  <p className={sharedStyles.lastName}>{member.lastName}</p>
                  <p className={sharedStyles.role}>did {member.role}</p>
                  <div className={sharedStyles.social}>
                    {member.socialMedia.map((social) => (
                      <a
                        target="_blank"
                        href={social.url}
                        key={social.type}
                        rel="noopener noreferrer"
                        className={sharedStyles.socialLink}
                      >
                        <SocialIcon
                          name={social.type.toLowerCase()}
                          size={50}
                        />
                      </a>
                    ))}
                  </div>
                </div>
                <Image
                  width={320}
                  height={427}
                  src={member.image}
                  alt={member.firstName}
                  className={`${styles.image} ${isActive ? styles.active : ""}`}
                />
                <div className={styles.other}>
                  <p className={sharedStyles.question}>{member.question}</p>
                  <p className={sharedStyles.answer}>
                    &quot;{member.answer}&quot;
                  </p>
                  <div className={sharedStyles.music}>
                    <Image
                      width={16}
                      height={16}
                      src="/yt-music.svg"
                      alt="YouTube Music"
                      className={sharedStyles.youtubeMusic}
                    />
                    <p>Listening to </p>
                    <p className={sharedStyles.song}>
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
  );
};
