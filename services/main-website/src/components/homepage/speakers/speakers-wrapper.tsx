"use client";

import { useRef } from "react";
import { SpeakersHeader } from "./speakers-header";
import { SpeakersCarousel } from "./speakers-carousel";
import type { SpeakerProps } from "@/components/speaker/speaker";

interface SpeakersWrapperProps {
  speakers: SpeakerProps[];
  laptopImage: any;
}

export function SpeakersWrapper({ speakers, laptopImage }: SpeakersWrapperProps) {
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
    <>
      <SpeakersHeader 
        speakerCount={speakers.length} 
        onScrollLeft={scrollLeft}
        onScrollRight={scrollRight}
      />
      <SpeakersCarousel 
        speakers={speakers} 
        laptopImage={laptopImage}
        carouselRef={carouselRef}
      />
    </>
  );
}