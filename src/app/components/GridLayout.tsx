/* eslint-disable simple-import-sort/imports */

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GridLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function GridLayout({ children, className = "" }: GridLayoutProps) {
  return (
    <div
      className={`mx-auto min-h-screen w-full max-w-7xl ${className}`}
      style={{
        backgroundImage: `url(/Pattern.svg)`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "clamp(50rem, 100vw, 87.5rem)",
        zIndex: 5,
      }}
    >
      <motion.div className="w-full">{children}</motion.div>
    </div>
  );
}
