"use client";

import { cn } from "@/lib/utils";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HeroAnimation({ className }: { className?: string }) {
  return (
    <DotLottieReact
      src="/lottie/data-splash.lottie"
      loop
      autoplay
      height={250}
      width={250}
      className={cn("rotate-y-180", className)}
    />
  );
}
