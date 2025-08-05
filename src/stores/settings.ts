import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { cookieStorage } from "./storage";
import { darkPreferred } from "@/lib/utils";

export type Theme = "light" | "dark" | "system";

export type SettingsStore = {
  theme: Theme;
  prefersDark: boolean;
  effectiveTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
};

function applyTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  document.querySelector("body")?.classList.toggle("dark", theme === "dark");
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      theme: "system",
      effectiveTheme: "light",
      prefersDark: darkPreferred(),
      setTheme: (theme) => {
        set({ theme });

        if (theme === "system") {
          applyTheme(get().prefersDark ? "dark" : "light");
          set({ effectiveTheme: get().prefersDark ? "dark" : "light" });

          return;
        }

        set({ effectiveTheme: theme });
        applyTheme(theme);
      },
    }),
    {
      name: "settings-storage",
      storage: createJSONStorage(() => cookieStorage),
    },
  ),
);
