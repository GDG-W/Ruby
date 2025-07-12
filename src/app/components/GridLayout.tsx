/* eslint-disable simple-import-sort/imports */
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GridLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function GridLayout({ children, className = "" }: GridLayoutProps) {
  return (
    <div className={`mx-auto w-full ${className}`}>
      <motion.div className="flex h-screen w-full flex-col">{children}</motion.div>
    </div>
  );
}
