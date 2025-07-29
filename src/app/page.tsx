"use client";

import { HeroAnimation } from "@/components/atoms";
import {
  Button,
  ContainerTextFlip,
  HeroHighlight,
  HoverBorderGradient,
} from "@/components/ui";

export default function Home() {
  return (
    <HeroHighlight>
      <div className="flex items-center gap-20">
        <div>
          <h1 className="text-center xl:text-left text-6xl xl:text-8xl font-bold min-w-[34rem] xl:min-w-[40rem]">
            Take control
            <br /> of your
            <br />{" "}
            <ContainerTextFlip
              words={["finances", "subscriptions", "social life", "assets"]}
              className="mt-5 -pt-1"
              textClassName="text-6xl xl:text-8xl font-bold"
              interval={4000}
            />
          </h1>
          <div className="w-full">
            <HoverBorderGradient
              as={Button}
              containerClassName="mx-auto xl:mx-0 mt-10"
              className="text-xl"
            >
              Get Started
            </HoverBorderGradient>
          </div>
        </div>
        <div className="mobile-hidden">
          <HeroAnimation />
        </div>
      </div>
    </HeroHighlight>
  );
}
