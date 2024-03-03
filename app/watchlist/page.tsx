"use client"

import PageHeader from "@/components/page-header";
import { ThemeProvider } from "@/components/theme-provider";

export default function Watchlist() {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PageHeader />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
