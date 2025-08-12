import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

import fs from "fs";
import path from "path";

export function getMessages(locale: string) {
  const dirPath = path.join(import.meta.filename, "..", "messages", locale);
  const messages: Record<string, unknown> = {};

  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    if (file.endsWith(".json")) {
      const filePath = path.join(dirPath, file);
      const content = JSON.parse(fs.readFileSync(filePath, "utf8"));

      const namespace = path.basename(file, ".json");
      messages[namespace] = content;
    }
  }

  return messages;
}
export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: getMessages(locale),
  };
});
