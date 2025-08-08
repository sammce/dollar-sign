import { defineRouting } from "next-intl/routing";
import { supportedLanguages } from "@/constants";

export const routing = defineRouting({
  defaultLocale: "en",
  locales: supportedLanguages,
});
