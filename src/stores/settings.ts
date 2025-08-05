import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { cookieStorage } from "./storage";
import { darkPreferred } from "@/lib/utils";

export type Theme = "light" | "dark" | "system";

export type SettingsStore = {
  theme: Theme;
  prefersDark: boolean;
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
      prefersDark: darkPreferred(),
      setTheme: (theme) => {
        set({ theme });

        if (theme === "system") {
          applyTheme(get().prefersDark ? "dark" : "light");
          return;
        }

        applyTheme(theme);
      },
    }),
    {
      name: "settings-storage",
      storage: createJSONStorage(() => cookieStorage),
    },
  ),
);
