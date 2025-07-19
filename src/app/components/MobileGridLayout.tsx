/* eslint-disable simple-import-sort/imports */

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GridLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function MobileGridLayoutPrecise({ children, className = "" }: GridLayoutProps) {
  return (
    <div
      className={`bg-size-70vw min-h-screen md:bg-none ${className}`}
      style={{
        backgroundImage: "url('/gridlines.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <motion.div className="flex min-h-dvh w-full flex-col">{children}</motion.div>
    </div>
  );
}
