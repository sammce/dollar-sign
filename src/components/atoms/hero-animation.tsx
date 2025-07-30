"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HeroAnimation({ className }: { className?: string }) {
  return (
    <DotLottieReact
      src="/lottie/data-splash.lottie"
      loop
      autoplay
      height={250}
      width={250}
      className={className}
    />
  );
}
