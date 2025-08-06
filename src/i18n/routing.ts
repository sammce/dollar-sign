import { defineRouting } from "next-intl/routing";
import type { SupportedLanguage } from "@/constants";

export const routing = defineRouting({
  defaultLocale: "en",
  locales: ["en", "fr"] as SupportedLanguage[],
});
