"use client";

import Footer from "./footer";
import Header from "./header";
import { ThemeProvider } from "@/context";
import { CookiesProvider } from "react-cookie";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default Layout;
