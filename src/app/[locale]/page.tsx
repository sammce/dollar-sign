"use client";

import {
  HeroAnimation,
  Macbook,
  TracingBeam,
  SlopedShape,
  AppearingCard,
} from "@/components/atoms/home";
import {
  LinkButton,
  ContainerTextFlip,
  HeroHighlight,
  HoverBorderGradient,
  GlassCard,
  ShineBorder,
  TextReveal,
  NumberTicker,
  Confetti,
  type ConfettiRef,
} from "@/components/ui";
import { useCallback, useRef } from "react";

export default function Home() {
  const confettiRef = useRef<ConfettiRef>(null);

  const handleTickerFinish = useCallback(() => {
    confettiRef.current?.fire({
      spread: 90,
      particleCount: 200,
      origin: { y: 0.8 },
    });
  }, []);

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
                  as={LinkButton}
                  containerClassName="mx-auto xl:mx-0 mt-10"
                  className="text-xl uppercase font-mono"
                  href="/dashboard"
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
          <div className="min-h-[120vh] mx-auto w-90% m-auto bg-background">
            <AppearingCard colour="silver">One</AppearingCard>
            <AppearingCard colour="gold" offset>
              More
            </AppearingCard>
            <AppearingCard colour="diamond">Thing...</AppearingCard>
          </div>

          <div className="h-[100vh] relative mx-auto w-90% m-auto bg-background text-8xl font-bold flex justify-center items-center flex-col gap-4 z-30 text-center">
            {/* TODO: Change this to localised currency */}
            <p>It only costs</p>
            <p>
              <span className="text-primary mr-1">€</span>
              <NumberTicker
                value={0}
                decimalPlaces={2}
                startValue={100}
                direction="up"
                onFinish={handleTickerFinish}
              />
              <Confetti
                ref={confettiRef}
                manualstart
                className="absolute left-0 top-0 w-full h-full overflow-visible"
              />
            </p>
            <HoverBorderGradient
              as={LinkButton}
              href="/dashboard"
              containerClassName="mx-auto xl:mx-0 mt-10"
              className="text-xl uppercase font-mono"
            >
              Start saving
            </HoverBorderGradient>
          </div>
        </div>
      </TracingBeam>
    </>
  );
}
