"use client";

import { HeroAnimation, Macbook, SlopedShape } from "@/components/atoms";
import {
  Button,
  ContainerTextFlip,
  HeroHighlight,
  HoverBorderGradient,
  GlassCard,
  ShineBorder,
  TextReveal,
} from "@/components/ui";

export default function Home() {
  return (
    <>
      <HeroHighlight containerClassName="relative pt-50 overflow-x-hidden lg:overflow-x-visible  z-20">
        <div className="flex items-center w-full gap-20 2xl:gap-40 -mb-20 xl:mb-35">
          <div className="w-full">
            <h1 className="text-center xl:text-left text-5xl md:text-6xl xl:text-8xl font-bold min-w-[20rem] md:min-w-[30rem] 2xl:min-w-[40rem]">
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
                className="mt-5 pt-2 xl:pt-0 pb-3"
                textClassName="text-5xl md:text-6xl xl:text-8xl font-bold"
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
        <Macbook />
      </HeroHighlight>
      <div className="w-full -mt-[10vh]">
        <TextReveal>
          Track your income, expenses, and assets from the same dashboard. No
          more juggling multiple apps.
        </TextReveal>
      </div>
    </>
  );
}
