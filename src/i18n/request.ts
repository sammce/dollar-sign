import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

const JSON_FILES = ["HomePage"] as const;

type Messages<T extends string = (typeof JSON_FILES)[number]> = Record<
  T,
  Record<string, string>
>;

export async function getMessages(locale: string) {
  const messages: Messages<string> = {};

  for (const file of JSON_FILES) {
    messages[file] = (
      await import(`../messages/${locale}/${file}.json`)
    ).default;
  }

  return messages as Messages;
}
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: await getMessages(locale),
  };
});
