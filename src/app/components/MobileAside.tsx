/* eslint-disable simple-import-sort/imports */

import Button from "./ui/Button";
import Image from "next/image";
import VerticalText from "./VerticalText";

export default function MobileAside() {
  return (
    <aside className="relative flex flex-grow items-stretch justify-between overflow-y-hidden">
      <div className="relative mb-8 flex flex-shrink-0 items-end justify-end">
        <VerticalText
          text="DEVFEST"
          className="font-akira writing-mode-vertical-lr text-[3rem] leading-[1] font-extrabold text-[#242424]"
        />
        <div className="sm1:top-5 absolute top-50 left-4 z-10 w-[1.5rem]">
          <Image src="/icons.svg" alt="icons" width={24} height={60} />
        </div>
        <div className="absolute bottom-16 -left-4 z-10 w-[1.75rem]">
          <Image src="/v-shaped-icon.svg" alt="icons" width={32} height={60} />
        </div>
      </div>

      <div className="relative isolate z-99 mt-auto mb-[5dvh] flex w-full flex-col">
        <Button
          variant="primary"
          className="flex items-center justify-center gap-2 bg-[#F6B51E] px-3 py-6 text-xs whitespace-nowrap transition-all hover:bg-[#E5A818] sm:px-4 sm:text-sm lg:px-6 lg:py-3 lg:text-base"
        >
          <span className="hidden sm:inline">Join the waitlist</span>
          <span className="sm:hidden">Join waitlist</span>
          <Image src="/vector.svg" alt="arrow icon" width={14} height={14} />
        </Button>
        <Button
          variant="secondary"
          className="flex items-center justify-center gap-2 px-3 py-6 text-xs whitespace-nowrap transition-all sm:px-4 sm:text-sm lg:px-6 lg:py-3 lg:text-base"
        >
          <span className="hidden sm:inline">View 2024 Recap</span>
          <span className="sm:hidden">2024 Recap</span>
          <Image src="/play.svg" alt="play icon" width={16} height={16} />
        </Button>
      </div>

      <div className="relative flex flex-shrink-0 flex-col items-center justify-between border-l border-[#D1D1D1]">
        <div className="mt-4 space-x-8">
          <VerticalText
            text="2025"
            writingMode="vertical-rl"
            className="font-akira writing-mode-vertical-rl flex items-center text-[3rem] leading-[1] font-extrabold text-[#242424]"
          />
          <div>
            <div className="z-10 flex h-full w-[3.75rem] justify-center">
              <Image src="/arrow.svg" alt="icons" width={60} height={60} />
            </div>
          </div>
        </div>

        <section className="writing-mode-vertical-rl relative mb-12 h-fit w-fit">
          <Image
            src="/top-quote.svg"
            alt="Top Quote Icon"
            width={32}
            height={18}
            className="writing-mode-vertical-rl absolute -top-7 left-2 rotate-90"
          />

          <blockquote
            className="text-xl font-bold text-[#242424] uppercase sm:text-base"
            aria-label="Event invitation quote"
          >
            Are you there?
          </blockquote>

          <Image
            src="/bottom-quote.svg"
            alt="Bottom Quote Icon"
            width={32}
            height={18}
            className="writing-mode-vertical-rl absolute top-43 right-2 rotate-90"
          />
        </section>
      </div>
    </aside>
  );
}
