/* eslint-disable simple-import-sort/imports */

import { CSSProperties, ReactNode } from "react";

import Button from "./ui/Button";
import Image from "next/image";
import VerticalText from "./VerticalText";

interface IconConfig {
  id?: string;
  component: ReactNode;
  positioning?: string;
  className?: string;
  style?: CSSProperties;
}

interface MobileAsideProps {
  leftText?: string;
  rightText?: string;
  className?: string;
  leftIcons?: IconConfig[];
  rightIcons?: IconConfig[];
  leftTextClassName?: string;
  rightTextClassName?: string;
}

export default function MobileAside({
  leftText = "DEVFEST",
  rightText = "2025",
  className = "flex justify-between h-screen sm1:min-h-screen  sm2:h-screen items-stretch  overflow-y-hidden relative",
  leftIcons = [
    {
      component: <Image src="/icons.svg" alt="icons" width={24} height={60} />,
      positioning: "absolute",
      className: "top-50 left-4 sm1:top-5 w-[1.5rem]",
    },
    {
      component: <Image src="/v-shaped-icon.svg" alt="icons" width={32} height={60} />,
      positioning: "absolute",
      className: "bottom-16 -left-4 w-[1.75rem]",
    },
  ],
  rightIcons = [
    {
      component: <Image src="/arrow.svg" alt="icons" width={60} height={60} />,
      positioning: "",
      className: "flex justify-center w-[3.75rem] h-full",
    },
  ],
  leftTextClassName = "leading-[1]  text-[3rem] font-akira font-extrabold writing-mode-vertical-lr text-[#242424]",
  rightTextClassName = "leading-[1] items-center flex font-akira text-[3rem] font-extrabold writing-mode-vertical-rl text-[#242424]",
}: MobileAsideProps) {
  return (
    <aside className={`${className}`}>
      <div className="relative mb-8 flex flex-shrink-0 items-end justify-end">
        <VerticalText text={leftText} className={leftTextClassName} />
        {leftIcons.map((icon, index) => (
          <div
            key={`left-icon-${index}`}
            className={`z-10 ${icon.positioning ?? ""} ${icon.className ?? ""}`}
            style={icon.style}
          >
            {icon.component}
          </div>
        ))}
      </div>

      <div className="sm1:top-10 sm2:top-20 relative top-[78vh] flex w-full flex-col">
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
          <VerticalText text={rightText} writingMode="vertical-rl" className={rightTextClassName} />
          {rightIcons.map((icon, index) => (
            <div key={`right-icon-${index}`}>
              <div
                className={`z-10 ${icon.positioning ?? ""} ${icon.className ?? ""}`}
                style={icon.style}
              >
                {icon.component}
              </div>
            </div>
          ))}
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
