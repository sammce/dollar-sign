"use client";

import { useEffect, useRef, useState } from "react";

import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export default function TracingBeam({
  children,
  className,
  variant = "blue",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "orange" | "blue";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isOrange = variant === "orange";
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [isOrange ? "start center" : "start start", "end end"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.clientHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0, svgHeight]),
    {
      stiffness: 400,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      [0, !isOrange ? svgHeight : svgHeight - 200],
    ),
    {
      stiffness: 400,
      damping: 90,
    },
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full", className, {})}
    >
      <div
        className={cn("mobile-hidden absolute left-12 z-50 top-32", {
          "right-20 left-auto bottom-32": isOrange,
        })}
      >
        {!isOrange && (
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            className="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
          >
            <div className="h-2 w-2 rounded-full border border-[#059669] bg-[#10b981]" />
          </div>
        )}
        {isOrange && (
          <div className="absolute -right-11 z-20 top-0 w-24 bg-orange-400 h-1 rounded-full shadow-[0_2px_10px_4px] shadow-orange-200 dark:shadow-orange-800"></div>
        )}
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight - (isOrange ? 128 : 0)} // Set the SVG height, minus footer if orange
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 8,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke={`url(#gradient${variant ? "-" + variant : ""})`}
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id={"gradient" + "-" + variant}
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      {!isOrange && (
        <div className="mobile-hidden absolute left-5 z-20 -bottom-36 w-24 bg-sky-400 h-1 rounded-full shadow-[0_2px_10px_4px] shadow-sky-200 dark:shadow-sky-800"></div>
      )}
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}
