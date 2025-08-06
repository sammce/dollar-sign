import { headers } from "next/headers";
import { supportedLanguages, type SupportedLanguage } from "@/constants";

/**
 * Parse the Accept-Language header and return the first supported locale/language.
 * If no supported language is found, return the default language (en).
 *
 * @returns The first supported language/locale
 */
export async function getLanguage() {
  const headerObj = await headers();
  const locale = headerObj
    .get("Accept-Language")
    ?.split(",")
    .map((lang) => lang.split(";")[0])
    .find((lang) =>
      supportedLanguages.includes(lang.split("-")[0] as SupportedLanguage),
    );

  const language = locale?.split("-")[0];

  if (locale && language) {
    return {
      locale,
      language,
    };
  }

  return {
    locale: "en",
    language: "en",
  };
}
