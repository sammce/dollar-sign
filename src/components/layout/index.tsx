"use client";

import Footer from "./footer";
import Header from "./header";
import { ThemeProvider } from "@/context";
import { CookiesProvider } from "react-cookie";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <div className="flex flex-col">
          <Header />
          {/* <div className="h-18 py-2"></div> */}
          <main className="flex-grow shadow-xl min-h-screen relative bg-background pb-25 z-10">
            {children}
          </main>
          <div className="h-40 w-full bg-transparent sticky"></div>
          <Footer />
        </div>
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default Layout;
