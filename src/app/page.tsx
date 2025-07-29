import { HeroAnimation } from "@/components/atoms";
import { ContainerTextFlip, HeroHighlight } from "@/components/ui";

export default function Home() {
  return (
    <HeroHighlight>
      <div className="flex items-center gap-20">
        <h1 className="text-5xl xl:text-8xl font-bold lg:min-w-[34rem] xl:min-w-[40rem]">
          Take control
          <br /> of your
          <br />{" "}
          <ContainerTextFlip
            words={["finances", "social life", "subscriptions", "assets"]}
            className="mt-5 -pt-1"
            textClassName="text-5xl xl:text-8xl font-bold"
            interval={4000}
          />
        </h1>
        <div className="mobile-hidden">
          <HeroAnimation />
        </div>
      </div>
    </HeroHighlight>
  );
}
