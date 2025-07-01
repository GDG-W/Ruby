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
      className={`bg-size-70vw sm:bg-size-30rem h-screen ${className}`}
      style={{
        backgroundImage: "url('/gridlines.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <motion.div className="w-full">{children}</motion.div>
    </div>
  );
}
