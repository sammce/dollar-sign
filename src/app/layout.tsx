import type { Metadata } from "next";
import { IBM_Plex_Sans, Geist_Mono } from "next/font/google";

import Layout from "@/components/layout";

import "./css/globals.css";
import { cookies } from "next/headers";
import { Theme } from "@/stores";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();

  const settings = (cookieStore.get("settings-storage")?.value ?? {
    prefersDark: false,
    theme: "system",
  }) as string;

  const { prefersDark, theme } = JSON.parse(settings).state as ThemeCookie;

  let initialTheme = "light";

  if (theme === "system") {
    initialTheme = prefersDark ? "dark" : "light";
  } else {
    initialTheme = theme;
  }

  console.log(initialTheme);

  return (
    <html lang="en">
      <body
        className={`${ibm.variable} ${geistMono.variable} ${initialTheme} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
