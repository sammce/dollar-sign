"use client";

import Link from "next/link";
import { Separator, ThemeSwitcher } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={cn(
        // Apply shadow to the after element on scroll, this is more performant and looks smoother than adding shadow to element itself
        "px-6 py-2 border-b dark:border-neutral-700 flex justify-between items-center z-30 h-18 fixed w-full bg-background after:opacity-0 after:transition-opacity not-dark:after:shadow-lg after:w-full after:h-full after:absolute after:left-0 after:-z-10",
        { "after:opacity-100 border-background": isScrolled },
      )}
    >
      <div className="flex gap-8 items-center h-full">
        <Link href="/" className="mobile-hidden">
          <h3 className="font-bold">Budgeting App</h3>
        </Link>
        <Separator orientation="vertical" className="mobile-hidden" />
      </div>
      <div className="flex gap-6 items-center">
        <ThemeSwitcher className="z-50" />
      </div>
    </header>
  );
}
