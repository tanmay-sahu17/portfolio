"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type TextRevealProps = {
  lines: string[];
  className?: string;
};

export function TextReveal({ lines, className }: TextRevealProps) {
  return (
    <div className={clsx("space-y-2", className)}>
      {lines.map((line, lineIndex) => (
        <div key={line} className="overflow-hidden">
          <motion.span
            initial={{ y: "130%", filter: "blur(8px)", opacity: 0 }}
            animate={{ y: "0%", filter: "blur(0px)", opacity: 1 }}
            transition={{
              duration: 1.15,
              delay: lineIndex * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block"
          >
            {line}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
