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
  const carouselRef = useRef<{
    scrollPrev: () => void;
    scrollNext: () => void;
  } | null>(null);
  const [carouselInView, setCarouselInView] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver(observerRef, {
    once: true,
    onEnter: () => {
      setCarouselInView(true);
    },
  });

  const scrollLeft = () => {
    carouselRef.current?.scrollPrev();
  };

  const scrollRight = () => {
    carouselRef.current?.scrollNext();
  };

  return (
    <div ref={observerRef}>
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
    </div>
  );
}
