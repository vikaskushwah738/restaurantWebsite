"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait" >
      <motion.div
        className={cn(
          "flex w-96 fixed inset-x-0 top-10 mx-auto md:px-0 px-4 shadow-lg border text-white rounded-full bg-black pr-2 h-10 md:h-14 text-xl  items-center justify-center md:space-x-7 space-x-2",
          className
        )}
      >
        {navItems.map((navItem, index) => (
          <Link
            key={`${index}`}
            href={navItem.link}
            className={cn(
              "relative items-center md:p-1.5 rounded-xl hover:border-2 text-white hover:border-purple-600  "
            )}
          >
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
       </motion.div>
    </AnimatePresence>
  );
};



