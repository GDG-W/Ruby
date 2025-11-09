"use client";

import { useRef, useState } from "react";
import type { SpeakerProps } from "@/components/speaker/speaker";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { SpeakersCarousel } from "./speakers-carousel";
import { SpeakersHeader } from "./speakers-header";

interface SpeakersWrapperProps {
  speakers: SpeakerProps[];
}

export function SpeakersWrapper({ speakers }: SpeakersWrapperProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselInView, setCarouselInView] = useState(false);

  useIntersectionObserver(carouselRef, {
    once: true,
    onEnter: () => {
      setCarouselInView(true);
    },
  });

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
    <>
      <SpeakersHeader
        speakerCount={speakers.length}
        onScrollLeft={scrollLeft}
        onScrollRight={scrollRight}
      />
      <SpeakersCarousel
        speakers={speakers}
        carouselRef={carouselRef}
        carouselInView={carouselInView}
      />
    </>
  );
}
