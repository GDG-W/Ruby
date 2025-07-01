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
      className={`mx-auto w-full max-w-7xl ${className}`}
      style={{
        zIndex: 5,
        backgroundImage: "url('/Pattern.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "clamp(50rem, 100vw, 84.5rem)",
      }}
    >
      <motion.div className="w-full">{children}</motion.div>
    </div>
  );
}
