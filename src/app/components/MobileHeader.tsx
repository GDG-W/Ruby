/* eslint-disable simple-import-sort/imports */

import Image from "next/image";
import Logo from "./ui/Logo";

export default function MobileHeader() {
  return (
    <header className="flex w-full items-center justify-between gap-4 border-b border-[#D1D1D1] py-2 pl-4">
      <Logo src="/mobilelogo.svg" className="flex w-12 items-center" />
      <h1 className="font-akira text-[3rem] leading-[1] font-extrabold text-[#242424]">LAGOS</h1>
      <Image src="/mobilepinkicon.svg" alt="pink-icons" width={100} height={100} className="w-" />
    </header>
  );
}
