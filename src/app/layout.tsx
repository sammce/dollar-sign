import type { Metadata } from "next";
import { IBM_Plex_Sans, Geist_Mono } from "next/font/google";

import Layout from "@/components/layout";

import "./css/globals.css";
import { cookies } from "next/headers";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();

  const storedTheme = cookieStore.get("theme")?.value;
  const prefersDark = cookieStore.get("prefers-dark")?.value === "true";

  const initialTheme =
    storedTheme === "dark" ||
    (storedTheme === "system" && prefersDark ? "dark" : "");

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
