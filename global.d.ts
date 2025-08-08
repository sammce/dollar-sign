import { routing } from "@/i18n/routing";
import HomePage from "@/messages/en/HomePage.json";

declare module "next-intl" {
  interface AppConfig {
    Messages: {
      HomePage: typeof HomePage;
    };
    Locale: (typeof routing.locales)[number];
  }
}
