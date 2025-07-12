/* eslint-disable simple-import-sort/imports */

import Image from "next/image";
import VerticalText from "./VerticalText";

export default function Aside() {
  return (
    <aside className="relative flex flex-grow items-stretch justify-between overflow-hidden 2xl:ml-0">
      <div className="cmf:flex relative flex flex-shrink-0 items-center xl:my-8 xl:ml-8 2xl:ml-0">
        <VerticalText
          text="DEVFEST"
          className="font-akira writing-mode-vertical-lr text-[12dvh] leading-[1] font-extrabold text-[#242424] 2xl:leading-normal"
        />
        <div className="cmf:left-10 absolute -top-2 z-10 w-[2.25rem] xl:left-21 2xl:-top-5 2xl:left-24">
          <Image src="/icons.svg" alt="icons" width={36} height={100} />
        </div>
        <div className="absolute bottom-32 z-10 xl:-left-8 2xl:bottom-36 2xl:left-0 2xl:w-[40px]">
          <Image src="/v-shaped-icon.svg" alt="icons" width={55} height={100} />
        </div>
      </div>

      <div
        className="flex-grow"
        style={{
          zIndex: 5,
          backgroundImage: "url('/Pattern-2.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      />

      <div className="relative flex flex-shrink-0 flex-col items-center justify-center space-y-8">
        <div>
          <VerticalText
            text="2025"
            writingMode="vertical-rl"
            className="font-akira writing-mode-vertical-rl flex items-center text-[12dvh] leading-[1] font-extrabold text-[#242424]"
          />
        </div>

        <div>
          <div className="z-10 flex h-full w-full justify-center 2xl:w-[80px]">
            <Image src="/arrow.svg" alt="icons" width={100} height={100} />
          </div>
        </div>
      </div>
    </aside>
  );
}
