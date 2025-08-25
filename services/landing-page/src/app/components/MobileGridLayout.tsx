import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GridLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function MobileGridLayoutPrecise({ children, className = "" }: GridLayoutProps) {
  return (
    <div
      className={`bg-size-70vw min-h-dvh md:bg-none ${className}`}
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
