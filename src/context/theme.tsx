"use client";

import { createContext, useCallback, useLayoutEffect, useMemo } from "react";
import { darkPreferred } from "@/lib/utils";
import { useCookies } from "react-cookie";

export type Theme = "system" | "light" | "dark";

export const ThemeContext = createContext<[Theme, (newTheme: Theme) => void]>([
  "system",
  () => {},
]);

/**
 * Applies the theme by adding the corresponding class to the body element
 */
const applyTheme = (theme: Theme) => {
  if (typeof window === "undefined") return;

  document.querySelector("body")?.classList.toggle("dark", theme === "dark");
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [{ theme = "system" }, setCookie] = useCookies([
    "theme",
    "prefers-dark",
  ]);

  useLayoutEffect(() => {
    setCookie("prefers-dark", darkPreferred());

    if (theme === "system") {
      if (darkPreferred()) {
        applyTheme("dark");
      } else {
        applyTheme("light");
      }

      return;
    }

    applyTheme(theme);
  }, [theme, setCookie]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setCookie("theme", newTheme);
      if (newTheme === "system") {
        if (darkPreferred()) {
          setCookie("prefers-dark", true);
        }
      }
    },
    [setCookie],
  );

  const contextValue: [Theme, (newTheme: Theme) => void] = useMemo(
    () => [theme || "system", setTheme],
    [theme, setTheme],
  );

  return <ThemeContext value={contextValue}>{children}</ThemeContext>;
}
