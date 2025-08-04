import { motion } from "framer-motion";
import { ReactNode } from "react";

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
