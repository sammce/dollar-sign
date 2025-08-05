"use client";

import {
  HeroAnimation,
  Macbook,
  TracingBeam,
  SlopedShape,
  AppearingCard,
} from "@/components/atoms/home";
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
      <TracingBeam variant="blue">
        <HeroHighlight containerClassName="relative z-10">
          <div className="flex items-center w-full gap-20 h-[80vh]">
            <div className="w-full">
              <h1 className="text-center xl:text-left text-5xl md:text-6xl xl:text-8xl font-bold min-w-[20rem] xl:min-w-[40rem]">
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
                  className="mt-5 pt-1 xl:pt-0 pb-3 xl:pb-5"
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
            <div className="hidden xl:block relative min-w-[250px] min-h-[250px] mt-24">
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
      </TracingBeam>
      <div className="w-full -mt-[10vh] ">
        <TextReveal>
          Track your income, expenses, and assets from the same dashboard. No
          more juggling multiple apps.
        </TextReveal>
      </div>
      <TracingBeam variant="orange">
        <div>
          <div className="h-[200vh] mx-auto w-90% m-auto bg-background">
            <AppearingCard colour="silver">One</AppearingCard>
            <AppearingCard colour="gold" offset>
              More
            </AppearingCard>
            <AppearingCard colour="diamond">Thing...</AppearingCard>
          </div>
        </div>
      </TracingBeam>
    </>
  );
}
