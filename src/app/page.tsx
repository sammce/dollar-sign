"use client";

import { HeroAnimation, SlopedShape } from "@/components/atoms";
import {
  Button,
  ContainerTextFlip,
  HeroHighlight,
  HoverBorderGradient,
  GlassCard,
  ShineBorder,
} from "@/components/ui";

export default function Home() {
  return (
    <HeroHighlight containerClassName="min-h-[calc(100vh-10rem)] relative">
      <div className="flex items-center gap-20">
        <div>
          <h1 className="text-center xl:text-left text-6xl xl:text-8xl font-bold min-w-[20rem] xl:min-w-[40rem]">
            Take control <br />
            of your <br />{" "}
            <ContainerTextFlip
              words={[
                "future",
                "shopping",
                "subscriptions",
                "lunches",
                "assets",
              ]}
              className="mt-5 -pt-1 pb-5"
              textClassName="text-6xl xl:text-8xl font-bold"
              interval={4000}
            />
          </h1>
          <div className="w-full">
            <HoverBorderGradient
              as={Button}
              containerClassName="mx-auto xl:mx-0 mt-10"
              className="text-xl uppercase font-mono"
            >
              Get Started
            </HoverBorderGradient>
          </div>
        </div>
        <div className="mobile-hidden relative min-w-[250px] min-h-[250px]">
          <GlassCard className="bg-background backdrop-blur-none transform-3d -skew-12 rotate-x-[50deg] min-h-[350px] min-w-[350px] relative overflow-hidden">
            <ShineBorder shineColor={["#00FF65", "#00F3BD", "#00FF00"]} />
          </GlassCard>
          <div className="bg-primary/20 absolute w-full h-full -top-[3px] -left-[2px] rounded-xl -z-10 transform-3d -skew-12 rotate-x-[50deg] min-h-[368px] min-w-[362px] rounded-bl-2xl rounded-tr-3xl"></div>
          <SlopedShape />
          <HeroAnimation className="absolute top-[-100px] left-[-20px] w-[350px] h-[350px]" />
        </div>
      </div>
    </HeroHighlight>
  );
}
