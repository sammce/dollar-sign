"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

/**
 * Footer layout component
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const threshold = 20;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={cn(
        // Apply shadow to the after element on scroll, this is more performant and looks smoother than adding shadow to element itself
        "px-6 py-2 flex justify-between items-center z-30 h-18 fixed w-full after:opacity-0 after:transition-opacity not-dark:after:shadow-sm after:w-full after:h-full after:absolute after:left-0 after:-z-10",
        {
          "after:opacity-100 dark:border-b dark:border-border/50 backdrop-blur-2xl bg-background/40":
            isScrolled,
        },
      )}
    >
      <div className="flex gap-8 items-center h-full">
        <Link href="/" className="text-inherit">
          <h3 className="font-bold">
            <span className="mobile-hidden">Dollar $ign</span>
            <span className="mobile-visible">$</span>
          </h3>
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <SocialIcon
          url="https://github.com/sammce/budget-tool"
          className="border rounded-full border-border shadow-xs hover:bg-accent/50 transition-colors"
          target="_blank"
          bgColor="transparent"
          fgColor="var(--foreground)"
          style={{ height: 44, width: 44 }}
        />
        <ThemeSwitcher className="z-50" />
      </div>
    </header>
  );
}
