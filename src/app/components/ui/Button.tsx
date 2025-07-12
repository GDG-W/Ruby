/* eslint-disable simple-import-sort/imports */
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseClasses = "px-6 md:px-[1.75rem] xl:px-[2.215rem] font-medium text-sm sm:text-base";

  const variantClasses = {
    primary: "text-[#242424]",
    secondary: "text-[#242424] border-b border-[#D1D1D1] bg-[#FFF7E5]",
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
