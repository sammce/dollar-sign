import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";

import Layout from "@/components/layout";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam's Budgeting App",
  description: "Stop worrying about your finances and let us do it for you.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storedTheme = (await cookies())?.get("theme")?.value;

  const initialTheme = storedTheme === "dark" ? "dark" : "";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${initialTheme} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
