"use client";

import { createContext, useCallback, useLayoutEffect, useMemo } from "react";
import { darkPreferred } from "@/lib/utils";
import { useCookies } from "react-cookie";

export type Theme = "system" | "light" | "dark";

export const ThemeContext = createContext<[Theme, (newTheme: Theme) => void]>([
  "system",
  () => { },
]);

/**
 * Applies the theme by adding the corresponding class to the body element
 */
const applyTheme = (theme: Theme) => {
  if (typeof window === "undefined") return;

  document.querySelector("body")?.classList.toggle("dark", theme === "dark");
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [{ theme }, setCookie] = useCookies(["theme"]);

  useLayoutEffect(() => {
    const safeTheme = theme || "system";

    if (safeTheme === "system") {
      if (darkPreferred()) {
        applyTheme("dark");
      } else {
        applyTheme("light");
      }

      return;
    }

    applyTheme(safeTheme);
  }, [theme]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setCookie("theme", newTheme);
    },
    [setCookie],
  );

  const contextValue: [Theme, (newTheme: Theme) => void] = useMemo(
    () => [theme || "system", setTheme],
    [theme, setTheme],
  );

  return <ThemeContext value={contextValue}>{children}</ThemeContext>;
}
