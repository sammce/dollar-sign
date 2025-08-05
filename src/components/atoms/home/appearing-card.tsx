"use client";

import { cn } from "@/lib/utils";
import { useSettingsStore } from "@/stores";
import { motion } from "motion/react";

type Colour = "silver" | "gold" | "diamond";

const lightColours = {
  silver: "from-neutral-300 via-neutral-100 to-neutral-300",
  gold: "from-amber-300 via-amber-100 to-amber-300",
  diamond: "from-sky-300 via-sky-100 to-sky-300",
};

const darkColours = {
  silver: "from-neutral-800 via-neutral-600 to-neutral-800",
  gold: "from-yellow-800 via-yellow-600 to-yellow-800",
  diamond: "from-sky-800 via-sky-500 to-sky-800",
};

export default function AppearingCard({
  children,
  className,
  colour,
  offset = false,
}: {
  children: React.ReactNode;
  className?: string;
  colour: Colour;
  offset?: boolean;
}) {
  const { effectiveTheme } = useSettingsStore();

  const gradient =
    effectiveTheme === "light" ? lightColours[colour] : darkColours[colour];

  return (
    <motion.p
      className={cn(
        "bg-gradient-to-br border border-border shadow-lg flex items-center justify-center rounded-2xl mx-auto lg:ml-40 lg:mr-auto w-[80%] lg:w-[60%] 2xl:w-[40%] h-48 mb-40 lg:mb-80 text-5xl font-bold",
        { "lg:ml-auto bg-gradient-to-bl lg:mr-40": offset },
        gradient,
        className,
      )}
      initial={{ opacity: 0, x: offset ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "0px 0px -200px 0px", once: true }}
      transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
    >
      {children}
    </motion.p>
  );
}
