"use client";

import { Button } from "@/components/ui";
import { IconSun, IconMoon, IconDeviceDesktopCog } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui";
import { useEffect, useState } from "react";
import { useThemeStore, type Theme } from "@/stores";

const defaultIconProps = {
  className: "text-foreground size-5",
};

/**
 * The different icons that can be shown by the dark mode toggle
 */
const themeIcons: Record<Theme, React.ReactNode> = {
  dark: <IconMoon {...defaultIconProps} />,
  light: <IconSun {...defaultIconProps} />,
  system: <IconDeviceDesktopCog {...defaultIconProps} />,
};

/**
 * Allows switching themes via dropdown menu.
 */
function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useThemeStore();
  const [icon, setIcon] = useState<React.ReactNode>(null);

  useEffect(() => {
    setIcon(themeIcons[theme]);
  }, [theme]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setTheme(e.currentTarget.getAttribute("data-theme") as Theme);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="shadow-xs rounded-full w-11 h-11"
          title="Switch Theme"
        >
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={className + " mr-4"}
        onClick={(e) => e.preventDefault()}
      >
        <DropdownMenuLabel className="text-center">
          Switch Theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.entries(themeIcons).map(([themeOption, icon]) => (
          <DropdownMenuItem
            key={themeOption}
            data-theme={themeOption}
            onClick={handleClick}
            className={cn("pr-6", {
              "bg-accent": themeOption === theme,
            })}
          >
            {icon}{" "}
            <span>
              {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ThemeSwitcher };
