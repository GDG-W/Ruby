/* eslint-disable simple-import-sort/imports */

import { CSSProperties, ReactNode } from "react";

import Image from "next/image";
import VerticalText from "./VerticalText";

interface IconConfig {
  id?: string;
  component: ReactNode;
  positioning?: string;
  className?: string;
  style?: CSSProperties;
}

interface AsideProps {
  leftText?: string;
  rightText?: string;
  className?: string;
  leftIcons?: IconConfig[];
  rightIcons?: IconConfig[];
  leftTextClassName?: string;
  rightTextClassName?: string;
}
export default function Aside({
  leftText = "DEVFEST",
  rightText = "2025",
  className = "2xl:ml-0  flex justify-between items-stretch h-full overflow-hidden relative",
  leftIcons = [
    {
      component: <Image src="/icons.svg" alt="icons" width={36} height={100} />,
      positioning: "absolute",
      className: "-top-2 xl:left-21 2xl:left-24 2xl:-top-5 w-[2.25rem]",
    },
    {
      component: <Image src="/v-shaped-icon.svg" alt="icons" width={55} height={100} />,
      positioning: "absolute",
      className: "bottom-32 2xl:left-0 2xl:w-[40px] 2xl:bottom-36 xl:-left-8",
    },
  ],
  rightIcons = [
    {
      component: <Image src="/arrow.svg" alt="icons" width={100} height={100} />,
      positioning: "",
      className: "flex  justify-center 2xl:w-[80px]   w-full h-full",
    },
  ],
  leftTextClassName = "leading-[1] 2xl:leading-normal text-[5.5rem]  font-akira  font-extrabold writing-mode-vertical-lr text-[#242424] ",
  rightTextClassName = "leading-[1] items-center flex font-akira text-[5.5rem] font-extrabold writing-mode-vertical-rl text-[#242424] ",
}: AsideProps) {
  return (
    <aside className={`${className}`}>
      <div className="relative flex-shrink-0 xl:my-8 xl:ml-8 2xl:ml-0">
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
      <section className="relative top-[26.5rem] left-[24.5rem] h-fit w-fit 2xl:top-[28rem] 2xl:left-[25.5rem]">
        <Image
          src="/top-quote.svg"
          alt="Top Quote Icon"
          width={44}
          height={24}
          className="absolute -top-12 -left-15 2xl:-left-20"
        />

        <blockquote
          className="text-base font-semibold text-[#242424] uppercase sm:text-lg xl:text-xl"
          aria-label="Event invitation quote"
        >
          Are you there?
        </blockquote>

        <Image
          src="/bottom-quote.svg"
          alt="Bottom Quote Icon"
          width={44}
          height={24}
          className="absolute -right-12 -bottom-12 2xl:-right-11"
        />
      </section>

      <div className="relative flex flex-shrink-0 flex-col items-center justify-center space-y-8">
        <div>
          <VerticalText text={rightText} writingMode="vertical-rl" className={rightTextClassName} />
        </div>

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
    </aside>
  );
}
