/* eslint-disable simple-import-sort/imports */

import Button from "./ui/Button";
import Image from "next/image";
import Logo from "./ui/Logo";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header className="w-full border-b border-[#D1D1D1] bg-[#FFFAEB]/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex flex-shrink-0 justify-between xl:ml-2 xl:gap-[2.35rem] 2xl:ml-0 2xl:gap-[1.6rem]">
          <Logo className="" />
          <div className="border-[.5px] border-[#D1D1D1]"></div>
          <h2 className="font-akira font-extrabold text-[#242424] xl:text-8xl 2xl:text-[6.9rem]">
            LAGOS
          </h2>
        </div>

        <div className="relative flex items-center">
          <Image
            src="/pink-icons.svg"
            alt="pink-icons"
            width={200}
            height={200}
            className="absolute -left-38 -z-10"
          />
          <div className="flex">
            <Button
              variant="primary"
              className="flex items-center justify-center gap-2 bg-[#F6B51E] px-3 py-2 text-xs whitespace-nowrap transition-all hover:bg-[#E5A818] sm:px-4 sm:text-sm lg:px-6 lg:py-3 lg:text-base"
            >
              <span className="hidden sm:inline">Join the waitlist</span>
              <span className="sm:hidden">Join waitlist</span>
              <Image src="/vector.svg" alt="arrow icon" width={14} height={14} />
            </Button>
            <Button
              variant="secondary"
              className="flex items-center justify-center gap-2 px-3 py-2 text-xs whitespace-nowrap transition-all sm:px-4 sm:text-sm lg:px-6 lg:py-3 lg:text-base"
            >
              <span className="hidden sm:inline">View 2024 Recap</span>
              <span className="sm:hidden">2024 Recap</span>
              <Image src="/play.svg" alt="play icon" width={16} height={16} />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
