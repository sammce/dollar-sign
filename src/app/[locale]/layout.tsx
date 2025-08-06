import type { Metadata } from "next";
import { IBM_Plex_Sans, Geist_Mono } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { type SupportedLanguage } from "@/constants";

import Layout from "@/components/layout";

import "../globals.css";

import { cookies } from "next/headers";
import { Theme, themeStorageKey } from "@/stores";
import { getMessages } from "next-intl/server";

const ibm = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dollar $ign",
  description: "Stop worrying about your finances and let us worry for you.",
};

type ThemeCookie = {
  prefersDark: boolean;
  theme: Theme;
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: SupportedLanguage }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    return notFound();
  }

  const cookieStore = await cookies();

  const themeStore = cookieStore.get(themeStorageKey)?.value;
  let initialTheme = "light";

  if (themeStore !== undefined) {
    try {
      const { prefersDark, theme } = JSON.parse(themeStore)
        .state as ThemeCookie;

      if (theme === "system") {
        initialTheme = prefersDark ? "dark" : "light";
      } else {
        initialTheme = theme;
      }
    } catch {
      console.error("Failed to parse theme cookie");
    }
  }

  return (
    <html lang={locale}>
      <body
        className={`${ibm.variable} ${geistMono.variable} ${initialTheme} antialiased`}
      >
        <NextIntlClientProvider>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
