"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HeroAnimation() {
  return (
    <DotLottieReact
      src="/lottie/data-splash.lottie"
      loop
      autoplay
      height={400}
      width={400}
    />
  );
}
