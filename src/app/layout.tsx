import type { Metadata } from "next";
import { IBM_Plex_Sans, Geist_Mono } from "next/font/google";

import Layout from "@/components/layout";

import "./css/globals.css";

const ibm = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
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
  return (
    <html lang="en">
      <body className={`${ibm.variable} ${geistMono.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
