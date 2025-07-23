/* eslint-disable simple-import-sort/imports */

import Button from "./ui/Button";
import Image from "next/image";
import Logo from "./ui/Logo";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header className="w-full border-b border-[#D1D1D1] bg-[#FFF7E5]/95 backdrop-blur-sm">
      <div className="mx-auto flex items-center justify-between gap-4">
        <div className="flex flex-shrink-0 justify-between">
          <Logo src="/logo.svg" className="mx-10" />
          <div className="border-[.5px] border-[#D1D1D1]"></div>
          <h2 className="font-akira ml-10 text-[12dvh] leading-none font-extrabold text-[#242424]">
            LAGOS
          </h2>
        </div>

        <div className="relative flex h-[12dvh] items-center">
          <Image
            src="/pink-icons.svg"
            alt="pink-icons"
            width={200}
            height={200}
            className="absolute -left-38 -z-10"
          />
          <div className="flex h-full">
            <Link href="https://2024.devfestlagos.com/" target="_blank">
              <Button
                variant="primary"
                className="flex h-full items-center justify-center gap-2 bg-[#F6B51E] px-3 text-xs whitespace-nowrap transition-all hover:bg-[#E5A818] sm:px-4 sm:text-sm lg:px-6 lg:text-base"
              >
                Visit 2024 Website
                <Image src="/vector.svg" alt="arrow icon" width={14} height={14} />
              </Button>
            </Link>
            <Link href="https://photos.app.goo.gl/LyuJgDDFsefN2r5i6" target="_blank">
              <Button
                variant="secondary"
                className="flex h-full items-center justify-center gap-2 px-3 text-xs whitespace-nowrap transition-all sm:px-4 sm:text-sm lg:px-6 lg:text-base"
              >
                View 2024 Recap
                <Image src="/play.svg" alt="play icon" width={16} height={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
